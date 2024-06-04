import React from 'react';
import image1 from '../assets/images/productlisting.jpeg';

function ProductListing() {
  return (
    <div style={{ marginBottom: '40px', padding: '20px', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Listing Your Product</h3>
      <div style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={image1} alt="Product Listing" />
      </div>
      <p>On completing the registration, you will have access to the Horizon Supplier Panel.</p>
      <div style={{ marginTop: '20px' }}>
        <h4 style={{ fontSize: '18px' }}>What is the Horizon Supplier Panel?</h4>
        <p>Horizon Supplier Panel is the one-stop solution for all your online selling needs. From listing your products and managing inventory to processing orders and tracking payments, log in to the Supplier panel and manage your online business with ease.</p>
        <h4 style={{ fontSize: '18px' }}>Steps</h4>
        <p>Learn how to use Horizon Supplier Panel</p>
      </div>
    </div>
  );
}

export default ProductListing;
