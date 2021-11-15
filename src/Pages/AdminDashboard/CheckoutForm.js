import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Alert } from 'bootstrap';
import React, { useState } from 'react';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { price } = order;
    const [error, setError] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setError(error.message);
        } else {
            setError('');
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
                <button className="btn btn-success" type="submit" disabled={!stripe}>
                    Pay {price}
                </button>
                {
                    error && <p style={{ color: 'red' }}>{error}</p>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;