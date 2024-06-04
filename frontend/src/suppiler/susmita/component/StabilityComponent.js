import React from 'react';

function StabilityComponent({ icon, title, description }) {
  return (
    <div className="col-md-4">
      <div className="ui-benefit">
        <img src={icon} alt="Icon" width="32px" height="32px" />
        <h4 style={{ fontSize: '22px' }}>{title}</h4>
        <p style={{ fontSize: '16px' }}>{description}</p>
      </div>
    </div>
  );
}

export default StabilityComponent;
