import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import rejectedGif from '../../../assets/reject.gif';

function RejectModal({ show, onHide, onSubmit }) {
    const [reason, setReason] = useState('');
    const [isValid, setIsValid] = useState(true); // State to track validity of reason

    const handleReasonChange = (event) => {
        setReason(event.target.value);
        setIsValid(true); // Reset isValid to true when the user starts typing
    };

    const handleSubmit = () => {
        if (reason.trim() === '') {
            setIsValid(false); // Reason is not valid
            return; // Do not proceed with submission
        }
        
        console.log("Reason submitted:", reason);
        onSubmit(reason); // Pass the reason to the parent component
        onHide(); // Close the modal
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
                        isInvalid={!isValid} // Apply Bootstrap isInvalid style if reason is not valid
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
