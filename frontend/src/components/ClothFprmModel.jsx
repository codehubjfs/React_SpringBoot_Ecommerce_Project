import React, { useState,useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch} from 'react-redux';
// import { updateFurnitureProduct } from '../slices/furnitureProductSlice';

const ClothFormModal = ({ initialFormData, closeModal }) => {
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [show, setShow] = useState(true); // State to control modal visibility
    const dispatch = useDispatch();

    useEffect(() => {
        setFormData(initialFormData);
    }, [initialFormData]);

    const handleClose = () => {
        setShow(false);
        closeModal(); // Call the closeModal function passed from the parent component
    };

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
                newErrors.sizes = value.trim() ? null : "Dimension is required";
                break;
            case 'price':
                newErrors.price = value.trim() ? (value.trim() <= 0 ? "Price must be a numeric value greater than zero" : null) : "Price is required";
                break;
            case 'stock':
                newErrors.stock = value.trim() ? (value.trim() < 0 ? "Invalid input" : null) : "Stock available is required";
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
        //  dispatch(updateFurnitureProduct(formData));
        // Close the modal after successful submission
        closeModal();
    };

    return (
        <Modal show={show} onHide={handleClose} size="lg"> {/* Set size to "lg" for a large modal */}
            <Modal.Header closeButton>
                <Modal.Title style={{ textAlign: 'center' }}>View and Edit Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <h2 style={{ textAlign: 'center' }}>Furniture</h2>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <label htmlFor="productTitle" className="form-label">Product Title<span style={{ color: 'red' }}>*</span></label>
                                <input type="text" className="form-control" id="productTitle" name="productTitle" value={formData.productTitle} onChange={handleChange} />
                                <div className="titleError" style={{ color: 'red' }} data-field="productTitle">{errors.productTitle}</div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="product-description" className="form-label">Description<span style={{ color: 'red' }}>*</span></label>
                                <textarea className="form-control fixed-textarea" id="product-description" name="description" value={formData.description} onChange={handleChange} rows="1" style={{ resize: 'none' }}></textarea>
                                <div className="titleError" style={{ color: 'red' }} data-field="description">{errors.description}</div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="product-brand" className="form-label">Brand<span style={{ color: 'red' }}>*</span></label>
                                <input type="text" className="form-control" id="product-brand" name="brand" value={formData.brand} onChange={handleChange} />
                                <div className="titleError" style={{ color: 'red' }} data-field="brand">{errors.brand}</div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <label htmlFor="price" className="form-label">Price<span style={{color:'red'}}>*</span></label>
                                <input type="number" className="form-control" id="price" name="price" value={formData.price} onChange={handleChange} />
                                <div className="titleError" style={{ color: 'red' }} data-field="price">
                                {errors.price && <span>{errors.price}</span>}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="stock" className="form-label">Stock Available<span style={{color:'red'}}>*</span></label>
                                <input type="number" className="form-control" id="stock" name="stock" value={formData.stock} onChange={handleChange} />
                                <div className="titleError" style={{ color: 'red' }} data-field="stock">
                                {errors.stock && <span>{errors.stock}</span>}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="product-model" className="form-label">Model<span style={{ color: 'red' }}>*</span></label>
                                <input type="text" className="form-control" id="product-model" name="model" value={formData.model} onChange={handleChange} />
                                <div className="titleError" style={{ color: 'red' }} data-field="model">{errors.model}</div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <label htmlFor="product-material" className="form-label">Material<span style={{ color: 'red' }}>*</span></label>
                                <input type="text" className="form-control" id="product-material" name="material" value={formData.material} onChange={handleChange} />
                                <div className="titleError" style={{ color: 'red' }} data-field="material">{errors.material}</div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="product-sizes" className="form-label">Size<span style={{ color: 'red' }}>*</span></label>
                                <input type="text" className="form-control" id="product-sizes" name="sizes" value={formData.sizes} onChange={handleChange} />
                                <div className="titleError" style={{ color: 'red' }} data-field="sizes">{errors.sizes}</div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="product-price" className="form-label">Price<span style={{ color: 'red' }}>*</span></label>
                                <input type="number" className="form-control" id="product-price" name="price" value={formData.price} onChange={handleChange} />
                                <div className="titleError" style={{ color: 'red' }} data-field="price">{errors.price}</div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <label htmlFor="product-color" className="form-label">Colors<span style={{ color: 'red' }}>*</span></label>
                                <input type="text" className="form-control" id="product-color" name="color" value={formData.color} onChange={handleChange} />
                                <div className="titleError" style={{ color: 'red' }} data-field="color">{errors.color}</div>
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
                            <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>&nbsp;
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ClothFormModal;
