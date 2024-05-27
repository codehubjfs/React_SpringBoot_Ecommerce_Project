import React from 'react';
import '../App.css'; // Import CSS file for styling

function GrowthTools({ title, description, steps, imageUrls }) {
  return (
    <div className="ui-cards">
      <div className="ui-image-containers">
        {imageUrls && imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index}`} className="product-image" />
        ))}
      </div>
      <div className="ui-cards-body">
        <h5 className="ui-card-head">{title}</h5>
        <ul className="ui-card-lists">
          {steps && steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        {/* Button with different style */}
        
      </div>
    </div>
  );
}

export default GrowthTools;
