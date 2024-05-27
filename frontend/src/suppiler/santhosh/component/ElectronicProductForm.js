import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ElectronicProductForm = () => {
    const [formData, setFormData] = useState({
        productTitle: '',
        description: '',
        storage: '',
        ram: '',
        price: '',
        stockAvailable: '',
        brand: '',
        model: '',
        displayType: '',
        displaySize: '',
        processor: '',
        frontCamera: '',
        rearCamera: '',
        battery: '',
        operatingSystem: '',
        color: '',
        images: [],
        videos: []
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
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
            case 'storage':
                newErrors.storage = value.trim() ? null : "Storage is required";
                break;
            case 'ram':
                newErrors.ram = value.trim() ? null : "RAM is required";
                break;
            case 'price':
                newErrors.price = value.trim() ? null : "Price is required";
                break;
            case 'stockAvailable':
                newErrors.stockAvailable = value.trim() ? (value.trim() < 0 ? "Invalid input" : null) : "Stock available is required";
                break;
            case 'brand':
                newErrors.brand = value.trim() ? null : "Brand is required";
                break;
            case 'model':
                newErrors.model = value.trim() ? null : "Model is required";
                break;
            case 'displayType':
                newErrors.displayType = /^[a-zA-Z]+$/.test(value.trim()) ? null : "Display Type should contain only alphabetic characters";
                break;
            case 'displaySize':
                newErrors.displaySize = value.trim() ? null : "Display Size should be a numeric value greater than zero";
                break;
            case 'processor':
                newErrors.processor = value.trim() ? null : "Processor is required";
                break;
            case 'frontCamera':
                newErrors.frontCamera = value.trim() && !isNaN(value.trim()) && Number(value.trim()) > 0 && !value.includes('.') ? null : "Front Camera should be a numeric value greater than zero (non-decimal)";
                break;
            case 'rearCamera':
                newErrors.rearCamera = value.trim() && !isNaN(value.trim()) && Number(value.trim()) > 0 && !value.includes('.') ? null : "Rear Camera should be a numeric value greater than zero (non-decimal)";
                break;
            case 'battery':
                newErrors.battery = value.trim() && !isNaN(value.trim()) && !value.includes('.') ? null : "Battery should be a numeric value (non-decimal)";
                break;
            case 'operatingSystem':
                newErrors.operatingSystem = value.trim() ? null : "Operating System is required";
                break;
            case 'color':
                newErrors.color = /^[a-zA-Z]+$/.test(value.trim()) ? null : "Color should contain only alphabetic characters";
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
                newErrors[fieldName] = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`; // Corrected interpolation syntax
            });
            setErrors(newErrors);
            return;
        }
        // Check if there are any errors
        if (Object.values(errors).some(error => error !== null)) {
            // Handle errors
            return;
        }
    
        // If no errors, proceed with submission
        navigate('/inventory');
        console.log("Form submitted successfully:", formData);
    };
    

    return (
        <div>
        <h2>Add Electronic Product</h2>
            <form  onSubmit={handleSubmit} >
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="productTitle" className="form-label">Product Title<span>*</span></label>
                        <input type="text" className="form-control" id="productTitle" name="productTitle" value={formData.productTitle} onChange={handleChange}/>
                        <div className="titleError" style={{ color: 'red' }} data-field="productTitle">
                        {errors.productTitle && <span>{errors.productTitle}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="description" className="form-label">Description<span>*</span></label>
                        <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} rows="3"></textarea>
                        <div className="titleError" style={{ color: 'red' }} data-field="description">
                        {errors.description && <span>{errors.description}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="storage" className="form-label">Storage<span>*</span></label>
                        <input type="number" className="form-control" id="storage" name="storage" value={formData.storage} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="storage">
                        {errors.storage && <span>{errors.storage}</span>}
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="ram" className="form-label">RAM<span>*</span></label>
                        <input type="number" className="form-control" id="ram" name="ram" value={formData.ram} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="ram">
                        {errors.ram && <span>{errors.ram}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="price" className="form-label">Price<span>*</span></label>
                        <input type="number" className="form-control" id="price" name="price" value={formData.price} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="price">
                        {errors.price && <span>{errors.price}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="stockAvailable" className="form-label">Stock Available<span>*</span></label>
                        <input type="number" className="form-control" id="stockAvailable" name="stockAvailable" value={formData.stockAvailable} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="stockAvailable">
                        {errors.stockAvailable && <span>{errors.stockAvailable}</span>}
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="brand" className="form-label">Brand<span>*</span></label>
                        <input type="text" className="form-control" id="brand" name="brand" value={formData.brand} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="brand">
                        {errors.brand && <span>{errors.brand}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="model" className="form-label">Model<span>*</span></label>
                        <input type="text" className="form-control" id="model" name="model" value={formData.model} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="model">
                        {errors.model && <span>{errors.model}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="displayType" className="form-label">Display Type<span>*</span></label>
                        <input type="text" className="form-control" id="displayType" name="displayType" value={formData.displayType} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="displayType">
                        {errors.displayType && <span>{errors.displayType}</span>}
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="displaySize" className="form-label">Display Size<span>*</span></label>
                        <input type="text" className="form-control" id="displaySize" name="displaySize" value={formData.displaySize} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="displaySize">
                        {errors.displaySize && <span>{errors.displaySize}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="processor" className="form-label">Processor<span>*</span></label>
                        <input type="text" className="form-control" id="processor" name="processor" value={formData.processor} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="processor">
                        {errors.processor && <span>{errors.processor}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="frontCamera" className="form-label">Front Camera(MP)<span>*</span></label>
                        <input type="text" className="form-control" id="frontCamera" name="frontCamera" value={formData.frontCamera} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="frontCamera">
                            {errors.frontCamera && <span>{errors.frontCamera}</span>}
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="rearCamera" className="form-label">Rear Camera(MP)<span>*</span></label>
                        <input type="text" className="form-control" id="rearCamera" name="rearCamera" value={formData.rearCamera} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="rearCamera">
                        {errors.rearCamera && <span>{errors.rearCamera}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="battery" className="form-label">Battery(mAh)<span>*</span></label>
                        <input type="text" className="form-control" id="battery" name="battery" value={formData.battery} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="battery">
                        {errors.battery && <span>{errors.battery}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="operatingSystem" className="form-label">Operating System<span>*</span></label>
                        <input type="text" className="form-control" id="operatingSystem" name="operatingSystem" value={formData.operatingSystem} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="operatingSystem">
                        {errors.operatingSystem && <span>{errors.operatingSystem}</span>}
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="color" className="form-label">Color<span>*</span></label>
                        <input type="text" className="form-control" id="color" name="color" value={formData.color} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="color">
                        {errors.color && <span>{errors.color}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="images" className="form-label">Images</label>
                        <input type="file" className="form-control" id="images" name="images" accept="image/*" multiple />
                        <div className="titleError" style={{ color: 'red' }} data-field="images">
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="videos" className="form-label">Videos</label>
                        <input type="file" className="form-control" id="videos" name="videos" accept="video/*" multiple />
                        <div className="titleError" style={{ color: 'red' }} data-field="videos"></div>
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

export default ElectronicProductForm;