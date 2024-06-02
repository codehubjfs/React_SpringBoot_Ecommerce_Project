import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const NotificationModal = ({ show, handleClose, rejectedProducts }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Notifications</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {rejectedProducts && rejectedProducts.length > 0 ? (
          <div>
            <h5>Rejected Products:</h5>
            <ul>
              {rejectedProducts.map((product) => (
                <li key={product.productId}>
                  <strong>Product Name:</strong> {product.productTitle}<br />
                  <strong>Reason for Rejection:</strong> Admin rejected the product<br />
                  <strong>Category:</strong> {product.category}<br />
                  <strong>Price:</strong> ${product.price}<br />
                  <strong>Quantity:</strong> {product.stock}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No rejected products to display.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NotificationModal;
