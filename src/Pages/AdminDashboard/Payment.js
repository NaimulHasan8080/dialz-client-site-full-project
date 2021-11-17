import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51JvzA9LB84SPmUjQOtizYcQT2KpGJWkN59M47Dia9Vi4LvldJBdhZvRinaSfgRObi5o7WWgOlKNH4h36rlQH9OZ300Id9ZZY3R');


const Payment = () => {
    const { paymentId } = useParams()
    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${paymentId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [paymentId])
    // console.log(order);
    return (
        <div className="text-center text-danger">

            <h2>{order?.name} order for {order._id} </h2>
            <h2>price : {order?.price} </h2>
            {order.price && <Elements stripe={stripePromise}>
                <CheckoutForm order={order} />
            </Elements>}
        </div>
    );
};

export default Payment;