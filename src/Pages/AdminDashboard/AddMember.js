import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddMember = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        // console.log(data);
        // const name = data.name;
        // const price = data.price;
        // const description = data.description;

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('age', data.age);
        formData.append('bio', data.bio);
        formData.append('image', data.image[0]);
        // const newData = { name, price, description, formData }
        axios.post('http://localhost:5000/member', formData)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added member successfully');
                    reset();
                }
            })
    }
    return (
        <div>
            <div style={{ background: '#DCDCDC' }} className="add-food py-5 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title mb-4">
                                <h2 className="text-danger">Add Member</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="single-add-food">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <input type="email" className="form-control mb-3" {...register("email")} required placeholder="Member Email" />

                                    <input className="form-control mb-3" {...register("name")} placeholder="member Name" required />

                                    <input className="form-control mb-3" type="number" {...register("age")} placeholder="Age" />

                                    <input className="form-control mb-3" type="file" accept="image/*" {...register("image")} />


                                    <input style={{ height: '80px' }} className="form-control mb-3" {...register("bio")} placeholder="Bio-data" required />

                                    <input type="submit" className="btn btn-primary border-0 p-2 w-25 text-white fw-bold" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddMember;