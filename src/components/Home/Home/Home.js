import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Slider from '../../Shared/Slider/Slider';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useAuth();


    useEffect(() => {
        fetch('https://lit-citadel-89673.herokuapp.com/services')
            .then(res => res.json())
            .then(servicesData => {

                setServices(servicesData)
                setIsLoading(false)

            })

    }, [services])

    // array sorting
    // const reverseOrder = services.reverse();
    const mainOffers = services.slice(0, 6);
    // img pop-up


    return (
        <div>
            <Slider></Slider>

            <div className="mt-5 mb-5 bg-light">
                <h1>Popular Package</h1>
            </div>

            <div className="container mb-5">
                <div className="card-deck">
                    {isLoading ? 
                        <Spinner animation="grow" variant="info" />
                     : (
                        <div className="row gx-5">
                            {
                                mainOffers.map(service => (
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

                        </div> )
                         
                        }
                </div>
            </div>
            <div>

                <section className="about-one">
                    <div className="about-one-shape-1 wow slideInLeft">
                        <img className="img-fluid" src="https://i.ibb.co/jyxs1PW/about-one-shape-1.png" alt="" />
                    </div>
                    <div className="about-one-shape-2 float-bob-y"><img className="img-fluid" src="https://i.ibb.co/NpRwx0R/about-one-shape-2.png" alt="" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 wow fadeInLeft" data-wow-duration="1500ms">
                                <div className="about-one__left">
                                    <div className="about-one__img-box">
                                        <div className="about-one__img">
                                            <img className="img-fluid" src="https://i.ibb.co/xG38vyV/about-one-img-1.png" alt="" />
                                        </div>
                                        <div className="about-one__call">
                                            <div className="about-one__call-icon">
                                                <span className="icon-phone-call"></span>
                                            </div>
                                            <div className="about-one__call-number">
                                                <p>Book Tour Now</p>
                                                <h4><a href="#">666 888 0000</a></h4>
                                            </div>
                                        </div>
                                        <div className="about-one__discount">
                                            <h2>30%</h2>
                                            <h3>Discount</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about-one__right">
                                    <div className="section-title text-left">
                                        <span className="section-title__tagline">Get to know us</span>
                                        <h2 className="section-title__title">Plan Your Trip with World-Trevily</h2>
                                    </div>
                                    <p className="about-one__right-text">World-Trevily Tour Operator is a leading local and global tour operators in Bangladesh</p>
                                    <ul className="list-unstyled about-one__points">
                                        <li>
                                            <div className="icon">
                                                <i className="fa fa-check"></i>
                                            </div>
                                            <div className="text">
                                                <p>Invest in your simply neighborhood</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fa fa-check"></i>
                                            </div>
                                            <div className="text">
                                                <p>Support people in free text extreme need</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fa fa-check"></i>
                                            </div>
                                            <div className="text">
                                                <p>Largest global industrial business community</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="#" className="about-one__btn thm-btn btn btn-primary">Book with us now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <div>
                {/* <!--Gallery One Start--> */}
                <section className="gallery-one">
                    <div className="gallery-one-bg" style={{ backgroundImage: 'https://i.ibb.co/d0rNQgs/gallery-map.png' }} ></div>
                    <div className="gallery-one__container-box clearfix">
                        <ul className="list-unstyled gallery-one__content clearfix">
                            <li className="wow fadeInUp" data-wow-delay="100ms">
                                <div className="gallery-one__img-box">
                                    <img className="img-fluid" src="https://i.ibb.co/yRSqg19/gallery-one-img-1.jpg" alt="" />
                                    <div className="gallery-one__iocn">
                                        <a className="img-popup" href="#"><i
                                            className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </li>
                            <li className="wow fadeInUp" data-wow-delay="200ms">
                                <div className="gallery-one__img-box">
                                    <img className="img-fluid" src="https://i.ibb.co/zFMr80d/gallery-one-img-2.jpg" alt="" />
                                    <div className="gallery-one__iocn">
                                        <a className="img-popup" href="#"><i
                                            className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </li>
                            <li className="wow fadeInUp" data-wow-delay="300ms">
                                <div className="gallery-one__img-box">
                                    <img className="img-fluid" src="https://i.ibb.co/RT400xx/gallery-one-img-3.jpg" alt="" />
                                    <div className="gallery-one__iocn">
                                        <a className="img-popup" href="#"><i
                                            className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </li>
                            <li className="wow fadeInUp" data-wow-delay="400ms">
                                <div className="gallery-one__img-box">
                                    <img className="img-fluid" src="https://i.ibb.co/s9w5C2p/gallery-one-img-4.jpg" alt="" />
                                    <div className="gallery-one__iocn">
                                        <a className="img-popup" href="#"><i
                                            className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </li>
                            <li className="wow fadeInUp" data-wow-delay="500ms">
                                <div className="gallery-one__img-box">
                                    <img className="img-fluid" src="https://i.ibb.co/SrkfJGN/gallery-one-img-5.jpg" alt="" />
                                    <div className="gallery-one__iocn">
                                        <a className="img-popup" href="#"><i
                                            className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* <!--Gallery Oned End--> */}
            </div>
        </div>
    );
};

export default Home;