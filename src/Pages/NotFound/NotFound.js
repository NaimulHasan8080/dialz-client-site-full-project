import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <div className="not-found-area my-5 fw-bold text-center">
                <h1 className="mt-5 mb-3 text-danger">4 0 4</h1>
                <h4 className="mb-3 fs-1">Page Not Found</h4>
                <Link to="/"><button>Go Back</button></Link>
            </div>
        </>
    );
};

export default NotFound;