import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TourPackages = () => {
    const [services, setServices] = useState([]);
    
    
    useEffect(() => {
        fetch('https://lit-citadel-89673.herokuapp.com/services')
            .then(res => res.json())
            .then(servicesData => {
                
                setServices(servicesData)
                 
            })
               
    }, [])
    return (
        <div>
            <div className="mt-5 mb-5 bg-light">
                <h1>Popular Package</h1>
            </div>

            <div className="container mb-5">
                <div className="card-deck">
                    <div className="row gx-5">
                        {
                            services.map(service => (
                                <div key={service._id} className="card col-12 col-sm-12 col-md-4 col-lg-4 gap-4">
                                    <img className="card-img-top img-fluid" src={service.img} alt="Card cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{service.name}</h5>
                                        <p className="card-text">{service.description.slice(0, 120)}.</p>
                                        <p className="card-text bg-light fs-5">Duration: {service.days}</p>
                                        <p className="card-text bg-light fs-5">Price for the tour (Per Person):৳{service.offer}</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted"> <Link to={`/servicesDetails/${service._id}`}> <Button variant="dark">Book Now</Button></Link></small>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default TourPackages;