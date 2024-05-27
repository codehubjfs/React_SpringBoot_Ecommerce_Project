import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export const DeleteSliderModal = ({ show, handleClose, handleDelete, sliderId }) => {
  const onDelete = () => {
    handleDelete(sliderId);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-center">Are you sure you want to delete this slider?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} className="me-2">
          Cancel
        </Button>
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
