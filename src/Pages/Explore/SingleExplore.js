import React from 'react';
import { Link } from 'react-router-dom';

const SingleExplore = ({ item }) => {
    const { _id, name, price, description, url } = item;
    return (
        <div className="col-lg-4">
            <div className="card mb-3 single-service  p-3">
                <img src={url} alt="" />
                <div className="d-flex justify-content-between my-3">
                    <div className="text-center">
                        <h3 className="my-3 text-danger text-center ">{name}</h3>
                    </div>

                </div>
                <h6 className="text-info">Price: ${price}</h6>
                <p className="text-justify">{description?.slice(0, 100)}</p>
                <div className="text-center">
                    <Link to={`/placeorder/${_id}`}>
                        <button className="btn text-center text-white bg-primary">Order Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleExplore;