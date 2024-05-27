import React from 'react';
import "../App.css";
import ProductCard from './ProductCard';
import ProductTable from './ProductTable';
import { Link } from 'react-router-dom';
function Product() {

    return (
        <>            
            <h1 className="text-center">Product</h1>
            <hr />
                    <ProductCard/>
            <div className="table-responsive">
               
                <div id="Product-table">
                    
                    <div className="row container d-flex justify-content-center">
                        <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                                <Link to="/dashboard/products/addproduct" className="active">
                                    <button type="button" className="btn btn-primary" id="addbtn">Add product</button>
                                </Link>
                                
                        </div>
                        
                        <ProductTable />
                    </div>             
                </div>
                   
            </div>
        </>
    );
}

export default Product;