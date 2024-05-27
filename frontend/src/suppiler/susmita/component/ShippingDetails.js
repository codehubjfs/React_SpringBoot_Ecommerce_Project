import React from 'react';
import CircularImage from './CircularImage';
import shippingImage from '../assets/images/shippingimage.png';

function ShippingDetails() {
  return (
    <div> {/* Wrap the JSX elements in a parent div */}
      <h2 className="ui-register-header mb-5">Quick Facts on Shipping & Delivery</h2>
      <CircularImage
        image={shippingImage}
        factTitle="Shipping"
        factContent="Horizon’s  service allows you to focus on selling, while we take care of the shipping and delivery with only 18% GST on the shipping charges. You can sell your products to crores of Meesho customers, schedule delivery with access to tens of thousands of local couriers, and have the flexibility to set your own prices."
        alignLeft={true}
        contentStyle={{ fontSize: '24px',color:'black' }}
      />
    </div>
  );
}

export default ShippingDetails;
