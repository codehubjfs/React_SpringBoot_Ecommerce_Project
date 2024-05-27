/*
/!*
import React from 'react';
import ProductCard from '../Components/ProductCard';
import { Homeproductcard } from "../Components/Productpage";
import ProductLayout from '../Layout/ProductLayout';

const HomeAppliances = ({ categoryId, productId }) => {
    let filteredProducts = Homeproductcard;

    // Filter products based on category ID
    if (categoryId) {
        filteredProducts = filteredProducts.filter(product => product.category.id === parseInt(categoryId));
    }

    // Filter products based on product ID
    if (productId) {
        filteredProducts = filteredProducts.filter(product => product.id === parseInt(productId));
    }

    return (
        <ProductLayout>
            <br />
            <div className="container mt-5">
                <h3 style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>Home Appliances</h3><br />

                <div className="row">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} id={product.id} {...product} />
                    ))}
                </div>
            </div>
        </ProductLayout>
    );
};

export default HomeAppliances;
*!/
import React from 'react';
import ProductCard from '../Components/ProductCard';
import { Homeproductcard } from "../Components/Productpage";
import ProductLayout from '../Layout/ProductLayout';

const HomeAppliances = ({ categoryId, productId }) => {
    let filteredProducts = Homeproductcard;

    // Filter products based on category ID
    if (categoryId) {
        filteredProducts = filteredProducts.filter(product => product.category.id === parseInt(categoryId));
    }

    // Filter products based on product ID
    if (productId) {
        filteredProducts = filteredProducts.filter(product => product.id === parseInt(productId));
    }

    return (
        <ProductLayout>
            <br />
            <div className="container mt-5">
                <h3 style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>Home Appliances</h3><br />

                <div className="row">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} id={product.id} categoryId={product.category.id} {...product} />
                    ))}
                </div>
            </div>
        </ProductLayout>
    );
};

export default HomeAppliances;
*/
import React from 'react';
import ProductCard from '../components/ProductCard';
import { Homeproductcard } from "../components/Productdatas";
import ProductLayout from '../layouts/ProductLayout';

const HomeAppliances = () => {
    return (
        <ProductLayout>
            <br />
            <div className="container mt-5">
                <h3 style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>Home Appliances</h3><br />

                <div className="row">
                    {Homeproductcard.map(product => (
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

export default HomeAppliances;
