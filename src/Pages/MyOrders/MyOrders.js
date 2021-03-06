import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './MyOrders.css';
const MyOrders = () => {
    const { user } = useFirebase();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`https://fathomless-plateau-44486.herokuapp.com/orders/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user?.email])

    const handleCancel = id => {
        const proceed = window.confirm('Are you sure you want to delete');
        if (proceed) {
            const url = `https://fathomless-plateau-44486.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingProducts = myOrders.filter(order => order._id !== id);
                        setMyOrders(remainingProducts);
                    }
                })
        }
    }
    return (
        <div className="my-order-area ">
            <div className="container">
                <h2 className="text-danger ">My Orders</h2>
                <div className="mx-auto">
                    <Table striped bordered responsive hover>
                        <thead>
                            <tr className="bg-info text-white">
                                <th>Id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Payment</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myOrders.map(order => <tr key={order._id} className="bg-success text-white">
                                    <td>{order._id}</td>
                                    <td>{order.name}</td>
                                    <td>{order.price}</td>
                                    <td>{order.status}</td>
                                    <td>{order.payment ? 'paid' : <Link to={`payment/${order._id}`}><button className="btn btn-primary">Payment</button></Link>}</td>
                                    <td>
                                        <button onClick={() => handleCancel(order._id)} className="btn btn-danger ms-2">Cancel</button>
                                    </td>
                                </tr>
                                )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;