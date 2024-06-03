import React, { useState } from 'react';
import { Button, Col, Form, Modal, ModalFooter, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export default function CreateOffer({ onCreate }) {
  const [showModal, setShowModal] = useState(false);
  const [offerName, setOfferName] = useState('');
  const [productID, setProductID] = useState('');
  const [discount, setDiscount] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const dispatch = useDispatch();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setOfferName('');
    setProductID('');
    setDiscount('');
    setStartDate('');
    setEndDate('');
    setFormErrors({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      const newOffer = {
        offerName,
        productId: productID,
        discount,
        startDate,
        endDate
      };
      onCreate(newOffer);
      closeModal();
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
        } else if (!/^[a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(value)) {
          errors.offerName = 'Please enter a valid Offer Name.';
        } else {
          delete errors.offerName;
        }
        break;
      case 'productID':
        if (!value.trim()) {
          errors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
        } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
          errors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} should contain only letters and numbers.`;
        } else {
          delete errors[name];
        }
        break;
      case 'discount':
        if (!value.trim()) {
          errors.discount = 'Discount is required.';
        } else if (!/^((100)|(\d{1,2}(\.\d*)?))$/.test(value)) {
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
            errors.endDate = 'End date must be after the start date and a future date.';
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
      case 'productID':
        setProductID(value);
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
    } else if (!/^[a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(offerName.trim())) {
      errors.offerName = 'Please enter a valid Offer Name.';
    }

    if (!productID) {
      errors.productID = 'Product ID is required.';
    } else if (!/^\d+$/.test(productID)) {
      errors.productID = 'Product ID should contain only numbers.';
    }

    if (!discount.trim()) {
      errors.discount = 'Discount is required.';
    } else if (!/^((100)|(\d{1,2}(\.\d*)?))$/.test(discount)) {
      errors.discount = 'Please enter a valid discount (e.g., 20 or 20.5).';
    }

    if (!startDate.trim()) {
      errors.startDate = 'Start Date is required.';
    } else {
      const startDateValue = new Date(startDate);
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);

      if (isNaN(startDateValue) || startDateValue < currentDate) {
        errors.startDate = 'Start date must be today or a future date.';
      }
    }

    if (!endDate.trim()) {
      errors.endDate = 'End Date is required.';
    } else {
      const endDateValue = new Date(endDate);
      const startDateValue = new Date(startDate);
      const currentDate = new Date();
          currentDate.setHours(0, 0, 0, 0);

      if (endDateValue < startDateValue || endDateValue < currentDate) {
        errors.endDate = 'End date must be after the start date and a future date.';
      }
    }

    return errors;
  };

  return (
    <>
      <div className="align-right">
        <button variant="primary" onClick={openModal} className="custom-button mt-3">
          Add Offer
        </button>
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create Offer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formOfferName">
              <Form.Label>Offer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter offer name"
                name="offerName"
                value={offerName}
                onChange={handleInputChange}
                isInvalid={!!formErrors.offerName}
              />
              <Form.Control.Feedback type="invalid">{formErrors.offerName}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formProductID">
              <Form.Label>Product ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product ID"
                name="productID"
                value={productID}
                onChange={handleInputChange}
                isInvalid={!!formErrors.productID}
              />
              <Form.Control.Feedback type="invalid">{formErrors.productID}</Form.Control.Feedback>
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formCategoryID">
              <Form.Label>Category ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category ID"
                name="categoryID"
                value={categoryID}
                onChange={handleInputChange}
                isInvalid={!!formErrors.categoryID}
              />
              <Form.Control.Feedback type="invalid">{formErrors.categoryID}</Form.Control.Feedback>
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="formDiscount">
              <Form.Label>Discount (%)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter discount"
                name="discount"
                value={discount}
                onChange={handleInputChange}
                isInvalid={!!formErrors.discount}
              />
              <Form.Control.Feedback type="invalid">{formErrors.discount}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formStartDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={startDate}
                onChange={handleInputChange}
                isInvalid={!!formErrors.startDate}
              />
              <Form.Control.Feedback type="invalid">{formErrors.startDate}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEndDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={endDate}
                onChange={handleInputChange}
                isInvalid={!!formErrors.endDate}
              />
              <Form.Control.Feedback type="invalid">{formErrors.endDate}</Form.Control.Feedback>
            </Form.Group>
            <ModalFooter>
            <Button variant="secondary" onClick={closeModal} className="ms-2">
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            </ModalFooter>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
