import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyBooking.css';

const MyBooking = () => {
    const [booking, setBooking] = useState([]);
    const {user} = useAuth();
    const email = user?.email;
    // const email = 'kayum261@gmail.com';
    useEffect(()=>{
        fetch(`https://lit-citadel-89673.herokuapp.com/myBooking/${email}`)
        .then(res => res.json())
        .then(result => {
            console.log(result)
            setBooking(result)})
    }, [email])
    let i = 1;
    return (
        <div>
            <div className="mt-5 mb-5 mx-5">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tour</th>
                            <th scope="col">Tourist</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map(booked => (<tr>
                                <th scope="row">{i++}</th>
                                <td>{booked.serviceName}</td>
                                <td>{booked.userName}</td>
                                <td>{booked.phone}</td>
                                <td><Button>{booked.status}</Button></td>
                            </tr>))
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBooking;