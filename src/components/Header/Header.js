import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {

    const { user, signOutGoogle } = useAuth()

    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/order-review">Your Orders</Link>
                <Link to="/inventory">Inventory</Link>
                {
                    user ? <Link onClick={signOutGoogle} to="/login">Log Out {user.displayName}</Link> :
                        <Link to="/login">Login</Link>
                }
                <Link to="/signup">Sign Up</Link>
            </nav>
        </div>
    );
};

export default Header;