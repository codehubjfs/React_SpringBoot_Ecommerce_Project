import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ApproveSellerModal({ show, onHide }) {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Approve Seller</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to approve this seller?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={onHide}>
                    Approve
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ApproveSellerModal;
