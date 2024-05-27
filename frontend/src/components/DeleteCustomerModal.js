import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function DeleteCustomerModal({ selectedCustomer, show, onHide, onDelete }) {
    // Check if selectedCustomer is defined
    if (!selectedCustomer) {
        return null; // If not defined, return null to prevent rendering
    }

    console.log('Delete modal show prop:', show); // Check the value of the show prop

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to block the customer "{selectedCustomer.fname}"?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Cancel</Button>
                <Button variant="danger" onClick={() => onDelete(selectedCustomer.id)}>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteCustomerModal;
