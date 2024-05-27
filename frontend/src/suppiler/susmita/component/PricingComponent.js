import React from 'react';
import MainContent from './MainContent'; // Make sure to import MainContent from its correct file path
import pricing from '../assets/images/zerocommission.jpeg';

function PricingComponent() {
  const title = "Fees and Pricing for Horizonseller.in Sellers";
  const subtitle = "Register today and start selling on Horizonseller.in";
  const description = "Take the first step towards entrepreneurship. With our platform, you can reach millions of customers worldwide and build a thriving online business.";

  return (
    <div>
      <MainContent
        title={title}
        subtitle={subtitle}
        description={description}
        imageUrl={pricing}
      />
    
    </div>
  );
}

export default PricingComponent;
