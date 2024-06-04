import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap'; // Ensure you import Button
import DeleteAddress from './DeleteAddress';

function AddressList() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null); // Store the entire selected address
  const addresses = useSelector(state => state.addresses.addressList);

  const handleShowDeleteModal = (address) => {
    setSelectedAddress(address);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedAddress(null);
  };

  return (
    <div>
      <h2>Address List</h2>
      <ul>
        {addresses.map((address) => (
          <li key={address.id}>
            {address.name}
            <Button variant="danger" onClick={() => handleShowDeleteModal(address)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>

      {selectedAddress && (
        <DeleteAddress
          show={showDeleteModal}
          onHide={handleCloseDeleteModal}
          addressData={selectedAddress} // Pass the entire address object
        />
      )}
    </div>
  );
}

export default AddressList;
