import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchActiveSellers, fetchSuspendedSellers, suspendSeller, deactivateSeller, setSelectedSeller, activateSeller } from '../slices/sellerSlices';
import ViewSellerModal from './ViewSellerModal';
import DescriptionCard from './DescriptionCard ';

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
    const [confirmSuspend, setConfirmSuspend] = useState(false);
    const [confirmDeactivate, setConfirmDeactivate] = useState(false);
    const [confirmActivate, setConfirmActivate] = useState(false);
    const [sellerToModify, setSellerToModify] = useState(null);

    useEffect(() => {
        dispatch(fetchActiveSellers());
        dispatch(fetchSuspendedSellers());
    }, [dispatch]);

    const handleView = (seller) => {
        dispatch(setSelectedSeller(seller));
        setViewModalShow(true);
    };

    const handleSuspend = (sellerId) => {
        setSellerToModify(sellerId);
        setConfirmSuspend(true);
    };

    const handleDeactivate = (sellerId) => {
        setSellerToModify(sellerId);
        setConfirmDeactivate(true);
    };

    const handleActivate = (sellerId) => {
        setSellerToModify(sellerId);
        setConfirmActivate(true);
    };

    const handleConfirmSuspend = () => {
        dispatch(suspendSeller(sellerToModify)).then(() => {
            dispatch(fetchActiveSellers());
            dispatch(fetchSuspendedSellers());
            setConfirmSuspend(false);
        }).catch(error => console.error('Error suspending seller:', error));
    };

    const handleConfirmDeactivate = () => {
        dispatch(deactivateSeller(sellerToModify)).then(() => {
            dispatch(fetchActiveSellers());
            dispatch(fetchSuspendedSellers());
            setConfirmDeactivate(false);
        }).catch(error => console.error('Error deactivating seller:', error));
    };

    const handleConfirmActivate = () => {
        dispatch(activateSeller(sellerToModify)).then(() => {
            dispatch(fetchActiveSellers());
            dispatch(fetchSuspendedSellers());
            setConfirmActivate(false);
        }).catch(error => console.error('Error activating seller:', error));
    };

    return (
        <>
            <br />
            <Breadcrumb />
            <div className="container mt-5">
                <h2 className="fw-bold mb-4 text-center">Seller Details</h2>
                <hr></hr>

                {status === 'succeeded' && (
                    <>
                        <DescriptionCard title="Active Sellers">
                            Manage active sellers and perform actions such as viewing details, suspending, or deactivating them.
                        </DescriptionCard>
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
                                        <td style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-around' }}>
                                        
                                                <i className="fas fa-eye" onClick={() => handleView(seller)}></i>
                                            
                                            
                                                <i className="fas fa-ban" onClick={() => handleSuspend(seller.sellerId)}></i>
                                            
                                           
                                                <i className="fas fa-times" onClick={() => handleDeactivate(seller.sellerId)}></i>
                                            
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <br></br>

                        <hr></hr>
                        <DescriptionCard title="Suspended Sellers">
                            View suspended sellers and activate them if their suspension period is over.
                        </DescriptionCard>
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
                                        <td style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-around' }}>
                                           
                                                <i className="fas fa-ban" onClick={() => handleActivate(seller.sellerId)}></i>
                                           
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </>
                )}
                <ViewSellerModal show={viewModalShow} onHide={() => setViewModalShow(false)} />

                {/* Suspend Confirmation Modal */}
                <Modal show={confirmSuspend} onHide={() => setConfirmSuspend(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm Suspend</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to suspend this seller?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setConfirmSuspend(false)}>
                            Cancel
                        </Button>
                        <Button variant="danger" onClick={handleConfirmSuspend}>
                            Suspend
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Deactivate Confirmation Modal */}
                <Modal show={confirmDeactivate} onHide={() => setConfirmDeactivate(false)}>
                    <Modal.Header
                    closeButton>
                    <Modal.Title>Confirm Deactivate</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to deactivate this seller?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setConfirmDeactivate(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleConfirmDeactivate}>
                        Deactivate
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Activate Confirmation Modal */}
            <Modal show={confirmActivate} onHide={() => setConfirmActivate(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Activate</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to activate this seller?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setConfirmActivate(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleConfirmActivate}>
                        Activate
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    </>
);
};

export default SellerDetails;
