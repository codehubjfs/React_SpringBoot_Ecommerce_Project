import React, { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotifications, markNotificationAsRead, markAllNotificationsAsRead } from '../slices/NotificationSlice';

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

  return (
<div className={classNames("modal", { "show": isOpen })} tabIndex="-1" style={{ display: isOpen ? 'block' : 'none', position: 'fixed', top: '10%', left: '90%', transform: 'translate(-50%, -50%)', maxWidth: '20%',
    maxHeight: '23%' }}>
      <div className="modal-dialog" style={{ width: '100%' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Seller Product Requests</h5>
            <button type="button" className="btn-close" onClick={handleCancel}></button>
          </div>
          <div className="modal-body">
            {status === 'loading' ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : notificationsList.length === 0 ? (
              <p>No messages.</p>
            ) : (
              notificationsList.map((message) => (
                <div key={message.id}>
                  <p style={{ marginBottom: '0' }}>
                    Seller requests to add the product {message.message}.
                  </p>
                  <div>
                    <FaCheck style={{ cursor: 'pointer' }} onClick={() => handleMarkAsRead(message.id)} />
                  </div>
                </div>
              ))
            )}
            {notificationsList.length > 0 && (
              <div className="mt-3">
                <a href="#" onClick={handleMarkAllAsRead}>Mark All as Read</a>
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleOK}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
};
