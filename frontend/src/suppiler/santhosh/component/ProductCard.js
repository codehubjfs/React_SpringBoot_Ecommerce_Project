import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';

const ProductCard = ({ productName, inStock, outOfStock }) => {
  return (
    <div >
      <div className="d-flex align-items-center" >
        <div  style={{ flex: '0 0 100px' }}>
        <h5 className="mb-0">{productName}</h5>
        </div>
       
        <div className="flex-grow-1 ms-3">
          <ProgressBar>
            <ProgressBar 
              striped 
              variant="success" 
              now={inStock} 
              key={1} 
              label={`${inStock}%`} 
            />
            <ProgressBar 
              striped 
              variant="danger" 
              now={outOfStock} 
              key={2} 
              label={`${outOfStock}%`} 
            />
          </ProgressBar>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;