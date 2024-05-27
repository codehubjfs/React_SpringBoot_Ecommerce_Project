import React from 'react';
import '../App.css';
function FooterComponent() {
  const categories = [
    'Sell Sarees Online', 'Sell Jewellery Online', 'Sell Tshirts Online',
    'Sell Shirts Online', 'Sell Watches Online', 'Sell Sarees Online',
    'Sell Jewellery Online', 'Sell Sarees Online', 'Sell Jewellery Online',
    'Sell Tshirts Online', 'Sell Shirts Online', 'Sell Watches Online',
    'Sell Sarees Online', 'Sell Jewellery Online', 'Sell Sarees Online',
    'Sell Jewellery Online', 'Sell Tshirts Online', 'Sell Shirts Online',
    'Sell Watches Online', 'Sell Sarees Online', 'Sell Jewellery Online',
    'Sell Sarees Online', 'Sell Jewellery Online', 'Sell Tshirts Online',
    'Sell Shirts Online', 'Sell Watches Online', 'Sell Sarees Online',
  ];

  return (
    <div className="ui-categories-container">
      <h2 className="ui-Category-component"><b>Popular Categories to Sell Online</b></h2>
      <ul className="ui-categories-list">
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
        <li className="ui-hidden">More categories...</li>
      </ul>
    </div>
  );
}

export default FooterComponent;
