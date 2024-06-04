import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSellerDetails, submitSellerDetails, updateSellerDetailsInDB, updateSellerDetails } from '../../slice/sellerDetailsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import SuccessModal from './SuccessModel';

function UserProfileForm({ sellerId }) {
  const dispatch = useDispatch();
  const sellerDetails = useSelector((state) => state.sellerDetails);

  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedDetails = JSON.parse(sessionStorage.getItem('sellerDetails'));
    if (storedDetails) {
      dispatch(updateSellerDetails(storedDetails));
    } else if (sellerId) {
      dispatch(fetchSellerDetails(sellerId));
    }
  }, [dispatch, sellerId]);

  const validateField = (name, value) => {
    let updatedValue = value;
    let error = '';

    switch (name) {
      case 'fullName':
        updatedValue = value.replace(/[^A-Za-z\s]/g, '');
        if (!updatedValue.trim()) error = 'Name is required';
        break;
      case 'email':
        updatedValue = value.trim();
        if (!updatedValue) {
          error = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(updatedValue)) {
          error = 'Invalid email format';
        }
        break;
      case 'mobileNumber':
        updatedValue = value.replace(/[^0-9]/g, '');
        if (!updatedValue.trim()) error = 'Mobile is required';
        else if (!/^[7-9]\d{9}$/.test(updatedValue)) error = 'Invalid mobile number';
        break;
      case 'street':
        updatedValue = value.replace(/[^A-Za-z\s]/g, '');
        if (!updatedValue.trim()) error = 'Location is required';
        break;
      case 'storeName':
        updatedValue = value.replace(/[^A-Za-z\s]/g, '');
        if (!updatedValue.trim()) error = 'Shop Name is required';
        break;
      case 'pincode':
        updatedValue = value.replace(/[^0-9]/g, '');
        if (!updatedValue.trim()) error = 'Pincode is required';
        else if (updatedValue.length > 6) error = 'Pincode must be 6 digits';
        else if (!/^[1-9]\d{5}$/.test(updatedValue)) error = 'Invalid pincode format';
        break;
      case 'password':
        if (!value.trim()) {
          error = 'Password is required';
        } else if (value.length < 6) {
          error = 'Password must be at least 6 characters';
        } else if (!/[A-Za-z]/.test(value) || !/[0-9]/.test(value)) {
          error = 'Password must contain letters and numbers';
        }
        break;
      case 'ifscCode':
        updatedValue = value.toUpperCase().trim();
        if (!updatedValue) {
          error = 'IFSC Code is required';
        } else if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(updatedValue)) {
          error = 'Invalid IFSC Code format';
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error
    }));

    return { [name]: updatedValue, error };
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const { [name]: updatedValue, error } = validateField(name, value);

    dispatch(updateSellerDetails({ [name]: updatedValue }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = ['fullName', 'email', 'mobileNumber', 'street', 'storeName', 'pincode', 'password', 'ifscCode'];
    let hasErrors = false;

    fields.forEach((field) => {
      const { error } = validateField(field, sellerDetails[field]);
      if (error) {
        hasErrors = true;
      }
    });

    if (hasErrors) {
      return;
    }

    if (isEditing) {
      dispatch(updateSellerDetailsInDB(sellerDetails));
    } else {
      dispatch(submitSellerDetails(sellerDetails));
    }

    setShowModal(true);
    setIsEditing(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="formm">
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
                    onClick={() => handleEdit()}
                  >
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </button>
                </div>
              )}
            </div>
            <span className="text-danger">{errors.fullName}</span>
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
                    onClick={() => handleEdit()}
                  >
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </button>
                </div>
              )}
            </div>
            <span className="text-danger">{errors.email}</span>
          </div>
        </div>

        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="mobileNumber" className="label-hover">Mobile:</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="mobileNumber"
                name="mobileNumber"
                value={sellerDetails.mobileNumber}
                onChange={handleChange}
                disabled={!isEditing}
              />
              {isEditing && (
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => handleEdit()}
                  >
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </button>
                </div>
              )}
            </div>
            <span className="text-danger">{errors.mobileNumber}</span>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="street" className="label-hover">Location:</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="street"
                name="street"
                value={sellerDetails.street}
                onChange={handleChange}
                disabled={!isEditing}
              />
              {isEditing && (
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => handleEdit()}
                  >
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </button>
                </div>
              )}
            </div>
            <span className="text-danger">{errors.street}</span>
          </div>
        </div>

        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="accountNumber" className="label-hover">Account Number:</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="accountNumber"
                name="accountNumber"
                value={sellerDetails.accountNumber}
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
            <label htmlFor="ifscCode" className="label-hover">IFSC Code:</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="ifscCode"
                name="ifscCode"
                value={sellerDetails.ifscCode}
                onChange={handleChange}
                disabled
              />
            </div>
            <span className="text-danger">{errors.ifscCode}</span>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="password" className="label-hover">Password:</label>
            <div className="input-group">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={sellerDetails.password}
                onChange={handleChange}
                disabled={!isEditing}
              />
              {isEditing && (
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => handleEdit()}
                  >
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </button>
                </div>
              )}
            </div>
            <span className="text-danger">{errors.password}</span>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="storeName" className="label-hover">Shop Name:</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="storeName"
                name="storeName"
                value={sellerDetails.storeName}
                onChange={handleChange}
                disabled={!isEditing}
              />
              {isEditing && (
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => handleEdit()}
                  >
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </button>
                </div>
              )}
            </div>
            <span className="text-danger">{errors.storeName}</span>
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
                    onClick={() => handleEdit()}
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
        <label style={{ fontSize: '20px' }}> "The GSTIN, IFSC-code and Aadhar Number fields are not editable. If you require edits, please reach out to the administrator through E-mail (horizonadmin@gmail.com.)"</label>
      </div>
      <SuccessModal show={showModal} handleClose={handleCloseModal} />
    </div>
  );
}

export default UserProfileForm;
