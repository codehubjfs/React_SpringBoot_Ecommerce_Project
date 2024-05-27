/*
import React from 'react';
import ProductCard from '../Components/ProductCard';
import { productpagecards } from "../Components/Productpage";
import ProductLayout from '../Layout/ProductLayout';



const Electronics = () => {
    return (


       <ProductLayout>
          <br/>
        <div className="container mt-5">
            <h3 style={{textAlign: 'center', fontFamily: 'sans-serif'}}>ELECTRONICS</h3><br/>

        <div className="row">
            {productpagecards.map(product => (
                <ProductCard key={product.id} id={product.id} {...product} />
            ))}
        </div>

        </div>
        </ProductLayout>

    );
};

export default Electronics;
*/
import React from 'react';
import ProductCard from '../components/ProductCard';
import { Electroniccards } from "../components/Productdatas";
import ProductLayout from '../layouts/ProductLayout';

const Electronics = () => {
    return (
        <ProductLayout>
            <br/>
            <div className="container mt-5">
                <h3 style={{textAlign: 'center', fontFamily: 'sans-serif'}}>ELECTRONICS</h3><br/>

                <div className="row"  >
                    {Electroniccards.map(product => (
                        <ProductCard
                            key={product.productId}
                            categoryId={product.categoryId}
                            productId={product.productId}

                            {...product}
                        />
                    ))}
                </div>
            </div>
        </ProductLayout>
    );
};

export default Electronics;
