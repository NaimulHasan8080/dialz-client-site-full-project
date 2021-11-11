
import React from 'react';
import { Nav } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <>
            <div style={{ background: 'url(https://cdn.shopify.com/s/files/1/0564/2705/3216/files/slider-1.jpg?v=1633414416)' }} className="footer-area text-white pt-1 text-center mt-5">
                <div className="container">
                    <div className="row py-1">
                        <div className="col-md-6">
                            <div className="footer-logo">
                                <img className="mb-3" src="https://demos.shopifyteam.com/dialz/wp-content/uploads/sites/254/2020/03/Time-logo-1.png" alt="" />
                                <p>Dialz is an international Watch company, which has an experience of opening more than 170 shop in 10 countries of the world. Thus the restaurants of the new generation had emerged in 2017....</p>
                            </div>

                        </div>
                        <div className="col-md-3 text-center">
                            <div className="footer-menu-container">
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <Nav.Link href="/home">service</Nav.Link>
                                    <Nav.Link eventKey="link-1">Add Review</Nav.Link>
                                    <Nav.Link eventKey="link-2">contacts us</Nav.Link>
                                    <Nav.Link eventKey="link-3">Explore items</Nav.Link>
                                </Nav>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <Nav defaultActiveKey="/home" className="flex-column justify-content-end">
                                <Nav.Link href="/home">Help</Nav.Link>
                                <Nav.Link eventKey="link-1">Read FAQs</Nav.Link>
                                <Nav.Item>
                                    <Nav.Link href="/home">Privacy and security</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Terms and condition</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col pt-2">
                            <p className="text-white text-center">
                                Copyright &copy;2021 Swiss Eagle delivery Service. All rights reserved.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;