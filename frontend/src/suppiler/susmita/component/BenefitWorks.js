import React from 'react';
import '../App.css';

function StepComponent({ number, title, description }) {
  return (
    <div className="ui-step-card" style={{ marginRight: '135px' }}>
      <div className="ui-circle" style={{ margin: '0' }}>{number}</div>
      <div className="ui-step-info">
        <h3 style={{ fontSize: '20px', textAlign: 'center' }}><b>{title}</b></h3>
        <div style={{ fontSize: '16px', textAlign: 'center' }}>{description}</div>
      </div>
    </div>
  );
}

function BenefitWorks() {
  return (
    <div className="ui-how-it-works mb-5" style={{ background: '#d6d6d6', borderRadius: '10px', marginTop: '15px' }}>
      <h1 id="ui-howworks">How it Works</h1>
      <div className="ui-row align-items-center" style={{ marginLeft: '65px' }}>
        <div className="col-md-auto mb-4">
          <StepComponent
            number="1"
            title="All you need are:"
            description={
              <>
                <ol>
                  <li>GSTIN (for GST sellers) or<br />Enrolment ID (for<br />non-GST sellers)</li>
                </ol>
              </>
            }
          />
        </div>
        <div className="col-md-auto mb-4">
          <StepComponent
            number="2"
            title="List Products"
            description={<>List the products you want to sell<br /> in your Horizon supplier<br /> panel and start selling in our panel</>}
          />
        </div>
        <div className="col-md-auto mb-4">
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

export default BenefitWorks;
