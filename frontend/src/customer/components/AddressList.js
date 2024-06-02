import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DeleteAddress from './DeleteAddress';

function AddressList() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState(1);
  const addresses = useSelector(state => state.addresses.addressList);

  const handleShowDeleteModal = (addressId) => {
    setSelectedAddressId(addressId);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedAddressId(null);
  };

  return (
    <div>
      <h2>Address List</h2>
      <ul>
        {addresses.map((address) => (
          <li key={address.id}>
            {address.name}
            <Button variant="danger" onClick={() => handleShowDeleteModal(address.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>

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
