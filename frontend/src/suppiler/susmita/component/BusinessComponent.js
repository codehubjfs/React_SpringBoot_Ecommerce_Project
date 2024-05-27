import React from 'react';
import MainContent from './MainContent'; // Make sure to import MainContent from its correct file path
import growbusiness1 from '../assets/images/growbusiness1.jpg';

function BusinessComponent() {
  const title = "Selling Tools";
  const subtitle = "Join thousands of successful sellers";
  const description = "Tools to help you grow your business and reach new Customers";

  return (
    <MainContent
      title={title}
      subtitle={subtitle}
      description={description}
      imageUrl={growbusiness1}
    />
    
  );
}

export default BusinessComponent;
