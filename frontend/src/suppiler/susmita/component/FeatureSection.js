import React from 'react';
import FeatureCard from './FeatureCard'; // Assuming the path to your FeatureCard component is correct
import icon14 from '../assets/images/register.png'; // Import icon 14 image
import icon15 from '../assets/images/commission.png'; // Import icon 15 image
import icon16 from '../assets/images/register.png'; // Import icon 16 image

function FeatureSection() {
  return (
    <div className="feature-section" style={{backgroundColor:'#d6d6d6', borderRadius:'10px',margin:'10px',padding:'25px'}}>
      <h2 className="text-center mb-5" >Key Features</h2>
      <div className="row">
        {/* First Card */}
        <FeatureCard
          icon={icon14}
          title="No Registration Fee"
          description="Registering as a Horizon seller is free - no cost of creating your account or getting your products listed."
        />
        {/* Second Card */}
        <FeatureCard
          icon={icon15}
          title="No Collection Fee"
          description="You keep 100% of the sale price with no charges on both payment gateway or cash on delivery orders on Horizon."
        />
        {/* Third Card */}
        <FeatureCard
          icon={icon16}
          title="No Penalty"
          description="Sell on Horizon stress-free without the fear of penalties for order cancellations."
        />
      </div>
    </div>
  );
}

export default FeatureSection;
