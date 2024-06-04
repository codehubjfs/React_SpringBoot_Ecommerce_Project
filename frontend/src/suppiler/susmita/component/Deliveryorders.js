import React from 'react';
import deliveryOrdersImage from '../assets/images/deliveryorders.jpeg';

function DeliveryOrders() {
return (
<div style={{ marginBottom: '40px', padding: '20px', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
<h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Delivery & Payment</h3>
<div style={{ margin: '20px 0', textAlign: 'center' }}>
<img src={deliveryOrdersImage} alt="Delivery Orders" />
</div>
<p style={{ fontSize: '16px' }}>When you receive an order for your product, you are notified via email. You can also check the order update on the Horizon Supplier panel.</p>
<p style={{ fontSize: '16px' }}>Horizon charges you the lowest shipping cost for deliveries across India. Our logistics partner picks up the product from your location and delivers it straight to the customer.</p>
</div>
);
}

export default DeliveryOrders;
