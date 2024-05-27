import React from 'react';
import BenefitComponent from './BenefitComponent';
import penaltyIcon from '../assets/images/penalty.png';
import growthIcon from '../assets/images/suppliergrowth.png';
import '../App.css';

function BenefitPromotion() {
  return (
    <div className="ui-container mb-5">
      <div className="ui-row">
        <div className="col-md-6">
          <div className="ui-button-box">
            <h1 id="ui-button-container"><b>Why Suppliers like Horizon?</b></h1>
            <p id="ui-button-box">All the benefits that come with selling on Horizon<br /> are designed to help you sell more,<br /> and make it easier to grow your business.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="ui-benefits-container">
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
