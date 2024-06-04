// FeeCard.js
import React from 'react';
import BoxingComponent from './BoxingComponent';

function FeeCard() {
  return (
    <div className="ui-container mb-5" style={{backgroundColor:'#d6d6d6',borderRadius:'10px'}}>
      <div className="row md-7">
        <h1 className="ui-header mb-5">Factors Influencing Seller Fees and Pricing on Horizonseller.in</h1>
        <div className="col-md-3 mb-4" style={{ paddingLeft: "35px" }}>
          <BoxingComponent
            size="SELL ON HORIZON FEES"
            title1="Product category based fees"
            title2="Starts at 2%, varies based on product category"
          />
        </div>
        <div className="col-md-3 mb-4" style={{ paddingLeft: "35px" }}>
          <BoxingComponent
            size="CLOSING HANDLING FEES"
            title1="Based on price of item sold"
            title2="starts at ₹ 5, Varies by product price range and fulfillment channel"
          />
        </div>
        <div className="col-md-3 mb-4" style={{ paddingLeft: "35px" }}>
          <BoxingComponent
            size="WEIGHT HANDLING FEES"
            title1="Fees for Shipping/Delivery"
            title2="starts at Rs. 29 per item shipped, varies by item volume & distance"
          />
        </div>
        <div className="col-md-3 mb-4" style={{ paddingLeft: "35px" }}>
          <BoxingComponent
            size="OTHER FEES"
            title1="Based on program/service"
            title2="Only applicable for certain Fulfillment Channel, and/or optional programs or services subscribed to"
          />
        </div>
      </div>
    </div>
  );
}

export default FeeCard;
