import React from 'react';
import { Electroniccards, Homeproductcard } from './Productdatas';
import SimilarProduct from './SimilarProduct'; // Import the SimilarProduct component
import './similarproducts.css';

const SimilarProductsLayout = ({ productId, categoryId }) => {
    // Determine which data source to use based on the categoryId
    const products = categoryId === 1 ? Electroniccards : Homeproductcard;

    // Filter out the current product from the list
    const filteredProducts = products.filter((product) => product.productId !== productId && product.categoryId === categoryId);

    return (
        <div>
            <h2>Similar Products</h2>
            <div className="similar-products">
                {filteredProducts.map((product) => (
                    <SimilarProduct
                        key={product.productId} // Ensure each product has a unique key
                        productId={productId} // Pass productId as prop
                        categoryId={categoryId} // Pass categoryId as prop
                        item={product} // Pass the product data as a prop
                    />
                ))}
            </div>
        </div>
    );
};

export default SimilarProductsLayout;
