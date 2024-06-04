// RewardComponent.js
import React from 'react';
import '../App.css';

function RewardComponent() {
  return (
    <div className="col-md-4" style={{ height: '100%' }}> {/* Ensure it takes full height */}
      <div className="ui-p-container" style={{marginTop:'30px'}}>
        <h1 id="ui-para1">Exclusive Supplier Rewards</h1>
        <h3><b>for the first 30 days</b></h3>
      </div>
    </div>
  );
}

export default RewardComponent;
