import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SingleReview from './SingleReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="bg-dark py-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-4">
                            <h2 className="text-warning">Customer Review</h2>
                        </div>
                    </div>
                </div>
                {
                    reviews.length === 0 ?
                        <Spinner animation="border" />
                        :
                        <div className="row bg-dark">
                            {
                                reviews.map(review => <SingleReview
                                    key={review._id}
                                    review={review}
                                ></SingleReview>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default Review;