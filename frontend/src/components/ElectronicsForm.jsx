import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../slices/productSlice';

const ElectronicProductForm = ({ subcategory }) => {
    const dispatch = useDispatch();
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
        mainImage: '',
        thumbnail1: '',
        thumbnail2: '',
        thumbnail3: '',
        thumbnail4: '',
        video: '',
        subCategory: subcategory
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          subCategory: subcategory,
        }));
      }, [subcategory]);

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
                    newErrors.frontCamera = value.trim() === "null" || /^[0-9 mp+]+$/i.test(value.trim()) ? null : "Rear Camera should contain numeric characters, 'm', 'p', spaces, or '+'";
                    break;
            case 'rearCamera':
                    newErrors.rearCamera = value.trim() === "null" || /^[0-9 mp+]+$/i.test(value.trim()) ? null : "Rear Camera should contain numeric characters, 'm', 'p', spaces, or '+'";
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
            case 'mainImage':
            case 'thumbnail1':
            case 'thumbnail2':
            case 'thumbnail3':
            case 'thumbnail4':
            case 'video':
                newErrors[name] = value.trim() ? null : `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
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
        // Check if there are any errors
        if (Object.values(errors).some(error => error !== null)) {
            // Handle errors
            return;
        }
        dispatch(addProduct({ category: 'electronic', productData: formData }));
        // If no errors, proceed with submission
        navigate('/dashboard/products');
        console.log("Form submitted successfully:", formData);
    };

    return (
        <div>
        <h2>Add Electronic Product</h2>
            <form  onSubmit={handleSubmit} >
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="productTitle" className="form-label">Product Title <span style={{color:'red'}}>*</span></label>
                        <input type="text" className="form-control" id="productTitle" name="productTitle" value={formData.productTitle} onChange={handleChange}/>
                        <div className="titleError" style={{ color: 'red' }} data-field="productTitle">
                        {errors.productTitle && <span>{errors.productTitle}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="description" className="form-label">Description<span style={{color:'red'}}>*</span></label>
                        <textarea className="form-control" id="description" name="description" value={formData.description} 
                        onChange={handleChange} rows="1" style={{ resize: 'none' }}></textarea>

                        <div className="titleError" style={{ color: 'red' }} data-field="description">
                        {errors.description && <span>{errors.description}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="storage" className="form-label">Storage<span style={{color:'red'}}>*</span></label>
                        <input type="number" className="form-control" id="storage" name="storage" value={formData.storage} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="storage">
                        {errors.storage && <span>{errors.storage}</span>}
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="ram" className="form-label">RAM<span style={{color:'red'}}>*</span></label>
                        <input type="number" className="form-control" id="ram" name="ram" value={formData.ram} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="ram">
                        {errors.ram && <span>{errors.ram}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="price" className="form-label">Price<span style={{color:'red'}}>*</span></label>
                        <input type="number" className="form-control" id="price" name="price" value={formData.price} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="price">
                        {errors.price && <span>{errors.price}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="stockAvailable" className="form-label">Stock Available<span style={{color:'red'}}>*</span></label>
                        <input type="number" className="form-control" id="stockAvailable" name="stockAvailable" value={formData.stockAvailable} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="stockAvailable">
                        {errors.stockAvailable && <span>{errors.stockAvailable}</span>}
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="brand" className="form-label">Brand<span style={{color:'red'}}>*</span></label>
                        <input type="text" className="form-control" id="brand" name="brand" value={formData.brand} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="brand">
                        {errors.brand && <span>{errors.brand}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="model" className="form-label">Model<span style={{color:'red'}}>*</span></label>
                        <input type="text" className="form-control" id="model" name="model" value={formData.model} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="model">
                        {errors.model && <span>{errors.model}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="displayType" className="form-label">Display Type<span style={{color:'red'}}>*</span></label>
                        <input type="text" className="form-control" id="displayType" name="displayType" value={formData.displayType} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="displayType">
                        {errors.displayType && <span>{errors.displayType}</span>}
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="displaySize" className="form-label">Display Size<span style={{color:'red'}}>*</span></label>
                        <input type="text" className="form-control" id="displaySize" name="displaySize" value={formData.displaySize} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="displaySize">
                        {errors.displaySize && <span>{errors.displaySize}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="processor" className="form-label">Processor<span style={{color:'red'}}>*</span></label>
                        <input type="text" className="form-control" id="processor" name="processor" value={formData.processor} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="processor">
                        {errors.processor && <span>{errors.processor}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="frontCamera" className="form-label">Front Camera(MP)<span style={{color:'red'}}>*</span></label>
                        <input type="text" className="form-control" id="frontCamera" name="frontCamera" value={formData.frontCamera} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="frontCamera">
                            {errors.frontCamera && <span>{errors.frontCamera}</span>}
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="rearCamera" className="form-label">Rear Camera(MP)<span style={{color:'red'}}>*</span></label>
                        <input type="text" className="form-control" id="rearCamera" name="rearCamera" value={formData.rearCamera} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="rearCamera">
                        {errors.rearCamera && <span>{errors.rearCamera}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="battery" className="form-label">Battery(mAh)<span style={{color:'red'}}>*</span></label>
                        <input type="text" className="form-control" id="battery" name="battery" value={formData.battery} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="battery">
                        {errors.battery && <span>{errors.battery}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="operatingSystem" className="form-label">Operating System<span style={{color:'red'}}>*</span></label>
                        <input type="text" className="form-control" id="operatingSystem" name="operatingSystem" value={formData.operatingSystem} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="operatingSystem">
                        {errors.operatingSystem && <span>{errors.operatingSystem}</span>}
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="color" className="form-label">Color<span style={{color:'red'}}>*</span></label>
                        <input type="text" className="form-control" id="color" name="color" value={formData.color} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="color">
                        {errors.color && <span>{errors.color}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                                <label htmlFor="mainImage" className="form-label">Main Image<span style={{ color: 'red' }}>*</span></label>
                                <input type="text" className="form-control" id="mainImage" name="mainImage" value={formData.mainImage} onChange={handleChange} />
                                <div className="titleError" style={{ color: 'red' }} data-field="mainImage">{errors.mainImage}</div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="thumbnail1" className="form-label">Thumbnail 1<span style={{ color: 'red' }}>*</span></label>
                                <input type="text" className="form-control" id="thumbnail1" name="thumbnail1" value={formData.thumbnail1} onChange={handleChange} />
                                <div className="titleError" style={{ color: 'red' }} data-field="thumbnail1">{errors.thumbnail1}</div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <label htmlFor="thumbnail2" className="form-label">Thumbnail 2<span style={{ color: 'red' }}>*</span></label>
                                <input type="text" className="form-control" id="thumbnail2" name="thumbnail2" value={formData.thumbnail2} onChange={handleChange} />
                                <div className="titleError" style={{ color: 'red' }} data-field="thumbnail2">{errors.thumbnail2}</div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="thumbnail3" className="form-label">Thumbnail 3<span style={{ color: 'red' }}>*</span></label>
                                <input type="text" className="form-control" id="thumbnail3" name="thumbnail3" value={formData.thumbnail3} onChange={handleChange} />
                                <div className="titleError" style={{ color: 'red' }} data-field="thumbnail3">{errors.thumbnail3}</div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="thumbnail4" className="form-label">Thumbnail 4<span style={{ color: 'red' }}>*</span></label>
                                <input type="text" className="form-control" id="thumbnail4" name="thumbnail4" value={formData.thumbnail4} onChange={handleChange} />
                                <div className="titleError" style={{ color: 'red' }} data-field="thumbnail4">{errors.thumbnail4}</div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <label htmlFor="video" className="form-label">Video<span style={{ color: 'red' }}>*</span></label>
                                <input type="text" className="form-control" id="video" name="video" value={formData.video} onChange={handleChange} />
                                <div className="titleError" style={{ color: 'red' }} data-field="video">{errors.video}</div>
                            </div>
                        </div>
                <div className="d-flex justify-content-end">
                <Link to="/dashboard/products" className="active"><button type="button" className="btn btn-secondary" >Cancel</button></Link>&nbsp;
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    );
};

export default ElectronicProductForm;