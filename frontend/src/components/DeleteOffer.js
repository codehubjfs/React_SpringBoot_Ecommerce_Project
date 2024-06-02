import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export function DeleteOffer({ show, handleClose, handleDelete, offer }) {
  const dispatch = useDispatch();

  const handleDeleteOffer = () => {
    handleDelete(offer)
      .then(() => {
        handleClose();
      })
      .catch((error) => {
        console.error("Failed to delete offer:", error);
      });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Offer</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this offer?</Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}