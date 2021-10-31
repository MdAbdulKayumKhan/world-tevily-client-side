import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './ServicesDetails.css';
const ServicesDetails = () => {
    const [service, setService] = useState({})
    const { serviceId } = useParams();
    const { user } = useAuth();
    const userName = user?.displayName;
    const userEmail = user?.email;
    let status = 'pending';
    // services get from servicesCollection
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const  serviceName = service?.name;
    // Post into bookingCollection
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data =>{
        //  console.log(data)
         fetch('http://localhost:5000/addBooking', {
             method: 'POST',
             headers:{
                 'content-type': 'application/json'
             },
             body: JSON.stringify(data)
         })
         .then(res => res.json())
         .then(booking =>{
            //  console.log(booking)
             if(booking.insertedId){
                 alert('Booking Confirm Successfully');
                 reset();
             }
             
         })
        
        };
    return (
        <div className="mt-5 mb-5">
            <h1 className="bg-light">BOOKING OPTIONS</h1>
            <div className="container px-4">
                <div className="row gx-5">
                    <div className="col col-md-6 col-sm-12">
                        <div className="p-3 border bg-light">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={service.img} className="card-img-top img-fluid" alt="..." />
                                <h3>{service.name}</h3>
                                <div className="card-body">
                                    <p className="card-text">{service.description}</p>
                                    <p><hr /></p>
                                    <p>Duration : {service.days}</p>
                                    <p>Offer Price: {service.offer}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-6 col-sm-12">
                        <div className="p-3 border bg-light">
                           <div>
                               <h3>Please Confirm Your Booking</h3>
                           </div>
                            <div className="service">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input defaultValue={userName} {...register("userName", { required: true})} />
                                    <input defaultValue={userEmail} {...register("userEmail", { required: true})} />
                                    <input defaultValue={serviceName} {...register("serviceName", { required: true})} />
                                    <input type="hidden" defaultValue={serviceId} {...register("serviceId", { required: true})} />
                                    <input type="hidden" defaultValue={status} {...register("status", { required: true})} />
                                    <textarea  {...register("Address", { required: true})} placeholder="Address" />
                                    <input  {...register("city", { required: true})} placeholder="City" />
                                    <input type="number" {...register("phone", { required: true})} placeholder="Phone Number" />
                                    {/* errors will return when field validation fails  */}
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    <br />
                                    <input type="submit" value="Booking Confirm" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;