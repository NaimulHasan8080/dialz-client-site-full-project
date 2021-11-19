import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('https://fathomless-plateau-44486.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added product  successfully');
                    reset();
                }
            })
    }
    return (
        <div>
            <div style={{ background: '#DCDCDC' }} className="add-food py-5 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title mb-4">
                                <h2 className="text-danger">Add New Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="single-add-food">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <input className="form-control mb-3" {...register("name")} placeholder="Products Name" required />

                                    <input className="form-control mb-3" type="number" {...register("price")} placeholder="Products Price" />

                                    <input className="form-control mb-3" {...register("url")} required placeholder="Products image url" />

                                    <input style={{ height: '80px' }} className="form-control mb-3" {...register("description")} placeholder="Products description" required />

                                    <input type="submit" className="btn btn-primary border-0 p-2 w-25 text-white fw-bold" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;