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
                // Add validation logic for categoryId if needed
                break;
            case 'subCategoryName':
                // Add validation logic for subCategoryName if needed
                break;
            case 'subCategoryImage':
                // Add validation logic for subCategoryImage if needed
                break;
            default:
                break;
        }
        setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add validation logic for all fields here if needed

        // Dispatch action to add subcategory
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
                    </div>
                    <div className="mb-3">
                        <label htmlFor="subCategoryName" className="form-label">SubCategory Name</label>
                        <input type="text" className="form-control" id="subCategoryName" name="subCategoryName" value={formData.subCategoryName} onChange={handleChange} />
                        {/* Display error message for subCategoryName if any */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="subCategoryImage" className="form-label">SubCategory Image URL</label>
                        <input type="text" className="form-control" id="subCategoryImage" name="subCategoryImage" value={formData.subCategoryImage} onChange={handleChange} />
                        {/* Display error message for subCategoryImage if any */}
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