import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { price, name, _id } = order;
    const { user } = useAuth();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);


    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [price])


    // console.log(clientSecret);

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        setProcessing(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setError(error.message);
            setSuccess('')
        } else {
            setError('');

        }

        //payment intent 
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: user?.email
                    },
                },
            },
        );

        if (intentError) {
            setError(intentError.message)
            setSuccess('')
        } else {
            setError('')
            setSuccess('Your payment process successfully')
            console.log(paymentIntent);
            setProcessing(false)
            //send to database
            const payment = {
                amount: paymentIntent.amount,
                transaction: paymentIntent.client_secret.slice('_secret')[0],
                created: paymentIntent.created,
            }
            const url = `http://localhost:5000/orders/${_id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {processing ? <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> : <button className="btn btn-success" type="submit" disabled={!stripe || success}>
                    Pay {price}
                </button>}
                {
                    error && <p style={{ color: 'green' }}>{error}</p>
                }
                {
                    success && <p className="text-success">{success}</p>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;