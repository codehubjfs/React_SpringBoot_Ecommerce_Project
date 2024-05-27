import React from "react";
import SubCategoryTable from "./SubCategoryTable";
import SubCategoryModal from "./SubCategoryModel";
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
                    Sub Category
                </li>
            </ol>
        </nav>
    );
}

function SubCategories(){
    return(
        <>
    
        <Breadcrumb/>
        <h2 className="text-center">Sub Category</h2>
        <hr />
        <DescriptionCard title="Welcome to the Sub-Category Management Page">
            Welcome to the sub-Category Management Page! Easily organize and enhance your product categories to streamline customer navigation and boost sales. Edit, add, or remove sub-categories to optimize your website's layout and provide your customers with a seamless shopping experience.
        </DescriptionCard>
        <SubCategoryModal/>
        <div id="Product-table">
            <div className="row container d-flex justify-content-center">
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#SubCategoryModal"  data-bs-whatever="@mdo" id="addbtn">Add Sub-Category</button>
                </div>
                <div className="table-responsive">
                    <SubCategoryTable/>
                </div>
            </div>
        </div>
                                
       
        </>

    );
}

export default SubCategories;