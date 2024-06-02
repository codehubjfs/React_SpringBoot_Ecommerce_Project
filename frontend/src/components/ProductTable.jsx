import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts, deleteProduct } from '../slices/productSlice';
import ElectronicProductFormModal from './ElectronicProductFormModal';
import FurnitureFormModal from './FurnitureFormModal';
import BeautyProductFormModal from './BeautyproductModal';
import ClothFormModal from './ClothFprmModel';

import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Table } from 'react-bootstrap';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import $ from 'jquery';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import { Link } from 'react-router-dom';
// import './ProductTable.css';

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
    const [isClothModal, setIsClothModal] = useState(false);
    const tableRef = useRef(null);
    const dataTableRef = useRef(null);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllProducts());
        }
    }, [status, dispatch]);

    useEffect(() => {
        if (status === 'succeeded' && products.length > 0) {
            if (dataTableRef.current) {
                dataTableRef.current.destroy();
            }
            dataTableRef.current = $(tableRef.current).DataTable();
        }
    }, [status, products]);

    useEffect(() => {
        return () => {
            if (dataTableRef.current) {
                dataTableRef.current.destroy();
            }
        };
    }, []);

    const handleView = (product) => {
        setSelectedProduct(product);
        if (product.category === 'Furniture') {
            setIsFurnitureModal(true);
        } else if (product.category === 'Beauty') {
            setIsBeautyModal(true);
        } else if (product.category === 'Cloth') {
            setIsClothModal(true);
        } else {
            setIsElectronicModal(true);
        }
    };

    const closeModal = () => {
        setIsElectronicModal(false);
        setIsFurnitureModal(false);
        setIsBeautyModal(false);
        setIsClothModal(false);
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
        <Container>
            <div className="col-12 d-flex justify-content-end mb-2">
                <br />
                <Link to="/dashboard/products/addproduct" className="active">
                    <button type="button" className="btn btn-primary" id="addbtn">Add product</button>
                </Link>
            </div>
            <Row>
                <Col lg={16}>
                    <Table ref={tableRef} id="productTable" striped bordered hover>
                        <thead className="bg-dark text-white text-center bold-header">
                            <tr>
                                <th className="text-center" style={{ backgroundColor: '#343a40', color: '#fff' }}>ID</th>
                                <th className="text-center" style={{ backgroundColor: '#343a40', color: '#fff' }}>Title</th>
                                <th className="text-center" style={{ backgroundColor: '#343a40', color: '#fff' }}>Category</th>
                                <th className="text-center" style={{ backgroundColor: '#343a40', color: '#fff' }}>Sub-Category</th>
                                <th className="text-center" style={{ backgroundColor: '#343a40', color: '#fff' }}>Price</th>
                                <th className="text-center" style={{ backgroundColor: '#343a40', color: '#fff' }}>Stock</th>
                                <th className="text-center" style={{ backgroundColor: '#343a40', color: '#fff' }}>Brand</th>
                                <th className="text-center" style={{ backgroundColor: '#343a40', color: '#fff' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.productId}>
                                    <td>{product.productId}</td>
                                    <td>{product.productTitle}</td>
                                    <td>{product.category}</td>
                                    <td>{product.subCategory}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.brand}</td>
                                    <td style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-around' }}>
                                        <i className="fas fa-eye" onClick={() => handleView(product)}></i>
                                        <i className="fas fa-trash-alt" onClick={() => handleDelete(product.productId)}></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

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
             {isClothModal && selectedProduct && (
                <ClothFormModal
                    initialFormData={selectedProduct}
                    closeModal={closeModal}
                />
            )}
        </Container>
    );
};

export default ProductTable;
