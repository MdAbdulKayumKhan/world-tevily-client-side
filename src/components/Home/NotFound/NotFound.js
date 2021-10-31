import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container mt-5 mb-5">
            <h3 className="fs-3 mt-5 mb-5"> Page Not Found</h3>
            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <img className="img-fluid" src="https://i.ibb.co/JB47DsN/404.jpg" alt="" />
                        </div>
                        <div>
                        <Link to ="/home"><Button>Go Home</Button> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;