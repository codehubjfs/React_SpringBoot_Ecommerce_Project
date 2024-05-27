import React, { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

function CreateSellerOffer() {
  const [showModal, setShowModal] = useState(false);
  const [offerName, setOfferName] = useState('');
  const [discount, setDiscount] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setOfferName('');
    setDescription('');
    setDiscount('');
    setStartDate('');
    setEndDate('');
    setFormErrors({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log({
        offerName,
        description,
        discount,
        startDate,
        endDate,
      });
      // Submit the form data to the server or perform further actions
    } else {
      setFormErrors(errors);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const errors = { ...formErrors };

    switch (name) {
      case 'offerName':
        if (!value.trim()) {
          errors.offerName = 'Offer Name is required.';
        } else {
          delete errors.offerName;
        }
        break;
      case 'description':
        if (!value.trim()) {
          errors.description = 'Description is required.';
        } else {
          delete errors.description;
        }
        break;
      case 'discount':
        if (!value.trim()) {
          errors.discount = 'Discount is required.';
        } else if (!/^\d+(\.\d{1,2})?$/.test(value.trim())) {
          errors.discount = 'Please enter a valid discount (e.g., 20 or 20.5).';
        } else {
          delete errors.discount;
        }
        break;
      case 'startDate':
        if (!value.trim()) {
          errors.startDate = 'Start Date is required.';
        } else {
          const startDateValue = new Date(value);
          const currentDate = new Date();
          currentDate.setHours(0, 0, 0, 0);
          if (isNaN(startDateValue) || startDateValue < currentDate) {
            errors.startDate = 'Start date must be today or a future date.';
          } else {
            delete errors.startDate;
          }
        }
        break;
      case 'endDate':
        if (!value.trim()) {
          errors.endDate = 'End Date is required.';
        } else {
          const endDateValue = new Date(value);
          const startDateValue = new Date(startDate);
          const currentDate = new Date();
          currentDate.setHours(0, 0, 0, 0);

          if (endDateValue < startDateValue || endDateValue < currentDate) {
            errors.endDate = 'End date must be the start date or a future date.';
          } else {
            delete errors.endDate;
          }
        }
        break;
      default:
        break;
    }

    setFormErrors(errors);
    switch (name) {
      case 'offerName':
        setOfferName(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'discount':
        setDiscount(value);
        break;
      case 'startDate':
        setStartDate(value);
        break;
      case 'endDate':
        setEndDate(value);
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!offerName.trim()) {
      errors.offerName = 'Offer Name is required.';
    }

    if (!description.trim()) {
      errors.description = 'Description is required.';
    }

    if (!discount.trim()) {
      errors.discount = 'Discount is required.';
    } else if (!/^\d+(\.\d{1,2})?$/.test(discount.trim())) {
      errors.discount = 'Please enter a valid discount (e.g., 20 or 20.5).';
    }

    const startDateValue = new Date(startDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!startDate.trim() || isNaN(startDateValue) || startDateValue < today) {
      errors.startDate = 'Start date must be today or a future date.';
    }

    const endDateValue = new Date(endDate);
    const selectedStartDate = new Date(startDate);

    if (!endDate.trim() || isNaN(endDateValue) || endDateValue < selectedStartDate || endDateValue < today) {
      errors.endDate = 'End date must be the start date or a future date.';
    }

    return errors;
  };

  return (
    <div className="d-flex justify-content-end">
      <Button variant="dark" className="create-offer mt-1 mb-3 butn" onClick={openModal}>
        Create New Offer
      </Button>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create Seller Offer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formOfferName" className="mb-2">
              <Form.Label column sm="3">
                Offer Name
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" value={offerName} name="offerName" onChange={handleInputChange} isInvalid={!!formErrors.offerName} />
                <Form.Control.Feedback type="invalid">
                  {formErrors.offerName}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formDescription" className="mb-2">
              <Form.Label column sm="3">
                Description
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" value={description} name="description" onChange={handleInputChange} isInvalid={!!formErrors.description} />
                <Form.Control.Feedback type="invalid">
                  {formErrors.description}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formDiscount" className="mb-2">
              <Form.Label column sm="3">
                Discount (%)
              </Form.Label>
              <Col sm="9">
                <Form.Control type="number" value={discount} name="discount" onChange={handleInputChange} isInvalid={!!formErrors.discount} />
                <Form.Control.Feedback type="invalid">
                  {formErrors.discount}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formStartDate" className="mb-2">
              <Form.Label column sm="3">
                Start Date
              </Form.Label>
              <Col sm="9">
                <Form.Control type="date" value={startDate} name="startDate" onChange={handleInputChange} isInvalid={!!formErrors.startDate} />
                <Form.Control.Feedback type="invalid">
                  {formErrors.startDate}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formEndDate" className="mb-2">
              <Form.Label column sm="3">
                End Date
              </Form.Label>
              <Col sm="9">
                <Form.Control type="date" value={endDate} name="endDate" onChange={handleInputChange} isInvalid={!!formErrors.endDate} />
                <Form.Control.Feedback type="invalid">
                  {formErrors.endDate}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateSellerOffer;

