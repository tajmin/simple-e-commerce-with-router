import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let totalQuantity = 0;
    let totalPrice = 0;

    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        totalPrice = totalPrice + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Items Ordered: {totalQuantity}</h4>
            <h4>Total: ${totalPrice.toFixed(2)}</h4>
            {props.children}
        </div>
    );
};

export default Cart;