import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchActiveSellers, fetchSuspendedSellers, suspendSeller, deactivateSeller, setSelectedSeller, activateSeller } from '../slices/sellerSlices';
import ViewSellerModal from './ViewSellerModal';

function Breadcrumb() {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb py-3 px-3">
                <li className="breadcrumb-item inactive">Admin</li>
                <li className="breadcrumb-item active" aria-current="page">
                    <Link to="/dashboard/seller" style={{ textDecoration: 'none' }}>Seller</Link>
                </li>
                <li className="breadcrumb-item inactive" aria-current="page">Seller Details</li>
            </ol>
        </nav>
    );
}

const SellerDetails = () => {
    const dispatch = useDispatch();
    const { activeSellers, suspendedSellers, status, error } = useSelector((state) => state.sellers);

    const [viewModalShow, setViewModalShow] = useState(false);

    useEffect(() => {
        dispatch(fetchActiveSellers());
        dispatch(fetchSuspendedSellers());
    }, [dispatch]);

    const handleView = (seller) => {
        dispatch(setSelectedSeller(seller));
        setViewModalShow(true);
    };

    const handleSuspend = (sellerId) => {
        dispatch(suspendSeller(sellerId)).then(() => {
            dispatch(fetchActiveSellers());
            dispatch(fetchSuspendedSellers());
        }).catch(error => console.error('Error suspending seller:', error));
    };

    const handleDeactivate = (sellerId) => {
        dispatch(deactivateSeller(sellerId)).then(() => {
            dispatch(fetchActiveSellers());
            dispatch(fetchSuspendedSellers());
        }).catch(error => console.error('Error deactivating seller:', error));
    };

    const handleActivate = (sellerId) => {
        dispatch(activateSeller(sellerId)).then(() => {
            dispatch(fetchActiveSellers());
            dispatch(fetchSuspendedSellers());
        }).catch(error => console.error('Error activating seller:', error));
    };

    return (
        <>
            <br />
            <Breadcrumb />
            <div className="container mt-5">
                <h4 className="fw-bold mb-4">Seller Details</h4>

                {status === 'succeeded' && (
                    <>
                        <h5 className="fw-bold mb-3">Active Sellers</h5>
                        <Table striped bordered hover>
                            <thead className="bg-secondary text-white" style={{ backgroundColor: 'black' }}>
                                <tr className="text-center">
                                    <th>#</th>
                                    <th>Seller Name</th>
                                    <th>Email</th>
                                    <th>Phone No</th>
                                    <th>Store Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activeSellers.map((seller, index) => (
                                    <tr className="text-center" key={seller.id}>
                                        <td>{index + 1}</td>
                                        <td>{seller.fullName}</td>
                                        <td>{seller.email}</td>
                                        <td>{seller.mobileNumber}</td>
                                        <td>{seller.storeName}</td>
                                        <td>
                                            <Button variant="primary" className="mx-1" onClick={() => handleView(seller)}>
                                                <i className="fas fa-eye"></i>
                                            </Button>
                                            <Button variant="warning" className="mx-1" onClick={() => handleSuspend(seller.sellerId)}>
                                                <i className="fas fa-ban"></i>
                                            </Button>
                                            <Button variant="danger" className="mx-1" onClick={() => handleDeactivate(seller.sellerId)}>
                                                <i className="fas fa-times"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <h5 className="fw-bold mt-5 mb-3">Suspended Sellers</h5>
                        <Table striped bordered hover>
                            <thead className="bg-secondary text-white">
                                <tr className="text-center">
                                    <th>#</th>
                                    <th>Seller Name</th>
                                    <th>Email</th>
                                    <th>Phone No</th>
                                    <th>Store Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {suspendedSellers.map((seller, index) => (
                                    <tr className="text-center" key={seller.id}>
                                        <td>{index + 1}</td>
                                        <td>{seller.fullName}</td>
                                        <td>{seller.email}</td>
                                        <td>{seller.mobileNumber}</td>
                                        <td>{seller.storeName}</td>
                                        <td>
                                            <Button variant="warning" className="mx-1" onClick={() => handleActivate(seller.sellerId)}>
                                                <i className="fas fa-ban"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </>
                )}
                <ViewSellerModal show={viewModalShow} onHide={() => setViewModalShow(false)} />
            </div>
        </>
    );
};

export default SellerDetails;
