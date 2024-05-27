import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ElectronicProductForm from './ElectronicsForm';
import FurnitureForm from './FurnitureForm';
import BeautyProductForm from './BeautyProductForm';
import { Link } from 'react-router-dom';
import { fetchSubcategories } from '../slices/subCategorySlice';

function Breadcrumb() {
    return (
        <nav aria-label="breadcrumb"> 
            <ol className="breadcrumb py-3 px-3">
                <li className="breadcrumb-item">
                    <Link to="/dashboard/products" style={{ textDecoration: 'none' }}>Products</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    Product Form
                </li>
            </ol>
        </nav>
    );
}

function ProductForm() {
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const dispatch = useDispatch();
    const subcategories = useSelector((state) => state.subcategories.subcategories);

    console.log(subcategories);
    useEffect(() => {
        dispatch(fetchSubcategories());
    }, [dispatch]);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setSubcategory('');
    };

    const handleSubcategoryChange = (e) => {
        setSubcategory(e.target.value);
    };

    const renderForm = () => {
        if (category && subcategory) {
            switch (category) {
                case 'Electronics':
                    return (
                        <div>
                            <h2 style={{ textAlign: "center" }}>Electronic Product Form</h2>
                            <hr />
                            <ElectronicProductForm subcategory={subcategory} />
                        </div>
                    );
                case 'Furniture':
                    return (
                        <div>
                            <h2 style={{ textAlign: "center" }}>Furniture Form</h2>
                            <hr />
                            <FurnitureForm subcategory={subcategory} />
                        </div>
                    );
                case 'Beauty':
                    return (
                        <div>
                            <h2 style={{ textAlign: "center" }}>Beauty Form</h2>
                            <hr />
                            <BeautyProductForm subcategory={subcategory} />
                        </div>
                    );
                default:
                    return null;
            }
        } else {
            return null;
        }
    };

    const getCategoryID = (categoryName) => {
        switch (categoryName) {
            case 'Electronics':
                return 1;
            case 'Furniture':
                return 2;
            case 'Beauty':
                return 3;
            default:
                return null;
        }
    };

    return (
        <>
            <div className="mb-3 d-flex justify-content-between align-items-start">
                <div>
                    <Breadcrumb />
                    <label htmlFor="category-select" className="form-label">Category</label>
                    <select className="form-select" id="category-select" name="category" onChange={handleCategoryChange} style={{ width: '300px' }}>
                        <option selected disabled>Select Category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Beauty">Beauty</option>
                    </select>
                </div>
                <div style={{ marginTop: '70px' }}>
                    <label htmlFor="subcategory-select" className="form-label">Subcategory</label>
                    <select className="form-select" id="subcategory-select" name="subcategory" onChange={handleSubcategoryChange} style={{ width: '300px' }}>
                        <option selected disabled>Select Subcategory</option>
                        {subcategories?.filter(sub => sub.categoryId === getCategoryID(category)).map(filteredSubcategory => (
                            <option key={filteredSubcategory.subcategoryId} value={filteredSubcategory.subCategoryName}>
                                {filteredSubcategory.subCategoryName}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            {renderForm()}
        </>
    );
}

export default ProductForm;