import React, { useState } from 'react';

const AdminMake = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)

    const handleBlur = (e) => {
        // console.log(e.target.value);
        setEmail(e.target.value)
    }
    const handleSubmit = e => {
        const user = { email }

        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                    setEmail('')
                }
                console.log(data);
            })

        e.preventDefault()
    }
    return (
        <div className="text-center text-danger  ">
            <h2>Make Admin</h2>
            <form onSubmit={handleSubmit}>
                <input className="w-50 p-1 my-2" type="email" onBlur={handleBlur} placeholder="write an email" /> <br />
                <input className="btn btn-primary fw-bold" type="submit" value="Make Admin " />
            </form>
            {success && <div className="alert alert-success mt-4" role="alert">
                Make admin successfully
            </div>}
        </div>
    );
};

export default AdminMake;