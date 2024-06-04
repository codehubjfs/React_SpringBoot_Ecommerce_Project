import React from 'react';
import { CiTextAlignJustify } from 'react-icons/ci';

function Featurecomponent({ icon, title, description }) {
  // Style for the card-like appearance
  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '250px', // Adjust as needed
  };

  // Style for the h3 and p elements
  const textStyle = {
    fontSize: '22px',
    marginBottom: '10px', // Add margin between h3 and p
    textAlign: 'justify',
    fontSize:'16px'
  };

  return (
    <div style={cardStyle}>
      {/* Your component content here */}
      <img src={icon} alt="Feature Icon" height="32px" width="32px" />
      <h3 style={{ fontSize: '16px' }}>{title}</h3>
      <p style={textStyle}>{description}</p>
    </div>
  );
}

export default Featurecomponent;
