import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const { handleRegister } = useAuth();
    const history = useHistory();
    const onSubmit = data => {
        if (data.password !== data.password2) {
            alert('password did not match')
            return
        }
        else {
            const send = { email: data?.email, displayName: data?.name }
            axios.post('http://localhost:5000/users', send)
                .then(res => {
                    if (res.data.insertedId) {
                        handleRegister(data?.email, data?.password, data?.name, history)
                        alert('added successfully');
                        reset();
                    }
                })
        }
    }
    return (
        <div style={{ background: '#DCDCDC' }} className="add-food py-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-4">
                            <h2 className="text-danger">Please Register</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="single-add-food">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input className="form-control mb-3" {...register("name")} placeholder="yore name" type="name" required />

                                <input placeholder="your Email" className="form-control mb-3" {...register("email")} type="email" required />

                                <input className="form-control mb-3" type="password" {...register("password")} placeholder="Password" />

                                <input className="form-control mb-3" type="password" {...register("password2")} placeholder="Confirm password" />


                                <input type="submit" value="Register" className="btn btn-primary border-0 p-2 w-25 text-white mb-3 fw-bold" />
                                <br />

                                <Link style={{ textDecoration: 'none', fontSize: '22px' }} to="/login">Already Register ? Please Login </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;