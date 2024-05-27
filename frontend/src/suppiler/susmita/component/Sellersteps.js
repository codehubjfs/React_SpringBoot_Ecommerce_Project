import React from 'react';
import StepComponent from './StepComponent'; // Import your existing StepComponent
import '../App.css'; // Import your CSS file where you define styles for the component

function Sellersteps() {
  return (
    <div>
      <h3 id="ui-heading-content"><b>Become a seller on Horizon in simple steps</b></h3>
      <div className="ui-how-it-works">
        <div className="ui-step">
          <svg height="40" width="40" className="ui-circle"></svg>
          <h2 id="ui-heading">1</h2>
          <p><b>Sign up for free</b></p>
          <p>Register as a Horizon Seller. All you need is an active bank account and your GSTIN number (for GST sellers) or Enrolment ID / UIN (for non-GST sellers).</p>
        </div>
        <div className="ui-step">
          <svg height="40" width="40" className="ui-circle"></svg>
          <h2 id="ui-heading">2</h2>
          <p><b>Upload your product & catalog</b></p>
          <p>After completing the registration, upload your product catalog on the Horizon Supplier Panel.</p>
        </div>
        <div className="ui-step">
          <svg height="40" width="40" className="ui-circle"></svg>
          <h2 id="ui-heading">3</h2>
          <p><b>Receive & Ship Orders</b></p>
          <p>Horizon charges the lowest shipping cost for deliveries across India (for GST sellers) and within the state (for non-GST sellers).</p>
        </div>
        <div className="ui-step">
          <svg height="40" width="40" className="ui-circle"></svg>
          <h2 id="ui-heading">4</h2>
          <p><b>Receive Payments</b></p>
          <p>Payment is securely deposited directly to your bank account on Horizon following a 7-day payment cycle from order delivery, including Cash on Delivery orders.</p>
        </div>
      </div>
    </div>
  );
}

export default Sellersteps;

