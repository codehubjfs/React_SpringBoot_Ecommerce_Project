import React from 'react';
import Category from '../components/Category';
import Footer from './Footer';

const ProductLayout = ({children}) => {
    return (
        <div>
<Category/>
            <main>{children}</main>
        </div>
    );
}
export default ProductLayout;