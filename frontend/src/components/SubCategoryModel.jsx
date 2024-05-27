import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../slices/categorySlice';

const SubCategoryModal = ({ subcategoryData, onSave }) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.categories);

    const [subcategory, setSubcategory] = useState({
        subCategoryId: null,
        categoryId: '',
        subCategoryName: '',
        subCategoryImage: ''
    });

    useEffect(() => {
        dispatch(fetchCategories());
        if (subcategoryData) {
            setSubcategory(subcategoryData);
        } else {
            setSubcategory({
                subCategoryId: null,
                categoryId: '',
                subCategoryName: '',
                subCategoryImage: ''
            });
        }
    }, [subcategoryData, dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSubcategory({ ...subcategory, [name]: value });
    };

    const handleSave = () => {
        onSave(subcategory);
        window.$('#SubCategoryModal').modal('hide'); // Hide the modal after saving
    };

    return (
        <div className="modal fade" id="SubCategoryModal" tabIndex="-1" aria-labelledby="SubCategoryModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="SubCategoryModalLabel">
                            {subcategory.subCategoryId ? 'Edit SubCategory' : 'Add SubCategory'}
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {subcategory.subCategoryId ? (
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Category</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="category"
                                    name="category"
                                    value={subcategory.categoryName || ''}
                                    readOnly
                                />
                            </div>
                        ) : (
                            <div className="mb-3">
                                <label htmlFor="categoryId" className="form-label">Category</label>
                                <select
                                    className="form-select"
                                    id="categoryId"
                                    name="categoryId"
                                    value={subcategory.categoryId}
                                    onChange={handleChange}
                                >
                                    <option value="">Select a category</option>
                                    {categories.map((category) => (
                                        <option key={category.categoryId} value={category.categoryId}>
                                            {category.categoryName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                        <div className="mb-3">
                            <label htmlFor="subCategoryName" className="form-label">SubCategory Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="subCategoryName"
                                name="subCategoryName"
                                value={subcategory.subCategoryName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subCategoryImage" className="form-label">SubCategory Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                id="subCategoryImage"
                                name="subCategoryImage"
                                value={subcategory.subCategoryImage}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubCategoryModal;