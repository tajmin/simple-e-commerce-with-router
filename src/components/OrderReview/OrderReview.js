import React from 'react';
import useProducts from '../../hooks/useProduct';

const OrderReview = () => {
    const [products] = useProducts();
    return (
        <div>
            <h1>Order Review</h1>
            <h2>{products.length}</h2>
        </div>
    );
};

export default OrderReview;