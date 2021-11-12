import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

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
                    <li><button className="btn btn-danger">Delete</button></li>
                </ul>)
            }
        </div>
    );
};

export default ManageProducts;