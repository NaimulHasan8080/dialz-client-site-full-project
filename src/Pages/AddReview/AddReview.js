import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';


const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        axios.post('http://localhost:5000/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div style={{ background: '#DCDCDC' }} className="add-food py-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-4">
                            <h2 className="text-danger">Please share your experience</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="single-add-food">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="form-control mb-3" {...register("email")} value={user?.email} required />
                                <input className="form-control mb-3" {...register("name")} value={user.email} value={user?.displayName} required />
                                <input className="form-control mb-3" type="number" {...register("rating", { min: 0, max: 5 })} placeholder="Rating(0-5)" />

                                <textarea style={{ height: '100px' }} className="form-control mb-3" {...register("comment")} placeholder="write your comment here" required />

                                <input type="submit" className="btn btn-primary border-0 p-2 w-25 text-white fw-bold" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;