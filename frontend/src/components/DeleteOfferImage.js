import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function DeleteOfferImage({ offerName, show, onClose, onDelete }) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-center">Are you sure you want to delete the offer image "{offerName}"?</p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="secondary" onClick={onClose} className="me-2">Cancel</Button>
        <Button variant="danger" onClick={onDelete}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteOfferImage;