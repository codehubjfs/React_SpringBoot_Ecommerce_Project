import React, { useState, useEffect } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateAddressInJson } from '../slices/addressSlice';

export default function EditAddress({ show, onHide, addressData }) {
  //let add=useSelector((state)=>state.address.addresses);
  console.log("addressdata2",addressData);
  const [formData, setFormData] = useState({
    id:'',
    fullName:'',
    street: '',
    city: '',
    state: '',
    pincode:'',
mobileNumber:''
  });
 
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  const status = useSelector(state => state.addresses.status);
  const [customerId, setCustomerId] = useState(null); // Initialize to null

  useEffect(() => {
    const storedCustomerData = sessionStorage.getItem('customerData');
    if (storedCustomerData) {
      const parsedCustomer = JSON.parse(storedCustomerData);
      if (parsedCustomer && parsedCustomer.id) {
        setCustomerId(parsedCustomer.id);
      }
    }
  }, []);

  useEffect(() => {
    console.log("addressesdata1",addressData);
    if (addressData) {
      setFormData({
        id:addressData.id,
        fullName:addressData.fullName,
        street: addressData.street ,
        city: addressData.city ,
        state: addressData.state,
        pincode: addressData.pincode,
        mobileNumber:addressData.mobileNumber
      });
    }
  }, [addressData]);

  useEffect(() => {
    if (status === 'succeeded') {
      onHide();
    }
  }, [status, onHide]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form Data before submission:', formData);
    const errors = validateForm(formData);
    console.log("error",errors);
    if (Object.keys(errors).length === 0) {
      try {
        
        await dispatch(updateAddressInJson({ customerId,address: formData }));
      } catch (error) {
        console.error('Error updating address:', error.message);
      }
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
      [name]: ''
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName= 'fullName is required';

    if (!formData.street.trim()) errors.street = 'Street is required';
    if (!formData.city.trim()) errors.city = 'City is required';
    if (!formData.state.trim()) errors.state = 'State is required';
    if (!/^\d{10}$/.test(formData.mobileNumber)) errors.mobileNumber = 'Mobile number  must be 10 digits';
    if (!/^\d{6}$/.test(formData.pincode)) errors.pincode = 'Zip code must be 6 digits';
    return errors;
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Address</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="addressForm" onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="formStreet" className="mb-2">
            <Form.Label column sm="3">
              fullName
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                value={formData.fullName}
                name="street"
                onChange={handleChange}
                isInvalid={!!formErrors.fullName
                }
              />
              <Form.Control.Feedback type="invalid">{formErrors.fullName}</Form.Control.Feedback>
            </Col>
          </Form.Group>
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
              <Form.Control.Feedback type="invalid">{formErrors.street}</Form.Control.Feedback>
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
              <Form.Control.Feedback type="invalid">{formErrors.city}</Form.Control.Feedback>
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
              <Form.Control.Feedback type="invalid">{formErrors.state}</Form.Control.Feedback>
            </Col>
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
