import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <Container>
            <Row className=" bg-dark">
                <Col sm={12} md={6} lg={7}>
                    <img className="img-fluid" src="https://i.ibb.co/5hgb75F/slider3-3.jpg" alt="" />
                </Col>
                <Col sm={12} md={6} lg={5} className="d-flex flex-column justify-content-center align-items-center">
                    <div className="fs-5 text-white ">
                        <h1 className="text-info text-center">Our Exclusive items</h1>
                        <h4 className="text-center"> $599</h4>
                        <h3 className="mb-5 text-danger text-center">Metal Watch</h3>
                        <p className="text-center">Find Quality Products from Verified Suppliers. Get a Live Quote Now! Production Monitoring. Trade Assurance. Logistics Service. Most Popular. Types: Machinery, Home & Kitchen, Consumer Electronics, Packaging & Printing, Lights & Lighting, Apparel.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;