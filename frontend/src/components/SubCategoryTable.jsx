import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubcategories, addSubcategory, deleteSubcategory } from '../slices/subCategorySlice';
import AddSubCategoryModal from './AddSubCategoryModel';
import EditSubCategoryModal from './EditSubCategory';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import $ from 'jquery';

function SubCategoryTable() {
    const dispatch = useDispatch();
    const subcategories = useSelector((state) => state.subcategories.subcategories);
    const subcategoriesStatus = useSelector((state) => state.subcategories.status);
    const tableRef = useRef(null);
    const dataTableRef = useRef(null);

    useEffect(() => {
        if (subcategoriesStatus === 'idle') {
            dispatch(fetchSubcategories());
        }
    }, [dispatch, subcategoriesStatus]);

    useEffect(() => {
        if (subcategoriesStatus === 'succeeded' && subcategories.length < 0) {
            if (dataTableRef.current) {
                dataTableRef.current.destroy();
            }
            dataTableRef.current = $(tableRef.current).DataTable();
        }
    }, [subcategoriesStatus, subcategories]);

    useEffect(() => {
        return () => {
            if (dataTableRef.current) {
                dataTableRef.current.destroy();
            }
        };
    }, []);

    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleAddModalOpen = () => {
        setIsAddModalOpen(true);
    };

    const handleEditModalOpen = (subcategory) => {
        setSelectedSubcategory(subcategory);
        setIsEditModalOpen(true);
    };

    const handleSaveAddModal = (subcategory) => {
        dispatch(addSubcategory(subcategory));
        setIsAddModalOpen(false);
    };

    const handleCloseModals = () => {
        setIsAddModalOpen(false);
        setIsEditModalOpen(false);
    };

    const handleDelete = (subCategory) => {
        dispatch(deleteSubcategory(subCategory));
    };

    return (
        <>
            <br />
            <div className="d-flex justify-content-end mb-3">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleAddModalOpen}
                >
                    Add SubCategory
                </button>
            </div>

            <table id="subcategoryTable" ref={tableRef} className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center', backgroundColor: '#343a40', color: '#fff' }}>ID</th>
                        <th style={{ textAlign: 'center', backgroundColor: '#343a40', color: '#fff' }}>Category ID</th>
                        <th style={{ textAlign: 'center', backgroundColor: '#343a40', color: '#fff' }}>Sub-Category</th>
                        <th style={{ textAlign: 'center', backgroundColor: '#343a40', color: '#fff' }}>Image</th>
                        <th style={{ textAlign: 'center', backgroundColor: '#343a40', color: '#fff' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {subcategories.map(subcategory => (
                        <tr key={subcategory.subCategoryId}>
                            <td style={{ textAlign: 'center'}}>{subcategory.subCategoryId}</td>
                            <td style={{ textAlign: 'center'}}>{subcategory.categoryId}</td>
                            <td>{subcategory.subCategoryName}</td>
                            <td><img src={subcategory.subCategoryImage} className='category-image' alt={subcategory.subCategoryName} /></td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-edit"
                                    onClick={() => handleEditModalOpen(subcategory)}
                                >
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-delete"
                                    onClick={() => handleDelete(subcategory)}
                                >
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isAddModalOpen && (
                <AddSubCategoryModal onSave={handleSaveAddModal} onClose={handleCloseModals} />
            )}
            {isEditModalOpen && (
                <EditSubCategoryModal
                    subcategoryData={selectedSubcategory}
                    onClose={handleCloseModals}
                />
            )}
        </>
    );
}

export default SubCategoryTable;
