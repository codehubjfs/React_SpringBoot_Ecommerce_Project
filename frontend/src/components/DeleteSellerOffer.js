import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export function DeleteSellerOffer({ show, handleClose, handleDelete }) {
  return (
    <Modal show={show} onHide={handleClose} centered={false} className="modal-top">
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-center">Are you sure you want to delete this offer?</p>
      </Modal.Body>
      <Modal.Footer className="justify-content-end">
        <Button variant="secondary" onClick={handleClose} className="me-2">
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
