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


const AdminDashboard = () => {
    let { path, url } = useRouteMatch();

    const { admin } = useAuth();
    return (
        <Container className="mt-3">
            <Row>
                <Col xs={12} sm={12} md={4} lg={3} style={{
                    borderRight: '1px solid gray',
                    background: '#DCDCDC'
                }}>
                    <ul>
                        <Link to="home"> Home</Link>
                        <Link to={`${url}`}><li >My Orders</li></Link>
                        <Link to={`${url}/payment`}><li>Payment</li></Link>
                        {admin && <Link to={`${url}/makeadmin`}><li>Make Admin</li></Link>}
                        <Link to={`${url}/manageorders`}><li>Manage Order</li></Link>

                    </ul>
                </Col>
                <Col xs={12} sm={12} md={8} lg={9} style={{ background: '#F0F8FF' }}>
                    <Switch>
                        <Route exact path={path}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <AdminRoute path={`${path}/makeadmin`}>
                            <AdminMake></AdminMake>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageorders`}>
                            <ManageOrders></ManageOrders>
                        </AdminRoute>
                    </Switch>
                </Col>
            </Row>

        </Container>
    );
};

export default AdminDashboard;