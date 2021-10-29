import React from 'react';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle, signOutWithGoogle} = useFirebase();
    const handleGoogleSignIn = () =>{
        signInWithGoogle();
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