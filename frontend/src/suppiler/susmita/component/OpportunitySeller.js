import React from 'react';
import '../App.css'; // Import CSS file for styling

function OpportunitySeller() {
  return (
    <div className="ui-opportunity-container mb-5" style={{marginTop:'20px'}}>
      <h4 className="ui-opportunity-heading" style={{ color: 'black',fontSize:'22px' }}><b>Opportunity for Sellers without a GSTIN or having a Composition GSTIN</b></h4>
      <p className="ui-opportunity-description" style={{ color: 'black',fontSize:'16px',textAlign:'center',padding:'20px'}}>
        Horizon welcomes sellers without a GSTIN or having a Composition GSTIN to sign up and begin selling to lakhs of customers within their own state.
        For sellers not registered under GST, it's necessary to possess an enrollment ID or UIN for the registration process. If you haven't obtained your Enrolment ID or UIN yet, you can apply for it <a href="https://example.com">here</a> and proceed to register on Horizon.
      </p>
    </div>
  );
}

export default OpportunitySeller;
