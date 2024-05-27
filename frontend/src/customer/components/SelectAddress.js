import React from "react";

const SelectAddress = ({
  selectedAddress,
  handleAddressSelection,
  nextStep,
  prevStep,
}) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">Select Shipping Address</h2>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="shippingAddress"
            id="homeAddress"
            value="home"
            checked={selectedAddress === "home"}
            onChange={() => handleAddressSelection("home")}
          />
          <label className="form-check-label" htmlFor="homeAddress">
            Home
          </label>
          <p className="mb-0">
            123 Main Street, Anytown, CA 12345
            <br />
            (123) 456-7890
          </p>
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="shippingAddress"
            id="officeAddress"
            value="office"
            checked={selectedAddress === "office"}
            onChange={() => handleAddressSelection("office")}
          />
          <label className="form-check-label" htmlFor="officeAddress">
            Office
          </label>
          <p className="mb-0">
            456 Corporate Drive, Anytown, CA 12345
            <br />
            (123) 456-7890
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-secondary" onClick={prevStep}>
            Back
          </button>
          <button className="btn btn-primary" onClick={nextStep}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectAddress;
