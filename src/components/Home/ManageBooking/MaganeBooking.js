import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './ManageBooking.css';

const MaganeBooking = () => {
    const [bookingServices, setBookingServices] = useState([]);
    useEffect(()=>{
        fetch('https://lit-citadel-89673.herokuapp.com/manageServices')
        .then(res => res.json())
        .then(data => setBookingServices(data))
    }, [])

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
                const remainingBooking = bookingServices.filter(booked => booked._id !== id);
                setBookingServices(remainingBooking);

            }
        })
        }
    }
    // Status update
    // let status = 'Approved';
    const handleStatusChange = id =>{
        const url = `https://lit-citadel-89673.herokuapp.com/updateStatus/${id}`;
        fetch(url, {
            method: 'PUT'
           
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Status Updated Successfully')
                window.location.reload();
            }
        })
    }

    let i = 1;
    return (
        <div>
            <h1>magane booking</h1>
            <div className="mt-5 mb-5 mx-5">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tour Name</th>
                            <th scope="col">Tourist</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            bookingServices.map(booking => (<tr key={booking._id}>
                                <th scope="row">{i++}</th>
                                <td>{booking.serviceName}</td>
                                <td>{booking.userName}</td>
                                <td>{booking.phone}</td>
                                <td><Button onClick={()=> handleStatusChange(booking._id)}>{booking.status}</Button></td>
                                <td><Button onClick={()=> handleDelete(booking._id)}> Delete</Button></td>
                            </tr>))
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MaganeBooking;