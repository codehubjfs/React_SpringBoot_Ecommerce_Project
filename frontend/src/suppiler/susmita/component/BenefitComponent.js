import React from 'react';

function BenefitComponent({ icon, title, description }) {
  return (
    <div className="ui-benefit">
      <img src={icon} alt="icon" style={{ width: '32px', height: '32px' }} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default BenefitComponent;
