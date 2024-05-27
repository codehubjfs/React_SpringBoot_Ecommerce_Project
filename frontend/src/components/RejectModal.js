import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../slices/productSlice';
import rejectedGif from '../assets/reject.gif';

function RejectModal({ show, onHide, requestId }) {
    const [reason, setReason] = useState('');
    const [isValid, setIsValid] = useState(true);
    const dispatch = useDispatch();

    const handleReasonChange = (event) => {
        setReason(event.target.value);
        setIsValid(true);
    };

    const handleSubmit = () => {
        if (reason.trim() === '') {
            setIsValid(false);
            return;
        }

        // Dispatch an action to update the product status to 'Rejected' with the reason
        dispatch(updateProduct({ 
            category: 'product', 
            productData: { 
                productId: requestId, 
                decession: 'Rejected', 
                rejectionReason: reason 
            } 
        }))
        .then(() => {
            onHide();
        })
        .catch((error) => {
            console.error('Error updating product status:', error);
        });
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Product Rejected</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p style={{ textAlign: 'center' }}>The product has been rejected!</p>
                <img src={rejectedGif} alt="Rejected GIF" style={{ width: '100%', maxHeight: '100px', objectFit: 'contain' }} />
                <Form.Group controlId="reason">
                    <Form.Label>Reason</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter reason for rejection..."
                        value={reason}
                        onChange={handleReasonChange}
                        isInvalid={!isValid}
                    />
                    {!isValid && <span style={{ color: 'red' }}>Please provide a reason for rejection.</span>}
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Submit Reason
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RejectModal;
