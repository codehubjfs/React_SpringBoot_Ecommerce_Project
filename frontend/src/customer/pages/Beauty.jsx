import React from 'react';

import ProductCard from '../components/ProductCard';
import { Beautyproductcard } from '../components/Productdatas';
import ProductLayout from '../layouts/ProductLayout';

const Beauty = () => {
    return (
        <ProductLayout>
            <br />
            <div className="container mt-5">
                <h3 style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>Home Appliances</h3><br />

                <div className="row">
                    {Beautyproductcard.filter(product => product.categoryId === 3).map(product => (
                        <ProductCard
                            key={product.productId}
                            productId={product.productId}
                            categoryId={product.categoryId}
                            {...product}
                        />
                    ))}
                </div>
            </div>
        </ProductLayout>
    );
};
export default Beauty;