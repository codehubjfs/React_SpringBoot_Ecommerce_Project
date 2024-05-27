import React from 'react';
import RewardComponent from './RewardComponent';
import StabilityComponent from './StabilityComponent';
import notification from '../assets/images/notification.jpeg';
import cancellation from '../assets/images/cancellationimage.png';

function CombineComponent() {
  return (
    <div>
      <div className="ui-row mb-5" style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)'}}>
        <RewardComponent />
        <StabilityComponent
          icon={notification}
          title="Free catalog visibility of ₹600"
          description="Run advertisements for your catalogs to increase the visibility of your products and get more orders. Currently, not available for sellers who don't have a Regular GSTIN."
        />
        <StabilityComponent
          icon={cancellation}
          title="No Order Cancellation Charges"
          description="Run advertisements for your catalogs to increase the visibility of your products and get more orders. Currently, not available for sellers who don't have a Regular GSTIN."
        />
      </div>
    </div>
  );
}

export default CombineComponent;
