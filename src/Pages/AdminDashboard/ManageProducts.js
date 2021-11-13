import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const { isLoading, user } = useAuth()

    useEffect(() => {
        fetch('https://fathomless-plateau-44486.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user?.email]);

    const handleDelete = id => {

        console.log(id);
        const proceed = window.confirm('Are you sure you want to delete');
        if (proceed) {
            const url = `https://fathomless-plateau-44486.herokuapp.com/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                })
        }
    }

    return (
        <div className="text-center">
            <h3 className="text-danger my-4">Total  products {products.length}</h3>
            {
                products.map(product => <ul
                    key={product._id}
                    style={{ listStyle: 'none' }}
                    className="my-5">
                    <li><img className="w-25" src={product.url} alt="" /></li>
                    <li>{product._id}</li>
                    <li className="fs-3 text-success">{product.name}</li>
                    <li><button
                        className="btn btn-danger"
                        onClick={() => handleDelete(product._id)}
                    >Delete</button></li>
                </ul>)
            }
        </div>
    );
};

export default ManageProducts;