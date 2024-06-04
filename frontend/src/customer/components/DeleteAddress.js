import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeAddressFromJson } from '../slices/addressSlice';

function DeleteAddress({ show, onHide, addressData }) {
  const [customerId, setCustomerId] = useState(null);
  const dispatch = useDispatch();
  const status = useSelector(state => state.addresses.status);
  const error = useSelector(state => state.addresses.error);

  useEffect(() => {
    const storedCustomerData = sessionStorage.getItem('customerData');
    if (storedCustomerData) {
      const parsedCustomer = JSON.parse(storedCustomerData);
      if (parsedCustomer && parsedCustomer.id) {
        setCustomerId(parsedCustomer.id);
      }
    }
  }, []);

  const handleConfirm = async () => {
    if (customerId && addressData && addressData.id) {
      console.log('Dispatching removeAddressFromJson with:', { customerId, addressId: addressData.id });
      dispatch(removeAddressFromJson({ customerId, addressId: addressData.id }));
    } else {
      console.error('Customer ID or Address ID is not available', { customerId, addressData });
    }
  };

  useEffect(() => {
    if (status === 'succeeded') {
      onHide();
    }
  }, [status, onHide]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {addressData ? (
          <p>Are you sure you want to delete the address: {addressData.street}, {addressData.city}?</p>
        ) : (
          <p>Error: Address data is not available. Please try again.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleConfirm} disabled={status === 'loading' || !addressData}>
          {status === 'loading' ? 'Deleting...' : 'Delete'}
        </Button>
        {status === 'failed' && <div className="error-message">Error: {error}</div>}
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteAddress;
