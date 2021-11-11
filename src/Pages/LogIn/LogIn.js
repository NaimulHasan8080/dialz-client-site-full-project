import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';


const LogIn = () => {
    const { signInWithGoogle, user, setUser, logOut, setIsLoading } = useAuth();
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



    return (
        <>
            <div className="log-in-area py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mx-auto p-0">
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