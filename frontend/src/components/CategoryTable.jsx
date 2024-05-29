import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../slices/categorySlice';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import $ from 'jquery';
import electronicsImage from '../assets/electronics.jpeg';
import homeAppliancesImage from '../assets/home appliances.jpg';
import furnitureImage from '../assets/furnitures.jpg';
import toysImage from '../assets/toys.jpg';
import beautyImage from '../assets/beauty.jpg';

function CategoryTable() {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.categories);
    const status = useSelector((state) => state.categories.status);
    const error = useSelector((state) => state.categories.error);
    const tableRef = useRef(null);
    const dataTableRef = useRef(null);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCategories());
        }
    }, [status, dispatch]);

    useEffect(() => {
        if (dataTableRef.current) {
            $(tableRef.current).DataTable().destroy();
        }

        dataTableRef.current = $(tableRef.current).DataTable();

        return () => {
            if (dataTableRef.current) {
                $(tableRef.current).DataTable().destroy();
            }
        };
    }, [categories]);

    const handleEditModalOpen = (category) => {
        // Your logic for opening the edit modal
    };

    const handleDelete = (category) => {
        // Your logic for deleting the category
    };

    return (
        <>
            {status === 'loading' && <div>Loading...</div>}
            {status === 'failed' && <div>{error}</div>}
            {status === 'succeeded' && (
                <table id="CategoryTable" ref={tableRef} className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th className='text-center'>ID</th>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Image</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(category => (
                            <tr key={category.categoryId}>
                                <td className='text-center'>{category.categoryId}</td>
                                <td className='text-left'>{category.categoryName}</td>
                                <td><img src={category.categoryImage} className='category-image' alt={category.categoryName} /></td>
                                <td className='text-center'>
                                    <i
                                        className="bi bi-pencil-square"
                                        onClick={() => handleEditModalOpen(category)}
                                        style={{ cursor: 'pointer', marginRight: '10px' }}
                                    ></i>
                                    <i
                                        className="bi bi-trash"
                                        onClick={() => handleDelete(category)}
                                        style={{ cursor: 'pointer' }}
                                    ></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

export default CategoryTable;
