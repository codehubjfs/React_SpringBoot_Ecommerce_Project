import React from 'react';
import '../App.css'; // Make sure to import the CSS file for additional styling

function BenefitComponent({ icon, title, description }) {
  return (
    <div className="seller-ui-benefit card">
      <img src={icon} alt="icon" className=" seller-ui-benefit-icon" />
      <div className=" seller-ui-benefit-content">
        <h4 className=" seller-ui-benefit-title">{title}</h4>
        <p className=" seller-ui-benefit-description">{description}</p>
      </div>
    </div>
  );
}

export default BenefitComponent;
