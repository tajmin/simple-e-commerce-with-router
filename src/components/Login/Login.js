import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectURL = location.state?.from || '/shop'

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirectURL);
            })
    }

    return (
        <div className="login-container">
            <div>
                <h1>Please Login</h1>
                <form >
                    <input type="email" placeholder="Please enter email" />
                    <input type="password" placeholder="Enter your password" />
                    <input type="submit" value="Login" />
                </form>
                <div>
                    <p>New to Ema-John? <NavLink to="/signup">Create Account</NavLink> </p>
                    <button onClick={handleGoogleSignIn} className="btn-regular">Sign-in Using Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;