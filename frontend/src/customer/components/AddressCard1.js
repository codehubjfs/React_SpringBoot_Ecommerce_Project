// AddressCard.js
import React from "react";
import useAddressData from "./AddressData";

const AddressCard = () => {
  const { addresses } = useAddressData();

  // return (
  <div className="container mt-5">
    <h1 style={{ marginTop: "100px" }}>User Address</h1>
    <div
      id="address-container"
      style={{ marginBottom: "20px", marginTop: "10px" }}
    >
      <div className="col-md-12 m-4">
        <div className="row">
          {addresses.map((address) => (
            <div className="card col-sm-3 m-3" key={address.id}>
              <div className="card-body">
                <h5 className="card-title">{address.title}</h5>
                <p className="card-text text-left">
                  Street/Area: {address.street}
                </p>
                <p className="card-text text-left">
                  Landmark: {address.landmark}
                </p>
                <p className="card-text text-left">Town/City: {address.city}</p>
                <p className="card-text text-left">State: {address.state}</p>
                <p className="card-text text-left">
                  Pincode: {address.pincode}
                </p>
                <p className="card-text text-left">Phone: {address.phone}</p>
                <div>
                  <button
                    className="btn btn-outline-dark edit-address"
                    data-toggle="modal"
                    data-target="#editAddressModal"
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-outline-danger remove-address"
                    style={{ marginLeft: "5px" }}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="card col-sm-3 m-3">
            <div className="card-body d-flex justify-content-center align-items-center">
              <button
                id="addAddressBtn"
                className="btn btn-outline-dark"
                data-toggle="modal"
                data-target="#addAddressModal"
              >
                <i className="fas fa-plus"></i> Add Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Add Address Modal */}
    {/* Modal content */}
    <div
      className="modal fade"
      id="addAddressModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="addAddressModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title"
              id="addAddressModalLabel"
              style={{ textAlign: "center" }}
            >
              Add Address
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {/* Address Form */}
            <form
              id="addressForm"
              className="container-fluid"
              onSubmit={handleSubmit}
            >
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="fullNameInput">
                      Full name (First and Last name)
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.fullName && "is-invalid"
                      }`}
                      id="fullNameInput"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    <span className="text-danger">{errors.fullName}</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobileInput">
                      Mobile number<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.mobile && "is-invalid"
                      }`}
                      id="mobileInput"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                    <span className="text-danger">{errors.mobile}</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="pincodeInput">
                      Pincode<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.pincode && "is-invalid"
                      }`}
                      id="pincodeInput"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                    />
                    <span className="text-danger">{errors.pincode}</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="areaInput">
                      Street/Area<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.area && "is-invalid"}`}
                      id="areaInput"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                    />
                    <span className="text-danger">{errors.area}</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="landmarkInput">
                      Landmark<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.landmark && "is-invalid"
                      }`}
                      id="landmarkInput"
                      name="landmark"
                      value={formData.landmark}
                      onChange={handleChange}
                    />
                    <span className="text-danger">{errors.landmark}</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="cityInput">
                      Town/City<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.city && "is-invalid"}`}
                      id="cityInput"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                    <span className="text-danger">{errors.city}</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="stateDropdown">
                      State<span style={{ color: "red" }}>*</span>
                    </label>
                    <select
                      className={`form-control ${errors.state && "is-invalid"}`}
                      id="stateDropdown"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    >
                      <option value="">Select State</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">
                        Arunachal Pradesh
                      </option>
                      {/* Add other options */}
                    </select>
                    <span className="text-danger">{errors.state}</span>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Add Address
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>;
  // );
};

export default AddressCard;
