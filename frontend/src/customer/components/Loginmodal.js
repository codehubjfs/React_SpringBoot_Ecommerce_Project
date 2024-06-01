
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SuccessModal = ({ show, handleClose, message }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body className="text-center">
        <img src="https://media1.tenor.com/m/BSY1qTH8g-oAAAAC/check.gif" alt="Success" style={{ width: '100px', height: '100px' }} />
        <h4 className="mt-3">{message}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SuccessModal;
