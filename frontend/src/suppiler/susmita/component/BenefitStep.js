import React from 'react';
import StepComponent from './StepComponent';
import '../App.css';

function  BenefitStep() {
  return (
    <div className="ui-how-it-works mb-5" style={{ background: 'linear-gradient(to right, #ded2d2, #675c61)', padding: '20px' }}>
      <h1 id="ui-howworks">How it Works</h1>
      <div className="ui-row justify-content-between align-items-center">
        <div className="col-md-auto mb-4" style={{ marginRight: '10px' }}>
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
        <div className="col-md-auto mb-4" style={{ marginRight: '10px' }}>
          <StepComponent
            number="2"
            title="List Products"
            description={<>List the products you want to sell<br /> in your supplier panel and <br />proceed to further Selling</>}
          />
        </div>
        <div className="col-md-auto mb-4" style={{ marginRight: '10px' }}>
          <StepComponent
            number="3"
            title="Get Orders"
            description={<>Start getting orders from <br />crores of Indians actively<br /> shopping on our platform.</>}
          />
        </div>
        <div className="col-md-auto mb-4">
          <StepComponent
            number="4"
            title="Lowest Cost Shipping"
            description={<>Products are shipped to <br />customers at lowest costs<br /> in your supplier panel</>}
          />
        </div>
      </div>
    </div>
  );
}

export default BenefitStep;
