// NotificationModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const NotificationModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Notifications</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Content for notifications goes here */}
        <p>You have new notifications.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

<<<<<<< HEAD
export default NotificationModal;
=======
export default NotificationModal;
>>>>>>> dbb67c4e42ab8d22227bd13c41487e9b5832379a
