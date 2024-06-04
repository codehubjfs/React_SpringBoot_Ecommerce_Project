import React, { useState, useEffect } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addAddressToJson } from '../slices/addressSlice';

export default function AddAddress({ show, onHide }) {
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  const status = useSelector(state => state.addresses.status);
  const [customerId, setCustomerId] = useState(1);

  useEffect(() => {
    const storedCustomerData = sessionStorage.getItem('customerData');
    if (storedCustomerData) {
      const parsedCustomer = JSON.parse(storedCustomerData);
      if (parsedCustomer && parsedCustomer.id) {
        setCustomerId(parsedCustomer.id);
      }
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      try {
        dispatch(addAddressToJson({ customerId, address: formData }));
        setFormData({
          street: '',
          city: '',
          state: '',
          zipCode: '',
        });
        onHide();
      } catch (error) {
        console.error('Error adding address:', error.message);
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
    if (!formData.street.trim()) errors.street = 'Street is required';
    if (!formData.city.trim()) errors.city = 'City is required';
    if (!formData.state.trim()) errors.state = 'State is required';
    if (!/^\d{6}$/.test(formData.zipCode)) errors.zipCode = 'Pincode must be 6 digits';
    return errors;
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
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
