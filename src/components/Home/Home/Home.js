import React from 'react';
import useAuth from '../../hooks/useAuth';
import Slider from '../../Shared/Slider/Slider';

const Home = () => {
    const {user} = useAuth();
    return (
        <div>
            <Slider></Slider>
           
               <p>{user?.email}</p>
               <p>{user?.displayName}</p>
           
            <h1>this home</h1>
        </div>
    );
};

export default Home;