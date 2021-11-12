import React, { useEffect, useState } from 'react';

const Subscriber = () => {
    const [subscribers, setSubscribers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/subscriber')
            .then(res => res.json())
            .then(data => setSubscribers(data))
    }, [])
    return (
        <div className="text-center">
            <h2 className="text-danger"> Total Subscriber : {subscribers.length}</h2>
            {
                subscribers.map(subscriber => <ul key={subscriber._id} class="list-group">
                    <li class="list-group-item list-group-item-primary">{subscriber.email}</li> </ul>)
            }
        </div>
    );
};

export default Subscriber;