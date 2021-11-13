import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MyOrders from '../MyOrders/MyOrders';

import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import AdminMake from './AdminMake';
import ManageOrders from '../ManageOrders/ManageOrders';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../../routes/AdminRoute';
import Payment from './Payment';
import DashboardHomepage from './DashboardHomepage';
import AddProducts from './AddProducts';
import AddReview from '../AddReview/AddReview';
import ManageProducts from './ManageProducts';
import Subscriber from './Subscriber';


const AdminDashboard = () => {
    let { path, url } = useRouteMatch();

    const { admin, logOut } = useAuth();
    return (
        <Container className="mt-3">
            <Row>
                <Col xs={12} sm={12} md={4} lg={3} style={{
                    borderRight: '1px solid gray',
                    background: '#DCDCDC'
                }}>

                    <div>
                        {!admin &&
                            <div className="p-3 text-center">
                                <Link to="/home"> <button className="btn btn-primary my-2 text-center">Home</button></Link> <br />

                                <Link to={`${url}`}><button className="btn btn-primary my-2">Dashboard</button></Link><br />

                                <Link to={`${url}/myorder`}><button className="btn btn-primary my-2">My Orders</button></Link> <br />

                                <Link to={`${url}/payment`}><button className="btn btn-primary  my-2">Payment</button></Link><br />

                                <Link to={`${url}/addReview`}><button className="btn btn-primary  my-2">Add Review</button></Link><br />
                            </div>}

                        {admin && <div>
                            <Link to={`${url}/makeadmin`}><button className="btn btn-primary my-2">Make Admin</button></Link><br />

                            <Link to={`${url}/addproducts`}><button className="btn btn-primary my-2">Add Products</button></Link><br />

                            <Link to={`${url}/manageorders`}><button className="btn btn-primary my-2">Manage Order</button></Link> <br />

                            <Link to={`${url}/manageproducts`}><button className="btn btn-primary my-2">Manage Products</button></Link><br />


                            <Link to={`${url}/subscriber`}><button className="btn btn-primary my-2">Subscriber</button></Link><br />
                        </div>}


                        <button onClick={logOut} className="btn btn-danger fw-bold my-2">Logout</button>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={8} lg={9} style={{ background: '#F0F8FF' }}>
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHomepage></DashboardHomepage>
                        </Route>
                        <Route exact path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>

                        <Route path={`${path}/myorder`}>
                            <MyOrders></MyOrders>
                        </Route>

                        <Route path={`${path}/addReview`}>
                            <AddReview></AddReview>
                        </Route>

                        <AdminRoute path={`${path}/addproducts`}>
                            <AddProducts></AddProducts>
                        </AdminRoute>

                        <AdminRoute path={`${path}/makeadmin`}>
                            <AdminMake></AdminMake>
                        </AdminRoute>

                        <AdminRoute path={`${path}/manageorders`}>
                            <ManageOrders></ManageOrders>
                        </AdminRoute>

                        <AdminRoute path={`${path}/subscriber`}>
                            <Subscriber></Subscriber>
                        </AdminRoute>

                        <AdminRoute path={`${path}/manageproducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>


                    </Switch>
                </Col>
            </Row>

        </Container>
    );
};

export default AdminDashboard;