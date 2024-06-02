import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import '../title.css';  // Make sure to import the CSS file

const ProductCard = ({ productName, inStock }) => {
  console.log(productName + " " + inStock);

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ flex: '0 0 100px' }}>
          <h5 className="mb-0">{productName}</h5>
        </div>
        <div className="flex-grow-1 ms-3">
          <ProgressBar className="custom-progress-bar">
            <ProgressBar
              striped
              variant="success"
              now={inStock}
              // label={`${inStock}%`}
            />
          </ProgressBar>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
