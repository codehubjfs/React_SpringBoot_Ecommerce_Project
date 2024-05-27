import React from 'react';
import '../App.css';
import deliveryOrdersImage from '../assets/images/deliveryorders.jpeg'; // Import the image

function Deliveryorders() {
  return (
    <div className="col-md-12">
      <div className="ui-row">
        <div className="col-md-12">
          <h3 className="ui-register-header" style={{ fontSize: '24px', color: 'black' }}>Delivery & Payment</h3>
          <div className="ui-image-container text-center">
            {/* Centered images go here */}
            <img src={deliveryOrdersImage} alt="Image 1" />
          </div>
          <p style={{ fontSize: '18px', color: 'black' }}>When you receive an order for your product, you are notified via email. You can also check the order update on the Horizon Supplier panel.</p>
          <p style={{ fontSize: '18px', color: 'black' }}>Horizon charges you the lowest shipping cost for deliveries across India. Our logistics partner picks up the product from your location and delivers it straight to the customer.</p>
        </div>
      </div>
    </div>
  );
}

export default Deliveryorders;
