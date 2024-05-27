import React, { useState } from "react";

function AddressCard() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      title: "Address 1",
      street: "123 Main Street",
      landmark: "Near St.Johns School",
      city: "City A",
      state: "Tamil Nadu",
      pincode: "636004",
      phone: "1234567890",
    },
    {
      id: 2,
      title: "Address 2",
      street: "456 Main Street",
      landmark: "Near St.Marys School",
      city: "City B",
      state: "Country B",
      pincode: "123456",
      phone: "9876543210",
    },
  ]);

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    pincode: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
    } else if (!/^\d$/.test(formData.fullname)) {
      errors.fullName = "Enter a valid name";
    }
    if (!formData.mobile.trim()) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      errors.mobile = "Mobile number must be 10 digits";
    }
    if (!formData.pincode.trim()) {
      errors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      errors.pincode = "Pincode must be 6 digits";
    }
    if (!formData.area.trim()) {
      errors.area = "Street/Area is required";
    }
    if (!formData.landmark.trim()) {
      errors.landmark = "Landmark is required";
    }
    if (!formData.city.trim()) {
      errors.city = "Town/City is required";
    } else if (!/^\d$/.test(formData.city)) {
      errors.fullName = "Enter a valid city name";
    }
    if (!formData.state.trim()) {
      errors.state = "State is required";
    } else if (!/^\d$/.test(formData.state)) {
      errors.state = "Invalid state name";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setAddresses([...addresses, formData]);
      clearForm();
      closeModal();
    }
  };

  const clearForm = () => {
    setFormData({
      fullName: "",
      mobile: "",
      pincode: "",
      area: "",
      landmark: "",
      city: "",
      state: "",
    });
    setErrors({});
  };

  const closeModal = () => {
    const modal = document.getElementById("addAddressModal");
    modal.classList.remove("show");
    modal.style.display = "none";
    document.querySelector(".modal-backdrop").remove();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  return (
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
                    Street/Area : {address.street}
                  </p>
                  <p className="card-text text-left">
                    Landmark : {address.landmark}
                  </p>
                  <p className="card-text text-left">
                    Town/City : {address.city}
                  </p>
                  <p className="card-text text-left">State : {address.state}</p>
                  <p className="card-text text-left">
                    Pincode : {address.pincode}
                  </p>
                  <p className="card-text text-left">Phone : {address.phone}</p>
                  <div>
                    <button
                      className="btn btn-outline-dark edit-address"
                      data-toggle="modal"
                      data-target="#editAddressModal"
                      style={{ marginLeft: "55%" }}
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
                      <label htmlFor="areaInput">
                        Street/Area<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.area && "is-invalid"
                        }`}
                        id="areaInput"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                      />
                      <span className="text-danger">{errors.area}</span>
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
                    <div className="form-group">
                      <label htmlFor="stateDropdown">
                        State<span style={{ color: "red" }}>*</span>
                      </label>
                      <select
                        className={`form-control ${
                          errors.state && "is-invalid"
                        }`}
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
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">
                          Himachal Pradesh
                        </option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                        <option value="Andaman and Nicobar Islands">
                          Andaman and Nicobar Islands
                        </option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Dadra and Nagar Haveli and Daman and Diu">
                          Dadra and Nagar Haveli and Daman and Diu
                        </option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>

                        {/* Add other options */}
                      </select>
                      <span className="text-danger">{errors.state}</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
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
                        className={`form-control ${
                          errors.city && "is-invalid"
                        }`}
                        id="cityInput"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                      />
                      <span className="text-danger">{errors.city}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary mr-4 "
                    style={{ marginLeft: "66%" }}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary mr-4 "
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressCard;
