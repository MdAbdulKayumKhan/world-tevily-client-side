import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Header from '../../../Shared/Header/Header';

const Login = () => {
    
    const {signInWithGoogle, signOutWithGoogle, user, } = useAuth();
   
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    console.log(redirect_uri);
   
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
            history.push(redirect_uri);
        })
    }
    const handleGoogleSignOut = () =>{
        signOutWithGoogle();
    }
    return (
        <div>
             
            <h1><button onClick={handleGoogleSignIn}>Login</button></h1>
            <h1><button onClick={handleGoogleSignOut}>Log Out</button></h1>
           
        </div>
    );
};

export default Login;