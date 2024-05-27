import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import profile from '../assets/profile2.jpg';

function ViewCustomerModal({ show, onHide, selectedCustomer }) {
    if (!selectedCustomer) {
        return null; // Return null if selectedCustomer is undefined
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>View Customer Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="customer-details">
                    <div className="profile-picture" style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <img src={profile} alt="Profile" style={{ height: '150px', width: '150px', borderRadius: '100%' }} />
                    </div>
                    <div className="detail-item">
                        <span className="label">Name</span>
                        <span className="value">: {selectedCustomer.fname}</span>
                    </div>
                    <div className="detail-item">
                        <span className="label">Membership</span>
                        <span className="value">: {selectedCustomer.membership}</span>
                    </div>
                    <div className="detail-item">
                        <span className="label">Email</span>
                        <span className="value">: {selectedCustomer.email}</span>
                    </div>
                    <div className="detail-item">
                        <span className="label">Mobile</span>
                        <span className="value">: {selectedCustomer.phone}</span>
                    </div>
                    <div className="detail-item">
                        <span className="label">Address</span>
                        <span className="value">: {selectedCustomer.address}</span>
                    </div>
                    <div className="detail-item">
                        <span className="label">State</span>
                        <span className="value">: {selectedCustomer.state}</span>
                    </div>
                    <div className="detail-item">
                        <span className="label">Pincode</span>
                        <span className="value">: {selectedCustomer.pincode}</span>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ViewCustomerModal;
