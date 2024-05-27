import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
const BeautyProductForm = () => {
    const [formData, setFormData] = useState({
        productTitle: '',
        description: '',
        skinType: '',
        productBenefit: '',
        usedFor: '',
        brand: '',
        itemWeight: ''
    });

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        validateField(name, value);
    };

    const validateField = (name, value) => {
        const newErrors = { ...errors };
        switch (name) {
            case 'productTitle':
                newErrors.productTitle = value.trim() ? null : "Product title is required";
                break;
            case 'description':
                newErrors.description = value.trim() ? null : "Description is required";
                break;
            case 'skinType':
                newErrors.skinType = value.trim() ? null : "Skin type is required";
                break;
            case 'productBenefit':
                newErrors.productBenefit = value.trim() ? null : "Product benefit is required";
                break;
            case 'usedFor':
                newErrors.usedFor = value.trim() ? null : "Used for is required";
                break;
            case 'brand':
                newErrors.brand = value.trim() ? null : "Brand is required";
                break;
            case 'itemWeight':
                newErrors.itemWeight = value.trim() ? null : "Item weight is required";
                break;
            default:
                break;
        }
        setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emptyFields = Object.entries(formData).filter(([key, value]) => typeof value === 'string' && value.trim() === '');

        // If there are empty fields, update the errors state and display error messages
        if (emptyFields.length > 0) {
            const newErrors = { ...errors };
            emptyFields.forEach(([fieldName]) => {
                newErrors[fieldName] = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
            });
            setErrors(newErrors);
            return;
        }
        // Add your submission logic here
        if (Object.values(errors).some(val => val !== null)) {
            // If there are errors, stop submission
            return;
        }
        // If no errors, proceed with submission
        navigate('/inventory');
        console.log("Form submitted successfully:", formData);
    };

    return (
        <div>
            <h2>Add Beauty Product</h2>
            <form onChange={handleSubmit} onSubmit={handleSubmit}>
            <div class="row mb-3">
                <div className="col-md-4">
                    <label htmlFor="productTitle" className="form-label">Product Title<span>*</span></label>
                    <input type="text" className="form-control" id="productTitle" name="productTitle" value={formData.productTitle} onChange={handleChange}/>
                    <div className="titleError" style={{ color: 'red' }} data-field="productTitle">{errors.productTitle}</div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="description" className="form-label">Description<span>*</span></label>
                    <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} rows="4"></textarea>
                    <div className="titleError" style={{ color: 'red' }} data-field="description">{errors.description}</div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="skinType" className="form-label">Skin Type<span>*</span></label>
                    <input type="text" className="form-control" id="skinType" name="skinType" value={formData.skinType} onChange={handleChange} />
                    <div className="titleError" style={{ color: 'red' }} data-field="skinType">{errors.skinType}</div>
                </div>
            </div>
            <div class="row mb-3">
                <div className="col-md-4">
                    <label htmlFor="productBenefit" className="form-label">Product Benefit<span>*</span></label>
                    <input type="text" className="form-control" id="productBenefit" name="productBenefit" value={formData.productBenefit} onChange={handleChange} />                 
                    <div className="titleError" style={{ color: 'red' }} data-field="productBenefit">{errors.productBenefit}</div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="usedFor" className="form-label">Used For<span>*</span></label>
                    <input type="text" className="form-control" id="usedFor" name="usedFor" value={formData.usedFor} onChange={handleChange} />                    
                    <div className="titleError" style={{ color: 'red' }} data-field="usedFor">{errors.usedFor}</div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="brand" className="form-label">Brand<span>*</span></label>
                    <input type="text" className="form-control" id="brand" name="brand" value={formData.brand} onChange={handleChange} />
                    <div className="titleError" style={{ color: 'red' }} data-field="brand">{errors.brand}</div>
                </div>
            </div>
            <div class="row mb-3">
                <div className="col-md-4">
                    <label htmlFor="itemWeight" className="form-label">Item Weight (ml/mg)<span>*</span></label>
                    <input type="text" className="form-control" id="itemWeight" name="itemWeight" value={formData.itemWeight} onChange={handleChange} />
                    <div className="titleError" style={{ color: 'red' }} data-field="itemWeight">{errors.itemWeight}</div>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Images<span style={{ color: 'red' }}></span></label>
                    <input type="file" id="images" name="images" accept="image/*" multiple />
                    <div id="imageError" style={{ color: 'red' }}></div>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Videos</label>
                    <input type="file" id="product-videos" name="videos" accept="video/*" multiple />
                    <div id="videoError" style={{ color: 'red' }}></div>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                    <Link to="/inventory" className="active"><button type="button" className="btn btn-secondary" >Cancel</button></Link>&nbsp;
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    );
};

export default BeautyProductForm;