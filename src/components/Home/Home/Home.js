import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Slider from '../../Shared/Slider/Slider';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch('https://lit-citadel-89673.herokuapp.com/services')
            .then(res => res.json())
            .then(servicesData => setServices(servicesData))
    }, [])
    return (
        <div>
            <Slider></Slider>

            <p>{user?.email}</p>
            <p>{user?.displayName}</p>

            <div className="container">
                <div className="card-deck">
                    <div className="row">
                        {
                            services.map(service => (
                                <div key={service._id} className="card col-12 col-sm-12 col-md-4 col-lg-4">
                                    <img className="card-img-top img-fluid" src={service.img} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{service.name}</h5>
                                        <p className="card-text">{service.description}.</p>
                                        <p className="card-text">{service.price}</p>
                                        <p className="card-text">{service.offer}</p>
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

export default Home;