import React from 'react';
import '../App.css'; // Import CSS file for styling

function ProductListingComponent({ content, imageUrls }) {
  return (
    <div className="ui-card">
      <div className="ui-image-container">
        {imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index}`} className="product-image" />
        ))}
      </div>
      <div className="ui-card-body">
        <h5 className="ui-card-title">{content.title}</h5>
        <ul className="ui-card-list">
          {content.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductListingComponent;
