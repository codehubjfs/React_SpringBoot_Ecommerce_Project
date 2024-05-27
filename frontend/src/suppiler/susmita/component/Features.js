import React from 'react';
import FeatureCard from './FeatureCard'; // Import the FeatureCard component
import Icon10 from '../assets/images/commission.png';
import Icon16 from '../assets/images/penalty.png';
import Icon11 from '../assets/images/suppliergrowth.png';
import Icon12 from '../assets/images/businessimage.png';

function Features() {
  return (
    <div className="row">
      <FeatureCard
        icon={Icon10}
        title="0% Commission Fee"
        description="Suppliers selling on Horizon keep 100% of their profit by not paying any commission"
        style={{ textAlign: 'center' }} // Add inline style to justify content
      />
      <FeatureCard
        icon={Icon16}
        title="0 Penalty Charges"
        description="Sell online without the fear of order cancellation charges with 0 Penalty for late dispatch or order cancellations."
        style={{ textAlign: 'center' }} // Add inline style to justify content
      />
      <FeatureCard
        icon={Icon11}
        title="Growth for Every Supplier"
        description="From small to large and unbranded to branded, all suppliers have grown their businesses on Horizon"
        style={{ textAlign: 'center' }} // Add inline style to justify content
      />
      <FeatureCard
        icon={Icon12}
        title="Ease of Doing Business"
        description="Easy Product Listing, Lowest Cost Shipping, 7-Day Payment Cycle from the delivery date"
        style={{ textAlign: 'center' }} // Add inline style to justify content
      />
    </div>
  );
}

export default Features;
