import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts, deleteProduct } from '../../slices/productSlice';
import ElectronicProductFormModal from '../../components/ElectronicProductFormModal';
import FurnitureFormModal from '../../components/FurnitureFormModal';
import BeautyProductFormModal from '../../components/BeautyproductModal';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import $ from 'jquery';
import { useNavigate ,Link} from 'react-router-dom';

function InventoryManagement() {
    // Dummy data for products
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);
    const navigate = useNavigate();
    const tableRef = useRef(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedModal, setSelectedModal] = useState(null);

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

    const handleView = (product, modal) => {
        setSelectedProduct(product);
        setSelectedModal(modal);
    };

    const closeModal = () => {
        setSelectedModal(null);
    };

    const handleDelete = (productId) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this product?");
        if (isConfirmed) {
            // Update local state of products by filtering out the deleted product
            const updatedProducts = products.filter(product => product.productId !== productId);
            dispatch({ type: 'products/productsUpdated', payload: updatedProducts });
            // Dispatch deleteProduct action to delete the product from the server
            dispatch(deleteProduct(productId));
        }
    };
    
    useEffect(() => {
        // Check if deletion status has changed to 'succeeded'
        if (status === 'succeeded') {
            navigate('/inventory');
        }
    }, [status, navigate]);
    
    
    
    

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div style={{marginTop:'50px'}}>
            <div style={{ textAlign: 'right' }}>
                    <Link to="/supplieraddproduct" className="active">
                        <button type="button" className="btn btn-primary" id="addbtn">Add product</button>
                    </Link>
                </div>
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
                                    onClick={() => handleView(product, product.category)}
                                     style={{backgroundColor:'gray',color:'black'}}
                                >
                                    <i className="bi bi-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-delete"
                                    onClick={() => handleDelete(product.productId)}
                                    style={{ backgroundColor:'gray',  marginLeft:'5px'}}

                                >
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedModal === 'Electronic' && selectedProduct && (
                <ElectronicProductFormModal
                    initialFormData={selectedProduct}
                    closeModal={closeModal}
                />
            )}
            {selectedModal === 'Furniture' && selectedProduct && (
                <FurnitureFormModal
                    initialFormData={selectedProduct}
                    closeModal={closeModal}
                />
            )}
            {selectedModal === 'Beauty' && selectedProduct && (
                <BeautyProductFormModal
                    initialFormData={selectedProduct}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
};

export default InventoryManagement;