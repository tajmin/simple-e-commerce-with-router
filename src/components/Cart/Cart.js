import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let items = 0;
    let price = 0;

    for (const product of cart) {
        items = items + cart[product]?.quantity;
        price = price + (cart[product]?.price * items)
    }

    const totalItemReducer = (current, product) => current + product.quantity;
    const totalItems = cart.reduce(totalItemReducer, 0);

    const totalPriceReducer = (current, product) => current = current + product.price;
    const total = cart.reduce(totalPriceReducer, 0);

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {totalItems}</p>
            <h5>Total: ${total.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;