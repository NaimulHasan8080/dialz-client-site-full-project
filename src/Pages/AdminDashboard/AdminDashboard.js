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


const AdminDashboard = () => {
    let { path, url } = useRouteMatch();

    const { admin } = useAuth();
    return (
        <Container>
            <h2 className="text-center">Dashboards</h2>
            <Row>
                <Col xs={12} sm={12} md={4} lg={3} style={{ borderRight: '1px solid gray' }}>
                    <ul>
                        <Link to={`${url}`}><li>Dashboards</li></Link>
                        {admin && <Link to={`${url}/makeadmin`}><li>Make Admin</li></Link>}
                        <Link to={`${url}/manageorders`}><li>Manage Order</li></Link>
                        {/* <Link to="/home"><li>Home</li></Link> */}
                        {/* <Link><li>Make admin</li></Link> */}

                    </ul>
                </Col>
                <Col xs={12} sm={12} md={8} lg={9}>
                    <Switch>
                        <Route exact path={path}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/makeadmin`}>
                            <AdminMake></AdminMake>
                        </Route>
                        <Route path={`${path}/manageorders`}>
                            <ManageOrders></ManageOrders>
                        </Route>
                    </Switch>
                </Col>
            </Row>

        </Container>
    );
};

export default AdminDashboard;