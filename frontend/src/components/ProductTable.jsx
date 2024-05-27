import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts, deleteProduct } from '../slices/productSlice';
import ElectronicProductFormModal from './ElectronicProductFormModal';
import FurnitureFormModal from './FurnitureFormModal';
import BeautyProductFormModal from './BeautyproductModal';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';

const ProductTable = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);
    const navigate = useNavigate();
    const tableRef = useRef(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isElectronicModal, setIsElectronicModal] = useState(false);
    const [isFurnitureModal, setIsFurnitureModal] = useState(false);
    const [isBeautyModal, setIsBeautyModal] = useState(false);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllProducts());
        }
    }, [status, dispatch]);

    useEffect(() => {
        if (products.length > 0) {
            if ($.fn.DataTable.isDataTable('#productTable')) {
                $('#productTable').DataTable().destroy();
            }
            $(tableRef.current).DataTable();
        }
    }, [products]);

    const handleView = (product) => {
        setSelectedProduct(product);
        if (product.category === 'Furniture') {
            setIsFurnitureModal(true);
        } else if (product.category === 'Beauty') {
            setIsBeautyModal(true);
        } else {
            setIsElectronicModal(true);
        }
    };

    const closeModal = () => {
        setIsElectronicModal(false);
        setIsFurnitureModal(false);
        setIsBeautyModal(false);
    };

    const handleDelete = (productId) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this product?");
        if (isConfirmed) {
            dispatch(deleteProduct(productId));
            navigate('/dashboard/products');
        }
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <table
                id="productTable"
                className="table table-striped table-bordered"
                style={{ width: '100%' }}
                ref={tableRef}
            >
                <thead className="bg-dark text-white text-center bold-header">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Brand</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.productId}>
                            <td>{index + 1}</td>
                            <td>{product.productTitle}</td>
                            <td>{product.category}</td>
                            <td>{product.subCategory}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.brand}</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-view"
                                    onClick={() => handleView(product)}
                                >
                                    <i className="bi bi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-delete"
                                    onClick={() => handleDelete(product.productId)}
                                >
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isElectronicModal && selectedProduct && (
                <ElectronicProductFormModal
                    initialFormData={selectedProduct}
                    closeModal={closeModal}
                />
            )}
            {isFurnitureModal && selectedProduct && (
                <FurnitureFormModal
                    initialFormData={selectedProduct}
                    closeModal={closeModal}
                />
            )}
            {isBeautyModal && selectedProduct && (
                <BeautyProductFormModal
                    initialFormData={selectedProduct}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
};

export default ProductTable;