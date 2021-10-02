import React from 'react';
import success from '../../images/success.gif'

const SuccessfulPurchase = () => {
    const divStyle = {
        textAlign: 'center',
        padding: '50px 0'
    };

    return (
        <div style={divStyle}>
            <img src={success} alt="" />
        </div>
    );
};

export default SuccessfulPurchase;