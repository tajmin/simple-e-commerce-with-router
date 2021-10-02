import React from 'react';


const OrderedItems = (props) => {
    console.log(props)
    const { name, price, quantity, key } = props.product;
    const { handleRemove } = props;

    return (
        <div className="product">
            <div className="ordered-product">
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => handleRemove(key)} className="btn-regular">Remove</button>
            </div>

        </div>
    );
};

export default OrderedItems;