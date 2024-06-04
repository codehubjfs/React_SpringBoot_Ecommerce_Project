import React from 'react';
import '../App.css'; // Import the CSS file

function PricingSloganCard() {
  return (
    <div className="ui-slogan-card mb-5" style={{ textAlign: 'center',marginTop:'30px' }}>
      <h1 style={{ fontSize: '20px', marginBottom: '10px' }}>Unlike offline sales where we have to wait 40-45  days for payments, on Horizon we are paid after 7 days of the sale.</h1>
     
      <p style={{ fontSize: '18px', marginBottom: '0',color:'gray' }}>
        -Vijay, CEO, HorizonSeller
      </p>
    </div>
  );
}

export default PricingSloganCard;
