import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts, deleteProduct } from '../slices/productSlice';
import ElectronicProductFormModal from './ElectronicProductFormModal';
import FurnitureFormModal from './FurnitureFormModal';
import BeautyProductFormModal from '../components/BeautyproductModal';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Table } from 'react-bootstrap';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import $ from 'jquery';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import { Link } from 'react-router-dom';

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

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllProducts());
        }
    }, [status, dispatch]);

    
    useEffect(() => {
        if (status === 'succeeded') {
            const table = $('#productTable').DataTable({
                dom: '<"row justify-content-end"<"col-sm-12 col-md-6 text-right"l><"col-sm-12 col-md-6 text-right"f>>' +
                     '<"row"<"col-sm-12"tr>>' +
                     '<"row justify-content-end"<"col-sm-12 col-md-6 text-right"i><"col-sm-12 col-md-6 text-right"p>>',
                destroy: true,
            });

            return () => {
                table.destroy(true);
            };
        }
    }, [products, status]);

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
        <Container>
            <div className="col-12 d-flex justify-content-end mb-2">
                <Link to="/dashboard/products/addproduct" className="active">
                    <button type="button" className="btn btn-primary" id="addbtn">Add product</button>
                </Link>
            </div>
            <Row>
                <Col lg={12}>
                    <Table id="productTable" striped bordered hover>
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
        </Container>
    );
};

export default ProductTable;
