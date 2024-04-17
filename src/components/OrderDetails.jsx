// OrderDetails.js
import React from 'react';

function OrderDetails({ orderData }) {
    return (
        <div >
            <div className='vertical'>
                <h3>Order Details</h3>
                <p><span id='order-title'>Customer Name:</span> {orderData.customerName}</p>
                <p id='order'>
                    <span id='order-title'>Order:</span><br />
                    {orderData.order.split(", ").map((item, index) => (
                        <React.Fragment key={index}>
                            {item}<br />
                        </React.Fragment>
                    ))}
                </p>
            </div>
        </div>
    );
}

export default OrderDetails;
