import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const LogIn = () => {
    const { signInWithGoogle, user, setUser, logOut, setIsLoading, handleLogin } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const url = location.state?.from || "/home";
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                setIsLoading(true)
                setUser(res.user)
                history.push(url)
            }
            )
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    };


    //login user
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        handleLogin(data?.email, data?.password, location, history)
        reset()
    }

    return (
        <>
            <div className="log-in-area py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mx-auto p-0">
                            <>
                                <div className="add-food py-3 text-center">
                                    <div className="col-md-12">
                                        <div className="section-title mb-1">
                                            <h2 className="text-danger">Please Login</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-12">
                                        <div className="single-add-food">
                                            <form onSubmit={handleSubmit(onSubmit)}>

                                                <input placeholder="your Email" className="form-control mb-3" {...register("email")} type="email" required />

                                                <input className="form-control mb-3" type="password" {...register("password")} placeholder="Password" />


                                                <input type="submit" className="btn btn-primary border-0 p-2 w-100 text-white fw-bold" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </>
                            <div className="login-form text-center">

                                {
                                    (!user?.displayName) ?
                                        <button onClick={handleGoogleLogin} className="btn mt-3 bg-warning text-white  my-3">
                                            Google Sign In
                                        </button>
                                        :
                                        <button onClick={logOut} className="
                                        btn btn-primary text-white">
                                            Log Out
                                        </button>

                                }
                                <br />

                                <Link style={{ textDecoration: 'none' }} to="/register">New User ? Please Register </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogIn;