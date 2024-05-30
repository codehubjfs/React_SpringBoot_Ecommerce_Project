import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts, deleteProduct } from '../slices/productSlice';
import ElectronicProductFormModal from './ElectronicProductFormModal';
import FurnitureFormModal from './FurnitureFormModal';
import BeautyProductFormModal from './BeautyproductModal';
import { useNavigate } from 'react-router-dom';

const ProductTable = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);
    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isElectronicModal, setIsElectronicModal] = useState(false);
    const [isFurnitureModal, setIsFurnitureModal] = useState(false);
    const [isBeautyModal, setIsBeautyModal] = useState(false);
    const [sortConfig, setSortConfig] = useState({ key: 'productId', direction: 'ascending' });

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllProducts());
        }
    }, [status, dispatch]);

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

    const sortProducts = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const sortedProducts = React.useMemo(() => {
        let sortableProducts = [...products];
        if (sortConfig !== null) {
            sortableProducts.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableProducts;
    }, [products, sortConfig]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <table className="table table-striped table-bordered">
                <thead className="bg-dark text-white text-center bold-header">
                    <tr>
                        <th onClick={() => sortProducts('productId')}>ID</th>
                        <th onClick={() => sortProducts('productTitle')}>Title</th>
                        <th onClick={() => sortProducts('category')}>Category</th>
                        <th onClick={() => sortProducts('subCategory')}>Sub-Category</th>
                        <th onClick={() => sortProducts('price')}>Price</th>
                        <th onClick={() => sortProducts('stock')}>Stock</th>
                        <th onClick={() => sortProducts('brand')}>Brand</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedProducts.map((product, index) => (
                        <tr key={product.productId}>
                            <td>{index + 1}</td>
                            <td>{product.productTitle}</td>
                            <td>{product.category}</td>
                            <td>{product.subCategory}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.brand}</td>
                            <td style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-around' }}>
                              
                                    <i className="bi bi-eye" onClick={() => handleView(product)}></i>
                                    <i className="bi bi-trash" onClick={() => handleDelete(product.productId)}></i>
                               
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