import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import EditAddress from './EditAddress';
import DeleteAddress from './DeleteAddress';
import AddAddress from './AddAddress';
import { getAddressesFromJson, removeAddressFromJson, setSelectedAddress, addAddressToJson } from '../slices/addressSlice';
import { fetchCustomerData } from '../slices/CustomerSlice';

function AddressCard() {
  const [modalShow1, setModalShow1] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteAddress, setDeleteAddress] = useState(null);
  const dispatch = useDispatch();
  const { addressList, error, selectedAddress } = useSelector((state) => state.addresses);
  const customer = useSelector((state) => state.customers.customer);

  useEffect(() => {
    const storedCustomerData = sessionStorage.getItem('customerData');
    if (storedCustomerData) {
      const parsedCustomer = JSON.parse(storedCustomerData);
      if (parsedCustomer && parsedCustomer.id) {
        console.log('Customer ID retrieved from session storage: ', parsedCustomer.id);
        dispatch(fetchCustomerData(parsedCustomer.id));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    if (customer && customer.id) {
      dispatch(getAddressesFromJson(customer.id));
    }
  }, [customer, dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleEdit = (address) => {
    dispatch(setSelectedAddress(address));
    setShowEditModal(true);
  };

  const handleDelete = (address) => {
    setDeleteAddress(address);
    setShowDeleteModal(true);
  };

  const handleEditClose = () => {
    setShowEditModal(false);
  };

  const handleDeleteClose = () => {
    setShowDeleteModal(false);
    setDeleteAddress(null);
  };

  const confirmDelete = () => {
    if (deleteAddress) {
      dispatch(removeAddressFromJson({ customerId: customer.id, addressId: deleteAddress.id })).then(() => {
        handleDeleteClose();
      });
    }
  };

  const handleAddAddress = (address) => {
    dispatch(addAddressToJson({ customerId: customer.id, address })).then(() => {
      setModalShow1(false);
    });
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <table id="AddressTable" className="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th className="text-center bg-dark text-white">S.No</th>
                  <th className="text-center bg-dark text-white">Street</th>
                  <th className="text-center bg-dark text-white">City</th>
                  <th className="text-center bg-dark text-white">State</th>
                  <th className="text-center bg-dark text-white">Zipcode</th>
                  <th className="text-center bg-dark text-white">Actions</th>
                </tr>
              </thead>
              <tbody>
                {addressList.filter(address => !address.isDeleted).map((address, index) => (
                  <tr key={address.id} className="text-center">
                    <td>{index + 1}</td>
                    <td>{address.street}</td>
                    <td>{address.city}</td>
                    <td>{address.state}</td>
                    <td>{address.zipCode}</td>
                    <td className="text-center">
                      <Button variant="link" className="p-0 me-2" onClick={() => handleEdit(address)}>
                        <i className="fas fa-edit text-primary"></i> Edit
                      </Button>
                      <Button variant="link" className="p-0" onClick={() => handleDelete(address)}>
                        <i className="fas fa-trash-alt text-danger"></i> Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Button variant="primary" onClick={() => setModalShow1(true)}>Add Address</Button>
      <AddAddress show={modalShow1} onHide={() => setModalShow1(false)} onCreate={handleAddAddress} />
      {showEditModal && (
        <EditAddress
          show={showEditModal}
          onHide={handleEditClose}
          addressData={selectedAddress}
        />
      )}
      {showDeleteModal && (
        <DeleteAddress
          show={showDeleteModal}
          onHide={handleDeleteClose}
          addressData={deleteAddress}  // Ensure addressData is passed here
        />
      )}
    </div>
  );
}

export default AddressCard;
