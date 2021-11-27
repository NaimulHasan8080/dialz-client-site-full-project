import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Member from './Member';

const AllMembers = () => {
    const [members, setMembers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/member')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])
    return (
        <Row xs={1} md={2} className="g-4">

            {
                members.map(member => <Member member={member}></Member>)
            }
        </Row>
    );
};

export default AllMembers;
