import React from 'react';

import useProducts from '../../hooks/useProduct';
import useCart from '../../hooks/useCart'
import Cart from '../Cart/Cart';
import OrderedItems from '../OrderedItems/OrderedItems';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';



const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();


    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key)
    }

    const handleMakePurchase = () => {
        history.push('/successful-purchase');
        setCart([]);
        clearTheCart();
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                <h2>Review Your Order</h2>
                {
                    cart.map(product => <OrderedItems
                        product={product}
                        key={product.key}
                        handleRemove={handleRemove}>
                    </OrderedItems>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleMakePurchase} className="btn-regular">Complete Purchase</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;