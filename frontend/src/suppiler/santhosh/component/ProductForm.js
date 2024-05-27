import React, { useState } from 'react';
import ElectronicProductForm from './ElectronicProductForm';
import FurnitureForm from './FurnitureForm';
import BeautyProductForm from './BeautyProductForm';
function ProductForm() {
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setSubcategory('');
    }

    const handleSubcategoryChange = (e) => {
        setSubcategory(e.target.value);
    }

    const renderForm = () => {
        switch(category) {
            case 'Electronics':
                return (
                    <div>
                        {/* Render Electronics Form */}
                        <h2 style={{textAlign:"center"}}>Electronic Product Form</h2>
                        <hr />
                        <ElectronicProductForm/>
                        {/* Add your form fields for electronics */}
                    </div>
                );
            case 'Furniture':
                return (
                    <div>
                        {/* Render Furniture Form */}
                        <h2 style={{textAlign:"center"}}>Furniture Form</h2>
                        <hr />
                        <FurnitureForm/>
                        {/* Add your form fields for furniture */}
                    </div>
                );
            case 'Beauty':
                return (
                    <div>
                        {/* Render Beauty Form */}
                        <label htmlFor="beauty-form">Beauty Form</label>
                        <hr />
                        <BeautyProductForm/>
                        {/* Add your form fields for beauty */}
                    </div>
                );
            // Add cases for other categories
            default:
                return null;
        }
    };


    return (
        <>
        <br /><br />
        <div className="mb-3">
                <div>
                    <label htmlFor="category-select" className="form-label">Choose the product Category to add the product</label>
                    <select className="form-select" id="category-select" name="category" onChange={handleCategoryChange}>
                        <option selected disabled>Select Category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Beauty">Beauty</option>
                        {/* Add more options for other categories */}
                    </select>
                    <br />
                    <label htmlFor="subcategory-select" className="form-label">Choose the Subcategory</label>
                    <select className="form-select" id="subcategory-select" name="subcategory" onChange={handleSubcategoryChange}>
                        <option selected disabled>Select Subcategory</option>
                        {category === 'Electronics' && (
                            <>
                                <option value="Mobile phone">Mobile phone</option>
                                <option value="Laptop">Laptop</option>
                                <option value="Tablet">Tablet</option>
                            </>
                        )}
                        {category === 'Furniture' && (
                            <>
                                <option value="Sofa">Sofa</option>
                                <option value="Chair">Chair</option>
                                <option value="Table">Table</option>
                            </>
                        )}
                        {category === 'Beauty' && (
                            <>
                                <option value="Skincare">Skincare</option>
                                <option value="Makeup">Makeup</option>
                                <option value="Haircare">Haircare</option>
                            </>
                        )}
                        {/* Add more options for other categories */}
                    </select>
                    <br />
                    {renderForm()}
                </div>
        </div>
        </>
    );
}

export default ProductForm;