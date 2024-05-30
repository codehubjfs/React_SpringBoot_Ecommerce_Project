import React from "react";
import CategoryTable from "./CategoryTable";
import { Link } from "react-router-dom";
import DescriptionCard from '../components/DescriptionCard ';
function Breadcrumb() {
    return (
        <nav aria-label="breadcrumb"> 
            <ol className="breadcrumb py-3 px-3">
                <li className="breadcrumb-item">
                    <Link to="/dashboard/utilities" style={{textDecoration:'none'}}>Utilities</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                 Category
                </li>
            </ol>
        </nav>
    );
}

function Category(){
    return(
        <>
        <br />
        <br />
        <Breadcrumb/>
        <h2 className="text-center">Category</h2>  
        <hr />   
        <DescriptionCard title="Welcome to the Category Management Page">
            Welcome to the Category Management Page! Easily organize and enhance your product categories to streamline customer navigation and boost sales. Edit, add, or remove categories to optimize your website's layout. Click 'Manage Categories' to get started and provide your customers with a seamless shopping experience.
        </DescriptionCard>
        <div id="Product-table">
            <div className="row container d-flex justify-content-center">
                <div className="table-responsive">
                    <CategoryTable/>
                </div>
            </div>
        </div>
    </>
    );
}

export default Category;