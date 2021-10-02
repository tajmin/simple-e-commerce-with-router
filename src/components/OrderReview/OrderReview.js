import React from 'react';

import useProducts from '../../hooks/useProduct';
import useCart from '../../hooks/useCart'
import Cart from '../Cart/Cart';
import OrderedItems from '../OrderedItems/OrderedItems';
import { removeFromDb } from '../../utilities/fakedb';



const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);


    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key)
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                <h1>Review Your Order</h1>
                {
                    cart.map(product => <OrderedItems
                        product={product}
                        key={product.key}
                        handleRemove={handleRemove}>
                    </OrderedItems>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;