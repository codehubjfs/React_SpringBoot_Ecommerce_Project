import React from 'react';
import MainContent from './MainContent'; // Make sure to import MainContent from its correct file path
import homepage from '../assets/images/homepage.jpeg';

function DifferentComponent() {
  const title = "Start Your Online Business Today";
  const subtitle = "Join thousands of successful sellers";
  const description = "Take the first step towards entrepreneurship. With our platform, you can reach millions of customers worldwide and build a thriving online business.";

  return (
    <MainContent
      title={title}
      subtitle={subtitle}
      description={description}
      imageUrl={homepage}
    />
  );
}

export default DifferentComponent;
