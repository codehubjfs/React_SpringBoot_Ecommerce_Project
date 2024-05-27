import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux'; // Import useDispatch hook
import { updateProduct } from '../slices/productSlice'; // Import the updateProduct action

import approvedGif from '../assets/approve.gif'; 

function ApproveModal({ show, onHide, requestId }) {
    const dispatch = useDispatch(); // Initialize useDispatch hook

    // Function to handle the approval confirmation
    const handleApprovalConfirmation = () => {
        // Dispatch an action to update the product status to 'Approved'
        dispatch(updateProduct({ category: 'product', productData: { productId: requestId, decession: 'Approved' } }))
            .then(() => {
                onHide(); // Hide the modal after updating the status
            })
            .catch((error) => {
                console.error('Error updating product status:', error);
            });
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Product Approved</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p style={{ textAlign: 'center' }}>The product has been approved!</p>
                <img src={approvedGif} alt="Approved GIF" style={{ width: '100%', maxHeight: '100px', objectFit: 'contain' }} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleApprovalConfirmation}> {/* Add onClick event handler */}
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ApproveModal;
