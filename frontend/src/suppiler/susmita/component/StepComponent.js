import React from 'react';
import '../App.css';

function StepComponent({ number, title, description }) {
  return (
    <div className="ui-step-card" style={{marginRight:'15px'}}>
      <div className="ui-circle" style={{margin:'0'}}>{number}</div>
      <div className="ui-step-info">
        <h3 style={{ fontSize: '20px',textAlign:'center' }}><b>{title}</b></h3>
        <div style={{ fontSize: '16px',textAlign:'center' }}>{description}</div>
      </div>
    </div>
  );
}

export default StepComponent;
