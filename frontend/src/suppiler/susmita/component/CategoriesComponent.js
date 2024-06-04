import React, { useState } from 'react';
import '../App.css';

function CategoriesComponent() {
  const [showAll, setShowAll] = useState(false);

  const toggleCategories = () => {
    setShowAll(!showAll);
  };

  const categories = [
    'Sell Sarees Online',
    'Sell Jewellery Online',
    'Sell Tshirts Online',
    'Sell Shirts Online',
    'Sell Watches Online',
    'Sell Sarees Online',
    'Sell Jewellery Online',
    'Sell Sarees Online',
    'Sell Jewellery Online',
    'Sell Tshirts Online',
    'Sell Shirts Online',
    'Sell Watches Online',
    'Sell Sarees Online',
    'Sell Jewellery Online', 'Sell Sarees Online',
    'Sell Jewellery Online',
    'Sell Tshirts Online',
    'Sell Shirts Online',
    'Sell Watches Online',
    'Sell Sarees Online',
    'Sell Jewellery Online', 'Sell Sarees Online',
    'Sell Jewellery Online',
    'Sell Tshirts Online',
    'Sell Shirts Online',
    'Sell Watches Online',
    'Sell Sarees Online',
    
    // Add more categories as needed
  ];

  const displayedCategories = showAll ? categories : categories.slice(0, 5);

  return (
    <div className="ui-categories-container">
      <h2 style={{ fontSize: '22px' }}><b>Popular Categories to Sell Online</b></h2>
      <ul className="ui-categories-list">
        {displayedCategories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
        {!showAll && <li className="ui-hidden">More categories...</li>}
      </ul>
      <button className="ui-toggle-button mb-5" style={{ background: 'black', color: 'white' }} onClick={toggleCategories}>
        {showAll ? 'View Less' : 'View More'}
      </button>
    </div>
  );
}

export default CategoriesComponent;
