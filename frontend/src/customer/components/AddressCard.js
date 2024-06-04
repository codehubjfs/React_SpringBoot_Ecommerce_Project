import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDefaultAddresses, getAddressesFromJson, removeAddressFromJson, setSelectedAddress, addAddressToJson } from '../slices/addressSlice';
import { fetchCustomerData } from '../slices/CustomerSlice';
import AddAddress from './AddAddress';
import EditAddress from './EditAddress';
import DeleteAddress from './DeleteAddress';

function AddressCard() {
  const dispatch = useDispatch();
  const addressList = useSelector((state) => state.addresses.addressList);
  const customer = useSelector((state) => state.customers.customer);
  const [add,setAdd] = useState();

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteAddress, setDeleteAddress] = useState(null);

  // Update sessionStorage whenever addressList changes
  useEffect(() => {
    if (addressList) {
      sessionStorage.setItem('addresses', JSON.stringify(addressList));
    }
  }, [addressList]);

  // Load addressList from sessionStorage when the component mounts
  useEffect(() => {
    const storedAddresses = sessionStorage.getItem('addresses');
  
    console.log("hyyy",storedAddresses.length);
  //  if (storedAddresses.length) {
   //   dispatch(getAddressesFromJson.fulfilled(JSON.parse(storedAddresses))); // Update the state with the stored addresses
   // } else {
      console.log("helo");
      dispatch(getAddressesFromJson()); // Fetch from API or any other source if not in sessionStorage
 //   }
  }, [dispatch]);

  // Load customer data from sessionStorage when the component mounts
  useEffect(() => {
    const storedCustomerData = sessionStorage.getItem('customerData');
    if (storedCustomerData) {
      const parsedCustomer = JSON.parse(storedCustomerData);
      if (parsedCustomer && parsedCustomer.id) {
        dispatch(fetchCustomerData(parsedCustomer.id));
      }
    }

    const storedDefaultAddresses = sessionStorage.getItem('defaultAddresses');
    if (storedDefaultAddresses) {
      const parsedAddresses = JSON.parse(storedDefaultAddresses);
      dispatch(fetchDefaultAddresses.fulfilled(parsedAddresses));
    }
  }, [dispatch]);

  useEffect(() => {
    if (customer && customer.id) {
      dispatch(getAddressesFromJson(customer.id));
    }
  }, [customer, dispatch]);

  const handleEditAddress = (addresses) => {
    console.log("addresses",addresses);
    dispatch(setSelectedAddress(addresses));
    setAdd(addresses);
    setShowEditModal(true);
  };

  const handleDeleteAddress = (addresses) => {

    setDeleteAddress(addresses);
    setAdd(addresses);
    setShowDeleteModal(true);
  };

  const confirmDeleteAddress = () => {
    if (deleteAddress) {
      dispatch(removeAddressFromJson({ customerId: customer.id, addressId: deleteAddress.id })).then(() => {
        setShowDeleteModal(false);
      });
    }
  };

  const handleAddAddress = (addresses) => {
    console.log(addresses);
    dispatch(addAddressToJson({ customerId: customer.id, addresses })).then(() => {
      setShowModal(false);
    });
  };

  return (
    <div className="container mt-5">
      <h1 style={{ marginTop: "100px" }}>User Address</h1>
      <div id="address-container" style={{ marginBottom: "20px", marginTop: "10px" }}>
        <div className="row">
          {addressList.map((addresses) => (
            <div className="col-md-4 mb-4" key={addresses.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{addresses.title}</h5>
                  <p className="card-text"><strong>Full Name:</strong> {addresses.fullName}</p>
                  <p className="card-text"><strong>Street/Area:</strong> {addresses.street}</p>
                  <p className="card-text"><strong>Town/City:</strong> {addresses.city}</p>
                  <p className="card-text"><strong>State:</strong> {addresses.state}</p>
                  <p className="card-text"><strong>Pincode:</strong> {addresses.pincode}</p>
                  <p className="card-text"><strong>Phone:</strong> {addresses.mobileNumber}</p>
                  <div className="d-flex justify-content-end">
                    <button
                      className="btn btn-sm btn-outline-dark mr-2"
                      onClick={() => handleEditAddress(addresses)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDeleteAddress(addresses)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-md-4 mb-4">
            <div className="card h-100 d-flex justify-content-center align-items-center">
              <button className="btn btn-outline-dark" onClick={() => setShowModal(true)}>
                <i className="fas fa-plus"></i> Add Address
              </button>
            </div>
          </div>
        </div>
      </div>

      <AddAddress show={showModal} onHide={() => setShowModal(false)} onCreate={handleAddAddress} />
      {showEditModal && (
        <EditAddress show={showEditModal} onHide={() => setShowEditModal(false)} addressData={add} />
      )}
      {showDeleteModal && (
        <DeleteAddress
          show={showDeleteModal}
          onHide={() => setShowDeleteModal(false)}
          onConfirm={confirmDeleteAddress}
          addressData={add}
          itemName={deleteAddress ? deleteAddress.title : ''}
        />
      )}
    </div>
  );
}

export default AddressCard;
