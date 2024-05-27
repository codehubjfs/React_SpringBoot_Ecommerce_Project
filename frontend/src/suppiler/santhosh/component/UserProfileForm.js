import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSellerDetails, submitSellerDetails, updateSellerDetailsInDB, updateSellerDetails } from '../../slice/sellerDetailsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

function UserProfileForm({ sellerId }) {
  const dispatch = useDispatch();
  const sellerDetails = useSelector((state) => state.sellerDetails);
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (sellerId) {
      dispatch(fetchSellerDetails(sellerId));
    }
  }, [dispatch, sellerId]);

  const handleEdit = (field) => {
    if (field !== undefined) {
      setIsEditing(true);
    } else {
      setIsEditing(!isEditing);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    let updatedValue = value;
    let error = '';

    // Validation logic
    switch (name) {
      case 'fullName':
        updatedValue = value.replace(/[^A-Za-z\s]/g, ''); 
        if (!updatedValue.trim()) error = 'Name is required';
        break;
      case 'email':
        updatedValue = value.trim(); // Trim whitespace
        if (!updatedValue) {
          error = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(updatedValue)) {
          error = 'Invalid email format';
        }
        break;
      case 'mobile':
        updatedValue = value.replace(/[^0-9]/g, ''); // Allow only numbers
        if (!/^[7-9]\d{9}$/.test(updatedValue)) error = 'Invalid mobile number';
        break;
      case 'location':
        updatedValue = value.replace(/[^A-Za-z\s]/g, ''); // Allow only alphabets and spaces
        if (!updatedValue.trim()) error = 'Location is required';
        break;
      case 'shopName':
        updatedValue = value.replace(/[^A-Za-z\s]/g, ''); // Allow only alphabets and spaces
        if (!updatedValue.trim()) error = 'ShopName is required';
        break;
      case 'pincode':
        updatedValue = value.replace(/[^0-9]/g, ''); // Allow only numbers
        if (updatedValue.length > 6) error = 'Pincode must be 6 digits';
        if (!/^[1-9]\d{5}$/.test(updatedValue)) error = 'Invalid pincode format';
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error
    }));

    console.log({ [name]: updatedValue });
    dispatch(updateSellerDetails({ [name]: updatedValue }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditing) {
      dispatch(updateSellerDetailsInDB(sellerDetails));
    } else {
      dispatch(submitSellerDetails(sellerDetails));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginTop: '50px' }} className="container">
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="fullname" className="label-hover">Name:</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="fullname"
                name="fullName"
                value={sellerDetails.fullName}
                onChange={handleChange}
                disabled={!isEditing}
              />
              {isEditing && (
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => handleEdit('name')}
                  >
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </button>
                </div>
              )}
            </div>
            <span className="text-danger">{errors.name}</span>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email" className="label-hover">Email:</label>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={sellerDetails.email}
                onChange={handleChange}
                disabled={!isEditing}
              />
              {isEditing && (
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => handleEdit('email')}
                  >
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </button>
                </div>
              )}
            </div>
            <span className="text-danger">{errors.email}</span>
          </div>
        </div>

        {/* Additional fields */}
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="mobileNumber" className="label-hover">Mobile:</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="mobileNumber"
                name="mobile"
                value={sellerDetails.mobileNumber}
                onChange={handleChange}
                disabled={!isEditing}
              />
              {isEditing && (
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => handleEdit('mobile')}
                  >
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </button>
                </div>
              )}
            </div>
            <span className="text-danger">{errors.mobile}</span>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="street" className="label-hover">Location:</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="street"
                name="location"
                value={sellerDetails.street}
                onChange={handleChange}
                disabled={!isEditing}
              />
              {isEditing && (
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => handleEdit('location')}
                  >
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </button>
                </div>
              )}
            </div>
            <span className="text-danger">{errors.location}</span>
          </div>
        </div>

        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="aadharNumber" className="label-hover">Account Number:</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="aadharNumber"
                name="aadharNumber"
                value={sellerDetails.account_number}
                disabled
              />
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="gstin" className="label-hover">GSTIN:</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="gstin"
                name="gstin"
                value={sellerDetails.gstin}
                disabled
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="shopName" className="label-hover">Shop Name:</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="shopName"
                name="shopName"
                value={sellerDetails.storeName}
                onChange={handleChange}
                disabled={!isEditing}
              />
              {isEditing && (
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => handleEdit('shopName')}
                  >
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </button>
                </div>
              )}
            </div>
            <span className="text-danger">{errors.shopName}</span>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="pincode" className="label-hover">Pincode:</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="pincode"
                name="pincode"
                value={sellerDetails.pincode}
                onChange={handleChange}
                disabled={!isEditing}
              />
              {isEditing && (
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => handleEdit('pincode')}
                  >
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </button>
                </div>
              )}
            </div>
            <span className="text-danger">{errors.pincode}</span>
          </div>
        </div>

        <div className="row justify-content-center" style={{ marginTop: '20px' }}>
          <div className="col-md-6 text-right">
            {isEditing ? (
              <button type="button" className="btn btn-secondary btn-md" style={{ marginRight: '20px' }} onClick={() => handleEdit()}>Cancel</button>
            ) : (
              <button type="button" className="btn btn-secondary btn-md" style={{ marginRight: '20px' }} onClick={() => handleEdit()}>Edit</button>
            )}
            <button type="submit" className="btn btn-primary btn-md" disabled={!isEditing}>Save</button>
          </div>
        </div>
      </form>
      <div style={{ marginTop: '50px' }}>
        <h3>Note:</h3>
        <label style={{ fontSize: '20px' }}> "The GSTIN and Aadhar Number fields are not editable. If you require edits, please reach out to the administrator through E-mail (horizonadmin@gmail.com.)"</label>
      </div>
    </div>
  );
}

export default UserProfileForm;