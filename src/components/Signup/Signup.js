import React from 'react';
import { NavLink } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
    return (
        <div className="signup-container">
            <div>
                <h1>Please Register</h1>
                <form >
                    <input type="text" placeholder="Enter your first-name" />
                    <input type="email" placeholder="Please enter email" />
                    <input type="password" placeholder="Enter your password" />
                    <input type="password" placeholder="Confirm your password" />
                    <input type="submit" value="Sign Up" />
                </form>
                <div>
                    <p>Already signed up? <NavLink to="/login">Login</NavLink> </p>
                    <button className="btn-regular">Sign-in Using Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;