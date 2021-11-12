import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email && admin ? children : <Redirect
                to={{
                    pathname: "/home",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default AdminRoute;