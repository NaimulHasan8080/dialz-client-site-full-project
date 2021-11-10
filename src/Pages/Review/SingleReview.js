import React from 'react';

const SingleReview = ({ review }) => {
    const { comment, rating, name } = review;
    return (
        <div className="col-lg-4 text-center">
            <div className="card mb-3 single-service  p-3">
                <h3 className="my-3 text-danger ">{name}</h3>
                <h6 className="text-info">Rating: {rating}</h6>
                <p className="text-justify">{comment.slice(0, 50)}</p>

            </div>
        </div>
    );
};

export default SingleReview;