import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = props => {
    const { name, img, price, seller, stock, star } = props.product;

    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="details">
                <h4>{name}</h4>
                <p><small>By {seller}</small></p>
                <p><strong>${price}</strong></p>
                <p><small>Only {stock} in stock - order soon</small></p>
                <button onClick={() => props.handleCartAdd(props.product)}> {element} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;