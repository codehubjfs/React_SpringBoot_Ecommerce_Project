// ParentComponent.js
import React from "react";
import BoxingComponent from "./BoxingComponent";
import '../App.css'; // Import CSS file for styling

function ParentComponent() {
  return (
    <div className="ui-container mb-5">
      <h1 className="ui-header mb-5">Why Sell Your Products On Horizon?</h1>
      <div className="row md-7">
        <div className="col-md-3 mb-4" style={{ paddingLeft: "40px" }}>
          <BoxingComponent size="11 Lakh+" title1="Trust Horizon To Sell" title2="Online" />
        </div>
        <div className="col-md-3 mb-4" style={{ paddingLeft: "60px" }}>
          <BoxingComponent size="20 Crores+" title1="Customers Buying across" title2="India" />
        </div>
        <div className="col-md-3 mb-4" style={{ paddingLeft: "60px" }}>
          <BoxingComponent size="50000+" title1="Pincode Supported" title2="For Delivery" />
        </div>
        <div className="col-md-3 mb-4" style={{ paddingLeft: "70px" }}>
          <BoxingComponent size="700+" title1="Categories to Sell" title2="Online" />
        </div>
      </div>
    </div>
  );
}

export default ParentComponent;
