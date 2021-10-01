import React from 'react';
import useProducts from '../../hooks/useProduct';
import useCart from '../../hooks/useCart'

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart] = useCart(products);
    return (
        <div>
            <div>
                <h1>Order Review</h1>
            </div>
            <div>
                <h2>{products.length}</h2>
                <h2>{cart.length}</h2>
            </div>
        </div>
    );
};

export default OrderReview;