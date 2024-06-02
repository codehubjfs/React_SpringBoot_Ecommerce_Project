import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addProduct } from '../slices/productSlice';

const ClothProductForm = ({ subcategory }) => {
    const [formData, setFormData] = useState({
        productTitle: '',
        description: '',
        brand: '',
        model: '',
        supplierId:1,
        material: '',
        sizes: '',
        price: '',
        stock: '',
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
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            subCategory: subcategory
        }));
    }, [subcategory]);

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
                newErrors.productTitle = value.trim() ? null : "Product Title is required";
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
            case 'sizes':
                newErrors.size = value.trim() ? null : "Size is required";
                break;
            case 'price':
                newErrors.price = value.trim() ? (value.trim() <= 0 ? "Price must be a numeric value greater than zero" : null) : "Price is required";
                break;
            case 'stock':
                newErrors.stock = /^[0-9]+$/.test(value) ? null : "Stock should contain only numeric characters";
                break;
            case 'color':
                newErrors.color = value.trim() ? null : "Color is required";
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

        if (emptyFields.length > 0) {
            const newErrors = { ...errors };
            emptyFields.forEach(([fieldName]) => {
                newErrors[fieldName] = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
            });
            setErrors(newErrors);
            return;
        }

        if (Object.values(errors).some(val => val !== null)) {
            return;
        }

        dispatch(addProduct({ category: 'cloth', productData: formData }));
        navigate('/dashboard/products');
    };

    return (
        <div id="sub-category2-form">
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="productTitle" className="form-label">Product Title<span style={{ color: 'red' }}>*</span></label>
                        <input type="text" className="form-control" id="productTitle" name="productTitle" value={formData.productTitle} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="productTitle">{errors.productTitle}</div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="description" className="form-label">Description<span style={{ color: 'red' }}>*</span></label>
                        <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} rows="1" style={{ resize: 'none' }}></textarea>
                        <div className="titleError" style={{ color: 'red' }} data-field="description">{errors.description}</div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="brand" className="form-label">Brand<span style={{ color: 'red' }}>*</span></label>
                        <input type="text" className="form-control" id="brand" name="brand" value={formData.brand} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="brand">{errors.brand}</div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="model" className="form-label">Model<span style={{ color: 'red' }}>*</span></label>
                        <input type="text" className="form-control" id="model" name="model" value={formData.model} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="model">{errors.model}</div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="material" className="form-label">Material<span style={{ color: 'red' }}>*</span></label>
                        <input type="text" className="form-control" id="material" name="material" value={formData.material} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="material">{errors.material}</div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="sizes" className="form-label">Size<span style={{ color: 'red' }}>*</span></label>
                        <input type="text" className="form-control" id="sizes" name="sizes" value={formData.sizes} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="sizes">{errors.sizes}</div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="price" className="form-label">Price<span style={{ color: 'red' }}>*</span></label>
                        <input type="number" className="form-control" id="price" name="price" value={formData.price} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="price">{errors.price}</div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="stock" className="form-label">Stock Available<span style={{ color: 'red' }}>*</span></label>
                        <input type="number" className="form-control" id="stock" name="stock" value={formData.stock} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="stock">
                            {errors.stock && <span>{errors.stock}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="color" className="form-label">Colors<span style={{ color: 'red' }}>*</span></label>
                        <input type="text" className="form-control" id="color" name="color" value={formData.color} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="color">{errors.color}</div>
                    </div>
                </div>
                <div className="row mb-3">
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
                    <div className="col-md-4">
                        <label htmlFor="thumbnail2" className="form-label">Thumbnail 2<span style={{ color: 'red' }}>*</span></label>
                        <input type="text" className="form-control" id="thumbnail2" name="thumbnail2" value={formData.thumbnail2} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="thumbnail2">{errors.thumbnail2}</div>
                    </div>
                </div>
                <div className="row mb-3">
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

export default ClothProductForm;
