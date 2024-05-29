import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import rejectedGif from '../../../assets/reject.gif';

function RejectModal({ show, onHide, onSubmit }) {
   

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Product Deleted</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p style={{ textAlign: 'center' }}>The product has been Deleted Before !</p>
                <img src={rejectedGif} alt="Rejected GIF" style={{ width: '100%', maxHeight: '100px', objectFit: 'contain' }} />
             
            </Modal.Body>
            
        </Modal>
    );
}

export default RejectModal;