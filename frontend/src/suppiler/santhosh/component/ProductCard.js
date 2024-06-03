import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import '../title.css';  // Make sure to import the CSS file
import '../dashboard.css';

const ProductCard = ({ productName, inStock }) => {
  console.log(productName + " " + inStock);

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ flex: '0 0 120px' }}>
          <h5 className="mb-0">{productName}</h5>
        </div>
        <div className="flex-grow-1 ms-3">
          <ProgressBar className="custom-progress-bar" style={{width:'100%',height:'20px', backgroundColor:'white'}}>
            <ProgressBar
              striped
              variant="success"
              now={inStock}
              label={`${inStock}`}
            />
          </ProgressBar>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;