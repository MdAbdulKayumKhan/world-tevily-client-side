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

    const handleDelete = id => {
        // console.log(id);
        const deleteNow = window.confirm('Are Sure wants to delete?');
        if(deleteNow){
            fetch(`https://lit-citadel-89673.herokuapp.com/manageServices/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount){
                alert('Booking Deleted Successfully')
                const remainingBooking = booking.filter(booked => booked._id !== id);
                setBooking(remainingBooking);

            }
        })
        }
    }

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
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map(booked => (<tr>
                                <th scope="row">{i++}</th>
                                <td>{booked.serviceName}</td>
                                <td>{booked.userName}</td>
                                <td>{booked.phone}</td>
                                <td><h5>{booked.status}</h5></td>
                                <td><Button onClick={()=> handleDelete(booked._id)}> Delete</Button></td>
                            </tr>))
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBooking;