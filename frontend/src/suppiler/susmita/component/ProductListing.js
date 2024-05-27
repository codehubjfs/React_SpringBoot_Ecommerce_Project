
import React from 'react';
import image1 from '../assets/images/productlisting.jpeg';

function ProductListing() {
  return (
    <div className="col-md-12">
      <div className="row">
        <div className="col-md-12 text-center"> {/* Added text-center class */}
          <h1 className="ui-register-header" style={{ fontSize: '24px', color: 'black' }}>Listing Your Product</h1>
          <div className="ui-image-container ui-text-center">
            {/* Centered images go here */}
            <img src={image1} alt="Image 1" />
          </div>
          <p style={{ fontSize: '18px', color: 'black' }}>On completing the registration, you will have access to the Horizon Supplier Panel.</p>
          <div className="ui-sub-list" id="ui-supplier">
            <h4 style={{ fontSize: '18px', color: 'black' }}>What is the Horizon Supplier Panel?</h4>
            <p style={{ fontSize: '18px', color: 'black' }}>Horizon Supplier Panel is the one-stop solution for all your online selling needs. From listing your products and managing inventory to processing orders and tracking payments, log in to the Supplier panel and manage your online business with ease. The process is simple, and to know more you can watch the below video.</p>
          </div>
         
          <div className="ui-sub-list">
            <h4 style={{ fontSize: '18px', color: 'black' }}>Steps</h4>
            <p style={{ fontSize: '18px', color: 'black' }}>Learn how to use Horizon Supplier Panel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
