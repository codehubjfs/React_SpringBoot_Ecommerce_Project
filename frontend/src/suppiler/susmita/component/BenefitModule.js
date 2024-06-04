import React from 'react';
import StepComponent from './StepComponent';
import '../App.css';

function BenefitModule() {
  return (
    <div className="ui-benefit-module-container mb-5">
      <br></br>
      <h4 style={{ fontSize: '22px', fontWeight: 'bold' ,margin:'20px'}}>Become a Horizon Seller in Simple Steps</h4>
      <div className="ui-how-it-works mb-5" style={{ background: '#d6d6d6', padding: '10px', marginBottom: '20px',borderRadius:'10px' }}>
        <h1 id="ui-howworks" style={{ textAlign: 'center', marginBottom: '20px' }}></h1>
        <div className="row justify-content-between">
          <div className="col-md-auto mb-4">
            <StepComponent
              number="1"
              title="Get Enrolment ID/UIN"
              description={<>
                  Get Enrolment ID/UIN from <br />here if you don’t have GSTIN.<br /> Otherwise, use your Composition GSTIN.
              </>}
            />
          </div>
          <div className="col-md-auto mb-4">
            <StepComponent
              number="2"
              title="Sign up for free"
              description={<>Register as a Horizon Seller.<br /> All you need is an <br />active bank account and <br />Enrolment ID / UIN (for sellers<br /> without GSTIN) or GSTIN <br />(for GSTIN sellers).</>}
            />
          </div>
          <div className="col-md-auto mb-4">
            <StepComponent
              number="3"
              title="Upload your product"
              description={<>Horizon charges the lowest shipping<br /> cost for deliveries across India<br /> (for GST sellers) and within <br />the state (for non-GST sellers).</>}
            />
          </div>
         
          <div className="col-md-auto mb-4">
            <StepComponent
              number="4"
              title="Receive Payments"
              description={<>Payment is securely deposited<br /> directly to your bank account on<br /> Horizon following a 7-day payment cycle<br /> from order delivery, including<br /> Cash on Delivery orders.</>}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitModule;
