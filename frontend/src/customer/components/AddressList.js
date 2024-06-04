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

  const [selectedAddressId, setSelectedAddressId] = useState(1);
  const addresses = useSelector(state => state.addresses.addressList);

  const handleShowDeleteModal = (addressId) => {
    setSelectedAddressId(addressId);

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
 <Button variant="danger" onClick={() => handleShowDeleteModal(address.id)}>
 main
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

      {selectedAddressId && (
        <DeleteAddress
          show={showDeleteModal}
          onHide={handleCloseDeleteModal}
          addressId={selectedAddressId}
          itemName={addresses.find(addr => addr.id === selectedAddressId)?.name}

        />
      )}
    </div>
  );
}

export default AddressList;
