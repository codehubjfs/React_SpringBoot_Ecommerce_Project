import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch ,useSelector} from 'react-redux';
import { updateSubcategory } from '../slices/subCategorySlice';
import { fetchCategories } from '../slices/categorySlice';

const EditSubCategoryModal = ({ subcategoryData, onClose }) => {
    const [subcategory, setSubcategory] = useState(subcategoryData);
    const [errors, setErrors] = useState({});
    const [show, setShow] = useState(true); // State to control modal visibility
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.categories);

    useEffect(() => {
        setSubcategory(subcategoryData);
        dispatch(fetchCategories());
    }, [subcategoryData, dispatch]);

    const handleClose = () => {
        setShow(false);
        onClose(); // Use onClose to close the modal
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSubcategory({
            ...subcategory,
            [name]: value
        });
        validateField(name, value);
    };

    const validateField = (name, value) => {
        // Add validation logic if needed
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add validation logic if needed

        // Dispatch action to edit subcategory
        dispatch(updateSubcategory(subcategory));
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title style={{ textAlign: 'center' }}>Edit SubCategory</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="categoryId" className="form-label">Category</label>
                    <select className="form-select" id="categoryId" name="categoryId" value={subcategory.categoryId}>
                        <option value="" disabled>Select a category</option>
                        {categories.map(category => (
                            <option key={category.categoryId} value={category.categoryId} disabled={subcategory.categoryId === category.categoryId}>
                                {category.categoryName}
                            </option>
                        ))}
                    </select>
                </div>

                    <div className="mb-3">
                        <label htmlFor="subCategoryName" className="form-label">SubCategory Name</label>
                        <input type="text" className="form-control" id="subCategoryName" name="subCategoryName" value={subcategory.subCategoryName} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="subCategoryImage" className="form-label">SubCategory Image URL</label>
                        <input type="text" className="form-control" id="subCategoryImage" name="subCategoryImage" value={subcategory.subCategoryImage} onChange={handleChange} />
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>&nbsp;
                        <button type="submit" className="btn btn-primary">Save Changes</button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default EditSubCategoryModal;