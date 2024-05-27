import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SimilarProduct = ({ similarProducts }) => {
    return (
        <div style={{ display: 'flex', overflowX: 'auto', gap: '20px' }}>
            {similarProducts.map((product) => {
                // Calculate discount percentage
                const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
                return (
                    <div key={product.productId} style={{ maxWidth: '200px' }}>
                        {/* Wrap the product link with Link component */}
                        <Link to={`/product/${product.categoryId}/${product.productId}`} style={{ marginRight: '20px', textDecoration: 'none' }}>
                            <img src={product.imageSrc} style={{ maxWidth: '100%', maxHeight: '150px' }} alt={product.title} />
                        </Link>
                        <div>
                            {/* Wrap the product link with Link component */}
                            <Link to={`/product/${product.categoryId}/${product.productId}`} style={{ display: 'block', marginBottom: '10px', textDecoration: 'none' }}>
                                {product.title}
                                <br />
                               
                            </Link>
                            <div style={{ marginBottom: '10px' }}>
                                <label style={{ marginBottom: '5px', display: 'block' }}><b>Price</b></label>
                                {discountPercentage > 0 && ( // Render discount percentage if it's greater than 0
                                    <div style={{ marginBottom: '10px' }}>
                                        <label style={{ marginBottom: '5px', display: 'block' }}><b></b></label>
                                        <div>{discountPercentage}%off</div>
                                    </div>
                                )}
                                <div><strong>{product.price}</strong></div>

                            </div>

                            <div>
                                <div style={{ textDecoration: 'line-through' }}>M.R.P.: {product.originalPrice}</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default SimilarProduct;