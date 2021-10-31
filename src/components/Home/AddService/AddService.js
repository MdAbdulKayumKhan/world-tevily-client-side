import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        fetch('https://lit-citadel-89673.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                
                if (data.insertedId) {
                    // console.log(data);
                    alert('Service Added Successfully');
                    reset();
                    
                }
            })

    };

    return (
        <div className="container mt-5 mb-5">
            <h2 className="bg-red">Add Service</h2>
            <div className="service">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true})} placeholder="Tour Name" />
                    <input {...register("img")} placeholder="add img link" />
                    <textarea {...register("description")} placeholder="Description" />
                    <input  {...register("days")} placeholder="3 days/4 night" />
                    <input type="number" {...register("offer")} placeholder="offer price" />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;