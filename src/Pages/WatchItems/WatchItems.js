import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SingleMenu from '../SingleMenu/SingleMenu';

const WatchItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])


    const slice = items.slice(0, 6)
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
                                slice.map(item => <SingleMenu
                                    key={item._id}
                                    item={item}
                                ></SingleMenu>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default WatchItems;