import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageOrders.css';

const ManageOrders = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://frightful-eyeballs-23644.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete');
        if (proceed) {
            const url = `https://frightful-eyeballs-23644.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingProducts = orders.filter(order => order._id !== id);
                        setOrders(remainingProducts);
                    }
                })
        }
    }
    return (
        <div className="manage-order-area py-5 ">
            <div className="container bg-Info">
                <div className="row py-5">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <h2 className="text-danger">Manage Your Orders</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="order-single">
                            <Table striped bordered>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>position</th>
                                        <th>update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map(order => <tr key={order._id}>
                                            <td>{order._id}</td>
                                            <td>{order.name}</td>
                                            <td>{order.price}</td>
                                            <td>{order.status}</td>
                                            <td className="text-center">
                                                <Link to={`/update/${order._id}`}><button className="btn btn-warning  text-white mb-2">Update</button></Link>
                                                <button onClick={() => handleDelete(order._id)} className="btn btn-danger ms-2">Delete</button>
                                            </td>
                                        </tr>
                                        )}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;