import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    const totalReducer = (current, product) => current = current + product.price;
    const total = cart.reduce(totalReducer, 0);

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {props.cart.length}</p>
            <h5>Total: ${total.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;