




import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { updateOfferInJson } from '../slices/OfferSlice';
import { useDispatch, useSelector } from 'react-redux';

export function EditOffer({ show, handleClose, editOfferData }) {
  const [offerName, setOfferName] = useState('');
  const [productID, setProductID] = useState('');
  const [discount, setDiscount] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  const { error: updateError } = useSelector((state) => state.offers);

  useEffect(() => {
    if (editOfferData) {
      setOfferName(editOfferData.offerName || '');
      setProductID(editOfferData.productId || '');
      setDiscount(editOfferData.discount || '');
      setStartDate(editOfferData.startDate || '');
      setEndDate(editOfferData.endDate || '');
    }
  }, [editOfferData]);

  useEffect(() => {
    if (updateError) {
      console.error('Update Error:', updateError);
    }
  }, [updateError]);

  const handleSubmit = (event) => {
    console.log(editOfferData.id)
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      dispatch(
        updateOfferInJson({
          id: editOfferData.offerId, // Ensure this uses 'id' from editOfferData
          offerName,
          productId: productID,
          discount,
          startDate,
          endDate,
        })
      ).then(() => {
        handleClose();
      });
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
        setOfferName(value);
        break;
      case 'productID':
        if (!value.trim()) {
          errors.productID = 'Product ID is required.';
        } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
          errors.productID = 'Product ID should contain only letters and numbers.';
        } else {
          delete errors.productID;
        }
        setProductID(value);
        break;
      case 'discount':
        if (!value.trim()) {
          errors.discount = 'Discount is required.';
        } else if (!/^\d+(\.\d{1,2})?$/.test(value.trim())) {
          errors.discount = 'Please enter a valid discount (e.g., 20 or 20.5).';
        } else {
          delete errors.discount;
        }
        setDiscount(value);
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
        setStartDate(value);
        break;
      case 'endDate':
        if (!value.trim()) {
          errors.endDate = 'End Date is required.';
        } else {
          const endDateValue = new Date(value);
          const startDateValue = new Date(startDate);
          const currentDate = new Date();
          currentDate.setHours(0, 0, 0, 0);
          if (isNaN(endDateValue) || endDateValue <= currentDate || endDateValue <= startDateValue) {
            errors.endDate = 'End date must be a future date and greater than the start date.';
          } else {
            delete errors.endDate;
          }
        }
        setEndDate(value);
        break;
      default:
        break;
    }

    setFormErrors(errors);
  };

  const validateForm = () => {
    const errors = {};

    if (!offerName.trim()) {
      errors.offerName = 'Offer Name is required.';
    }

    if (!productID) {
      errors.productID = 'Product ID is required.';
    } else if (!/^[a-zA-Z0-9]+$/.test(productID)) {
      errors.productID = 'Product ID should contain only letters and numbers.';
    }

    if (!discount.trim()) {
      errors.discount = 'Discount is required.';
    } else if (!/^\d+(\.\d{1,2})?$/.test(discount.trim())) {
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
      if (isNaN(endDateValue) || endDateValue <= currentDate || endDateValue <= startDateValue) {
        errors.endDate = 'End date must be a future date and greater than the start date.';
      }
    }

    return errors;
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Offer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="offerName">
            <Form.Label>Offer Name</Form.Label>
            <Form.Control
              type="text"
              name="offerName"
              value={offerName}
              onChange={handleInputChange}
              isInvalid={!!formErrors.offerName}
            />
            <Form.Control.Feedback type="invalid">{formErrors.offerName}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="productID">
            <Form.Label>Product ID</Form.Label>
            <Form.Control
              type="text"
              name="productID"
              value={productID}
              onChange={handleInputChange}
              isInvalid={!!formErrors.productID}
            />
            <Form.Control.Feedback type="invalid">{formErrors.productID}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="discount">
            <Form.Label>Discount (%)</Form.Label>
            <Form.Control
              type="text"
              name="discount"
              value={discount}
              onChange={handleInputChange}
              isInvalid={!!formErrors.discount}
            />
            <Form.Control.Feedback type="invalid">{formErrors.discount}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="startDate">
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

          <Form.Group controlId="endDate">
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

          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EditOffer;