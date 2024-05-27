import React from 'react';
import FeatureCard from './FeatureCard'; // Assuming the path to your FeatureCard component is correct
import paymentCycleIcon from '../assets/images/paymenticon.png';
import securedPaymentIcon from '../assets/images/securedicon.png';
function PaymentCycle() {
  return (
    <div>
      <h2 className="ui-register-header mb-5">Payment Cycle</h2>
      <div className="row">
        <div className="col-md-6">
          <FeatureCard
            icon={paymentCycleIcon}
            title="7-day payment cycle"
          />
        </div>
        <div className="col-md-6">
          <FeatureCard
            icon={securedPaymentIcon}
            title="Secured payment"
          />
        </div>
      </div>
    </div>
  );
}

export default PaymentCycle;
