import React from 'react';
import BenefitComponent from './BenefitComponent';
import penaltyIcon from '../assets/images/penalty.png';
import growthIcon from '../assets/images/suppliergrowth.png';
import '../App.css';

function BenefitPromotion() {
  return (
    <div className="ui-container mb-5" style={{backgroundColor:' #d6d6d6',borderRadius:'10px'}}>
      <div className="ui-row row">
        <div className="col-md-6  ">
          <div className="ui-card seller-ui-button-box" style={{width:'80%',height:'100%'}}>
            <h1 id="seller-ui-button-container">Why Suppliers like Horizon?</h1>
            <p id="seller-ui-button-box">
              All the benefits that come with selling on Horizon are designed to help you sell more, and make it easier to grow your business.
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="seller-ui-benefits-container">
            <BenefitComponent
              icon={penaltyIcon}
              title="0 Penalty Charges"
              description="No charges for late dispatch or cancellations"
            />
            <BenefitComponent
              icon={growthIcon}
              title="Growth for Every Supplier"
              description="Open for all suppliers, including those without a Regular GSTIN"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitPromotion;
