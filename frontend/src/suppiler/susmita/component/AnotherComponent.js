import React from 'react';
import MainContent from './MainContent'; // Make sure to import MainContent from its correct file path
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for routing

function AnotherComponent() {
  const title = "Sell online to 14 Cr+ customers";
  const subtitle = "at 0% Commission";
  const description = (
    <>
      Become a Horizon seller and grow your business across India. 
      Don't have a GSTIN or have a Composition GSTIN? 
      You can still sell on HorizonSeller. 
      <Link to="/gst" style={{ color: 'blue', textDecoration: 'underline', marginLeft: '5px' }}>Click here</Link> to know more.
    </>
  );
  const imageUrl = require('../assets/images/amazonseller.jpeg'); // Import the image or use the correct path

  return (
    <MainContent
      title={title}
      subtitle={subtitle}
      description={description}
      imageUrl={imageUrl}
    />
  );
}

export default AnotherComponent;
