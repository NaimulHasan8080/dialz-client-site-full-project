import React, { useState } from 'react';

const Contacts = () => {
    const [email, setEmail] = useState('');


    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        const user = { email }

        fetch('https://fathomless-plateau-44486.herokuapp.com/subscriber', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfull')
                    setEmail('')
                }
            })

        e.preventDefault()
    }

    return (
        <div style={{ background: '#BFC9CA', marginTop: '10px' }} >
            <div className="row">
                <div className=" col-sm-12  col-md-6 text-center">
                    <ul style={{ listStyle: 'none' }}>
                        <li className="my-3"><span className="fs-1"><i class="fas fa-phone-alt"></i></span><span className="fs-4 ms-3 text-white"> Phone : 01402724004</span></li>

                        <li><span className="fs-1"><i class="fas fa-envelope-open-text"></i></span><span className="fs-4 ms-3  text-white">Email : rjnaimul@gmail.com</span></li>

                        <li className="my-3 "><span className="fs-1"><i class="fas fa-location-arrow"></i></span> <span className="fs-4 ms-3  text-white">Maynamoti,Cumilla,Bangladesh</span></li>

                    </ul>
                </div>
                <div className=" col-sm-12 col-md-6 text-center">
                    <h2 className="mt-3 text-danger">Subscribe here</h2>
                    <p>Get all notifications </p>
                    <form onSubmit={handleSubmit}>
                        <input type="email" onBlur={handleEmail} placeholder="Email" /> <br />
                        <input type="submit" className="btn btn-primary mt-2" value="Subscribe" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contacts;