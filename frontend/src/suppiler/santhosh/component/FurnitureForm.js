import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const FurnitureForm = () => {
    const [formData, setFormData] = useState({
        product_title: '',
        description: '',
        brand: '',
        model: '',
        material: '',
        dimension: '',
        price: '',
        color: ''
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
            case 'product_title':
                newErrors.product_title = value.trim() ? null : "Product Title is required";
                break;
            case 'description':
                newErrors.description = value.trim() ? null : "Description is required";
                break;
            case 'brand':
                newErrors.brand = value.trim() ? null : "Brand is required";
                break;
            case 'model':
                newErrors.model = value.trim() ? null : "Model is required";
                break;
            case 'material':
                newErrors.material = value.trim() ? null : "Material is required";
                break;
            case 'dimension':
                newErrors.dimension = value.trim() ? null : "Dimension is required";
                break;
            case 'price':
                newErrors.price = value.trim() ? (value.trim() <= 0 ? "Price must be a numeric value greater than zero" : null) : "Price is required";
                break;
            case 'color':
                newErrors.color = value.trim() ? null : "Color is required";
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
        <div id="sub-category2-form">
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="product-title" className="form-label">Product Title<span>*</span></label>
                        <input type="text" className="form-control" id="product-title" name="product_title" value={formData.product_title} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="product_title">{errors.product_title}</div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="product-description" className="form-label">Description<span>*</span></label>
                        <textarea className="form-control" id="product-description" name="description" value={formData.description} onChange={handleChange} rows="4"></textarea>
                        <div className="titleError" style={{ color: 'red' }} data-field="description">{errors.description}</div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="product-brand" className="form-label">Brand<span>*</span></label>
                        <input type="text" className="form-control" id="product-brand" name="brand" value={formData.brand} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="brand">{errors.brand}</div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="product-model" className="form-label">Model<span>*</span></label>
                        <input type="text" className="form-control" id="product-model" name="model" value={formData.model} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="model">{errors.model}</div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="product-material" className="form-label">Material<span>*</span></label>
                        <input type="text" className="form-control" id="product-material" name="material" value={formData.material} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="material">{errors.material}</div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="product-dimension" className="form-label">Dimension<span>*</span></label>
                        <input type="text" className="form-control" id="product-dimension" name="dimension" value={formData.dimension} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="dimension">{errors.dimension}</div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="product-price" className="form-label">Price<span>*</span></label>
                        <input type="number" className="form-control" id="product-price" name="price" value={formData.price} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="price">{errors.price}</div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="product-color" className="form-label">Colors<span>*</span></label>
                        <input type="text" className="form-control" id="product-color" name="color" value={formData.color} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="color">{errors.color}</div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="product-images" className="form-label">Images</label>
                        <input type="file" id="product-images" name="images" accept="image/*" multiple />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="product-videos" className="form-label">Videos</label>
                        <input type="file" id="product-videos" name="videos" accept="video/*" multiple />
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                <Link to="/inventory" className="active"><button type="button" className="btn btn-secondary" >Cancel</button></Link>&nbsp;
                    <button type="submit" className="btn btn-success">Add</button>
                </div>
            </form>
        </div>
    );
};

export default FurnitureForm;