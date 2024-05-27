// BenefitStep.js
import React from 'react';
import StepComponent from './StepComponent';
import '../App.css';

function BenefitItem() {
  return (
    <div className="ui-how-it-works mb-5" style={{ background: 'linear-gradient(to right, #c7ecee, #a5b1c2)' }}>
      <h1 id="ui-howworks">How it Works</h1>
      <div className="ui-row justify-content-between">
        <div className="ui-col-md-auto mb-4">
          <StepComponent
            number="1"
            title="Sign up for free"
            description="Register as a Horizon Seller. All you need is an active bank account and your GSTIN number (for GST sellers) or Enrolment ID / UIN (for non-GST sellers)."
          />
        </div>
        <div className="ui-col-md-auto mb-4">
          <StepComponent
            number="2"
            title="Upload your product & catalog"
            description="After completing the registration, upload your product catalog on the Horizon Supplier Panel."
          />
        </div>
        <div className="ui-col-md-auto mb-4">
          <StepComponent
            number="3"
            title="Receive & Ship Orders"
            description="Horizon charges the lowest shipping cost for deliveries across India (for GST sellers) and within the state (for non-GST sellers)."
          />
        </div>
        <div className="ui-col-md-auto mb-4">
          <StepComponent
            number="4"
            title="Receive Payments"
            description="Payment is securely deposited directly to your bank account on Horizon following a 7-day payment cycle from order delivery, including Cash on Delivery orders."
          />
        </div>
      </div>
    </div>
  );
}

export default BenefitItem;
