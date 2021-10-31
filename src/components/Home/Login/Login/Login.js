import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const { signInWithGoogle, signOutWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    console.log(redirect_uri);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                history.push(redirect_uri);
            })
    }
    const handleGoogleSignOut = () => {
        signOutWithGoogle();
    }
    return (
        <div className="container mt-5 mb-5">
            <h3 className="fs-3 mt-5 mb-5">Google Sign</h3>
            <div class="row">

                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h1><button class="btn btn-primary" onClick={handleGoogleSignIn}>Login</button></h1>

                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h1><button class="btn btn-primary" onClick={handleGoogleSignOut}>Log Out</button></h1>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Login;