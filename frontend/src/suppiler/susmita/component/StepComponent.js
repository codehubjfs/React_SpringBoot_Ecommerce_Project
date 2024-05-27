import React from 'react';
import '../App.css';
function StepComponent({ number, title, description }) {
  return (
    <div className="ui-step">
      <div className="ui-circle">{number}</div>
      <div className="ui-step-info">
        <h3>{title}</h3>
        <div className="ui-step-description">{description}</div>
      </div>
    </div>
  );
}

export default StepComponent;
