import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SingleExplore from './SingleExplore';

const Explore = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div className="add-food py-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-4">
                            <h2 className="text-warning">Our Stylish Watch</h2>
                        </div>
                    </div>
                </div>
                {
                    items.length === 0 ?
                        <Spinner animation="border" />
                        :
                        <div className="row bg-dark">
                            {
                                items.map(item => <SingleExplore
                                    key={item._id}
                                    item={item}
                                ></SingleExplore>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default Explore;