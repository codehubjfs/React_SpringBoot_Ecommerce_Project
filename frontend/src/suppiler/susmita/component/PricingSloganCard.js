import React from 'react';
import '../App.css'; // Import the CSS file

function PricingSloganCard() {
  return (
    <div className="ui-slogan-card mb-5" style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '40px', marginBottom: '10px' }}>Unlike offline sales where we have to wait 40-45</h1>
      <p style={{ fontSize: '40px', marginBottom: '5px',color:'black' }}>
        <strong>days for payments, on Horizon we are paid after 7 days of the sale.</strong>
      </p>
      <p style={{ fontSize: '40px', marginBottom: '0' }}>
        <strong>-Vijay, CEO, HorizonSeller</strong>
      </p>
    </div>
  );
}

export default PricingSloganCard;
