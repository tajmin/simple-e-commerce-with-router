import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css'

const Login = () => {
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
                    <button className="btn-regular">Sign-in Using Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;