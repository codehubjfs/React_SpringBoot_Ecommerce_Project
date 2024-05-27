import React from 'react';

const DescriptionCard = ({ title, children }) => {
  return (
    <div style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px', padding: '20px' ,backgroundColor:'#cfcccc7b'}}>
      <h5>{title}</h5>
      <p>{children}</p>
    </div>
  );
};

export default DescriptionCard;