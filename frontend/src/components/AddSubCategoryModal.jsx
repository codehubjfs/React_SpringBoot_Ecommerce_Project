import React, { useState ,useEffect} from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch ,useSelector} from 'react-redux';
import { addSubcategory } from '../slices/subCategorySlice';
import { fetchCategories } from '../slices/categorySlice';

const AddSubCategoryModal = ({ onClose }) => {
    const [formData, setFormData] = useState({
        categoryId: '',
        subCategoryName: '',
        subCategoryImage: ''
    });
    const categories = useSelector((state) => state.categories.categories);
    const [errors, setErrors] = useState({});
    const [show, setShow] = useState(true); // State to control modal visibility
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [ dispatch]);
    const handleClose = () => {
        setShow(false);
        onClose(); // Use onClose instead of closeModal
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
            case 'categoryId':
                newErrors.categoryId = value.trim() ? null : "category is required";
                break;
            case 'subCategoryName':
                newErrors.subCategoryName = /^[A-Za-z\s]+$/.test(value) ? null : "Invalid subcategory name";
                break;
            case 'subCategoryImage':
                newErrors.subCategoryImage = value.trim() ? null : "category image url is required";
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
        console.log(formData);
        dispatch(addSubcategory(formData));
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title style={{ textAlign: 'center' }}>Add SubCategory</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                        <label htmlFor="categoryId" className="form-label">Category</label>
                        <select className="form-select" id="categoryId" name="categoryId" value={formData.categoryId} onChange={handleChange}>
                            <option value="">Select a category</option>
                            {categories.map(category => (
                                <option key={category.categoryId} value={category.categoryId}>{category.categoryName}</option>
                            ))}
                        </select>
                        <div className="titleError" style={{ color: 'red' }} data-field="categoryId">{errors.categoryId}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="subCategoryName" className="form-label">SubCategory Name</label>
                        <input type="text" className="form-control" id="subCategoryName" name="subCategoryName" value={formData.subCategoryName} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="subCategoryName">{errors.subCategoryName}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="subCategoryImage" className="form-label">SubCategory Image URL</label>
                        <input type="text" className="form-control" id="subCategoryImage" name="subCategoryImage" value={formData.subCategoryImage} onChange={handleChange} />
                        <div className="titleError" style={{ color: 'red' }} data-field="subCategoryImage">{errors.subCategoryImage}</div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>&nbsp;
                        <button type="submit" className="btn btn-primary">Add SubCategory</button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default AddSubCategoryModal;
