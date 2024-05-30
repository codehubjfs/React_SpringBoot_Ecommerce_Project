import React from 'react';
import { Link } from 'react-router-dom';

const SimilarProduct = ({ similarProducts }) => {
  return (
    <div style={{ display: 'flex', overflowX: 'auto', gap: '20px' }}>
      {similarProducts.map((product) => {
        const discountPercentage = Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) * 100
        );
        return (
          <div key={product.productId} style={{ maxWidth: '200px', flex: '0 0 auto' }}>
            <Link to={`/product/${product.category}/${product.productId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={product.mainImage} style={{ maxWidth: '100%', maxHeight: '150px' }} alt={product.productTitle} />
            </Link>
            <div style={{ padding: '10px' }}>
              <Link to={`/product/${product.category}/${product.productId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{product.title}</div>
              </Link>
              <div style={{ marginBottom: '5px' }}>
                <strong>Price: ₹{product.price}</strong>
                {discountPercentage > 0 && (
                  <div style={{ color: 'green', fontWeight: 'bold' }}>
                    {discountPercentage}% off
                  </div>
                )}
              </div>
              <div style={{ textDecoration: 'line-through', color: 'gray' }}>
                M.R.P.: ₹{product.originalPrice}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SimilarProduct;


