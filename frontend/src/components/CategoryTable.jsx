import React from 'react';
import '../App.css';
import { useState,useEffect } from 'react';
import electronicsImage from '../assets/electronics.jpeg';
import homeAppliancesImage from '../assets/home appliances.jpg';
import furnitureImage from '../assets/furnitures.jpg';
import toysImage from '../assets/toys.jpg';
import beautyImage from '../assets/beauty.jpg';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import $ from 'jquery';


function CategoryTable(){
    useEffect(() => {
        $(document).ready(() => {
            $('#CategoryTable').DataTable();
        });
    }, []);
    // Sample data
    const categoryData = [
        { id: 1, name: 'Electronics', imageSrc: electronicsImage },
        { id: 2, name: 'Home Appliances', imageSrc: homeAppliancesImage },
        { id: 3, name: 'Furniture', imageSrc: furnitureImage },
        { id: 4, name: 'Toys', imageSrc: toysImage },
        { id: 5, name: 'Beauty', imageSrc: beautyImage }
        // Add more category data objects as needed
    ];

       
    return (
        <>
        <table id="CategoryTable" className="table table-striped table-bordered" >
            <thead>
                <tr>
                    <th className='text-center'>ID</th>
                    <th className='text-center'>Name</th>
                    <th className='text-center'>Image</th>
                    <th className='text-center'>Action</th>
                </tr>
            </thead>
            <tbody>
                {categoryData.map(category => (
                    <tr key={category.id}>
                        <td className='text-center'>{category.id}</td>
                        <td className='text-left'>{category.name}</td>
                        <td><img src={category.imageSrc} className='category-image' alt={category.name} /></td>
                        <td className='text-center'>
                        <button type="button" className="btn btn-edit" data-bs-toggle="modal" data-bs-target="#editCategoryModal">
                            <i className="bi bi-pencil-square"></i>
                        </button>

                        <button className="btn btn-delete">
                            <i className="bi bi-trash"></i>
                        </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
};

export default CategoryTable;
