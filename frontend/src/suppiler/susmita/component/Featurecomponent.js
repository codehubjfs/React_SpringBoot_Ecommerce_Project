import React from 'react';

function Featurecomponent({ icon, title, description }) {
  // Style for the card-like appearance
  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '5px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '250px', // Adjust as needed
  };

  return (
    <div style={cardStyle}>
      {/* Your component content here */}
      <img src={icon} alt="Feature Icon" height="32px" width="32px" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Featurecomponent;
