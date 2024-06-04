import React, { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button, Spinner, Alert } from 'react-bootstrap';
import { fetchNotifications, markNotificationAsRead, markAllNotificationsAsRead } from '../slices/NotificationSlice';
import '../AdminOffer.css';

export const NotificationModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { notificationsList, status, error } = useSelector((state) => state.notifications);

  useEffect(() => {
    if (isOpen) {
      dispatch(fetchNotifications());
    }
  }, [isOpen, dispatch]);

  const handleMarkAsRead = (id) => {
    dispatch(markNotificationAsRead(id));
  };

  const handleMarkAllAsRead = () => {
    dispatch(markAllNotificationsAsRead());
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOK = () => {
    onClose();
  };

  const pendingNotifications = notificationsList.filter(notification => notification.prodStatus === 'pending');

  return (
    <div>
      <Modal show={isOpen} onHide={handleCancel} dialogClassName="custom-modal" backdropClassName="custom-backdrop">
        <Modal.Header closeButton>
          <Modal.Title>Seller Product Requests</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {status === 'loading' ? (
            <div className="text-center">
              <Spinner animation="border" />
            </div>
          ) : error ? (
            <Alert variant="danger">Error: {error}</Alert>
          ) : pendingNotifications.length === 0 ? (
            <p>No pending messages.</p>
          ) : (
            <div className="modal-body-content">
              {pendingNotifications.map((message) => (
                <div key={message.id} className="d-flex justify-content-between align-items-center mb-2">
                  <p style={{ marginBottom: '0' }}>{message.message}</p>
                  <FaCheck style={{ cursor: 'pointer' }} onClick={() => handleMarkAsRead(message.id)} />
                </div>
              ))}
            </div>
          )}
          {pendingNotifications.length > 0 && (
            <div className="mt-3 text-end">
              <Button variant="link" onClick={handleMarkAllAsRead}>Mark All as Read</Button>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
          <Button variant="primary" onClick={handleOK}>OK</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
