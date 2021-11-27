import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Member = ({ member }) => {
    const { name, age, image, bio } = member;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={`data:image/png;base64,${image}`} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{age}
                    </Card.Text>
                    <Card.Text>
                        {bio}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Member;