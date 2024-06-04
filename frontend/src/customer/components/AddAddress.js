
import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addAddressToJson } from "../slices/addressSlice";

export default function AddAddress({ show, onHide }) {
  const [formData, setFormData] = useState({
    fullName: "",
    street: "",

    mobileNumber: "",
    pincode: "",

    city: "",
    state: ""
  });




  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  const status = useSelector(state => state.addresses.status);
  const [customerId, setCustomerId] = useState(1);

  useEffect(() => {

    const storedCustomerData = sessionStorage.getItem("customerData");

 

    if (storedCustomerData) {
      const parsedCustomer = JSON.parse(storedCustomerData);
      if (parsedCustomer && parsedCustomer.id) {
        setCustomerId(parsedCustomer.id);
      }
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      dispatch(addAddressToJson({ customerId, address: formData }));
      setFormData({
        fullName: "",
        street:"",
        mobileNumber: "",
        pincode: "",
       
        city: "",
        state: ""
      });
      onHide();

    } else {
      setFormErrors(errors);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
    setFormErrors(prevFormErrors => ({
      ...prevFormErrors,

      [name]: ""

    }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
    }
    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      errors.mobileNumber = "Mobile number must be 10 digits";
    }
    if (!formData.pincode.trim()) {
      errors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      errors.pincode = "Pincode must be 6 digits";
    }
    if (!formData.street.trim()) {
      errors.area = "Street/Area is required";
    }
    if (!formData.city.trim()) {
      errors.city = "Town/City is required";
    }
    if (!formData.state.trim()) {
      errors.state = "State is required";
    }



  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Address</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="addressForm" onSubmit={handleSubmit}>
          <Form.Group controlId="fullNameInput">
            <Form.Label>
              Full name (First and Last name) <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
  type="text"
  className={formErrors.fullName && "is-invalid"}
  name="fullName" // Corrected name attribute
  value={formData.fullName}
  onChange={handleChange}
/>

            {formErrors.fullName && <span className="text-danger">{formErrors.fullName}</span>}
          </Form.Group>
          <Form.Group controlId="areaInput">
            <Form.Label>
              Street/Area <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="text"
              className={formErrors.street && "is-invalid"}
              name="street"
              value={formData.street}
              onChange={handleChange}
            />
            {formErrors.street && <span className="text-danger">{formErrors.street}</span>}
          </Form.Group>
          <Form.Group controlId="pincodeInput">
            <Form.Label>
              Pincode <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="text"
              className={formErrors.pincode && "is-invalid"}
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
            {formErrors.pincode && <span className="text-danger">{formErrors.pincode}</span>}
          </Form.Group>
          <Form.Group controlId="cityInput">
            <Form.Label>
              Town/City <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="text"
              className={formErrors.city && "is-invalid"}
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            {formErrors.city && <span className="text-danger">{formErrors.city}</span>}
          </Form.Group>
          <Form.Group controlId="stateInput">
            <Form.Label>
              State <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              as="select"
              className={formErrors.state && "is-invalid"}
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">Select State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              {/* Add other states here */}
            </Form.Control>
            {formErrors.state && <span className="text-danger">{formErrors.state}</span>}
          </Form.Group>
          <Form.Group controlId="mobileInput">
            <Form.Label>
              Mobile <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="text"
              className={formErrors.mobileNumber && "is-invalid"}
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            {formErrors.mobileNumber && <span className="text-danger">{formErrors.mobileNumber}</span>}
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Address
          </Button>
        </Form>
      </Modal.Body>

        <Modal.Title>Add New Address</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="addressForm" onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="formStreet" className="mb-2">
            <Form.Label column sm="3">
              Street
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                value={formData.street}
                name="street"
                onChange={handleChange}
                isInvalid={!!formErrors.street}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.street}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formCity" className="mb-2">
            <Form.Label column sm="3">
              City
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                value={formData.city}
                name="city"
                onChange={handleChange}
                isInvalid={!!formErrors.city}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.city}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formState" className="mb-2">
            <Form.Label column sm="3">
              State
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                value={formData.state}
                name="state"
                onChange={handleChange}
                isInvalid={!!formErrors.state}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.state}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPincode" className="mb-2">
            <Form.Label column sm="3">
              Pincode
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                value={formData.zipCode}
                name="zipCode"
                onChange={handleChange}
                isInvalid={!!formErrors.zipCode}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.zipCode}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" type="submit" form="addressForm" disabled={status === 'loading'}>
          {status === 'loading' ? 'Saving...' : 'Save Changes'}
        </Button>
      </Modal.Footer>

    </Modal>
  );
}
