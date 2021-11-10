import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="/home">
                        <img width="50" src="https://demos.shopifyteam.com/dialz/wp-content/uploads/sites/254/2020/03/Time-logo-1.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} className="text-white" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/addreview">Add Review</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/explore">Explore</Nav.Link>

                        <Navbar.Text className="text-dark">
                            <a href="#login" className="text-warning fs-3 fw-bold text-decoration-none">{user?.displayName} </a>
                        </Navbar.Text>
                        {
                            (!user?.email) ?
                                <Nav.Link as={Link} className="btn btn-info text-white" to="/login">
                                    Login
                                </Nav.Link>
                                :
                                <button className="btn btn-primary text-white ms-1" onClick={logOut} variant="light"> Logout</button>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;