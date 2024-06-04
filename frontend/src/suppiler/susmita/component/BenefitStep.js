import React from 'react';
import StepComponent from './StepComponent';
import '../App.css';

function  BenefitStep() {
  return (
    <div className="ui-how-it-works mb-5" style={{ background: '#d6d6d6', padding: '20px' ,borderRadius:'10px' }}>
      <h1 id="ui-howworks">How it Works</h1>
      <div className="row justify-content-between align-items-center">
        <div className="col-md-6 col-lg-auto mb-4">
          <div className="ui-card">
            <StepComponent
              number="1"
              title="All you need is:"
              description={
                <>
                  GSTIN (for GST sellers) or<br />Enrolment ID(for<br />non-GST sellers)
                </>
              }
            />
          </div>
        </div>
        <div className="col-md-6 col-lg-auto mb-4">
          <div className="ui-card">
            <StepComponent
              number="2"
              title="List Products"
              description={<>List products you want to sell<br /> in your supplier panel and <br />proceed to further Selling</>}
            />
          </div>
        </div>
        <div className="col-md-6 col-lg-auto mb-4">
          <div className="ui-card">
            <StepComponent
              number="3"
              title="Get Orders"
              description={<>Start getting orders from <br />crores of Indians actively<br /> shopping on our platform.</>}
            />
          </div>
        </div>
        <div className="col-md-6 col-lg-auto mb-4">
          <div className="ui-card">
            <StepComponent
              number="4"
              title="Lowest Cost Shipping"
              description={<>Products are shipped to <br />customers at lowest costs<br /> in your supplier panel</>}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitStep;
