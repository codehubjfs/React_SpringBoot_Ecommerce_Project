import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import { addOfferImageToJson } from '../slices/OfferImageSlice';

function AddOfferImage() {
  const dispatch = useDispatch();
  const offerImages = useSelector((state) => state.offerImages.offerImagesList);
  const [showModal, setShowModal] = useState(false);
  const [offerImageName, setOfferImageName] = useState('');
  const [offerImageUrl, setOfferImageUrl] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setOfferImageName('');
    setOfferImageUrl('');
    setFormErrors({});
  };

  const handleOfferImageNameChange = (event) => {
    const { value } = event.target;
    setOfferImageName(value);
    if (!value.trim()) {
      setFormErrors((errors) => ({ ...errors, offerImageName: 'Offer Name is required.' }));
    } else {
      setFormErrors((errors) => ({ ...errors, offerImageName: '' }));
    }
  };

  const handleOfferImageUrlChange = (event) => {
    const { value } = event.target;
    setOfferImageUrl(value);
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!value.trim()) {
      setFormErrors((errors) => ({ ...errors, offerImageUrl: 'Offer Image URL is required.' }));
    } else if (!urlPattern.test(value)) {
      setFormErrors((errors) => ({ ...errors, offerImageUrl: 'Invalid URL format.' }));
    } else {
      setFormErrors((errors) => ({ ...errors, offerImageUrl: '' }));
    }
  };

  const handleSubmit = () => {
    if (!offerImageName.trim() || !offerImageUrl.trim()) {
      setFormErrors({
        offerImageName: !offerImageName.trim() ? 'Offer Name is required.' : '',
        offerImageUrl: !offerImageUrl.trim() ? 'Offer Image URL is required.' : '',
      });
      return;
    }

    const newOfferImage = {
      offerImageId: offerImages.length + 1,
      offerImageUrl: offerImageUrl,
      offerImageName: offerImageName,
    };

    dispatch(addOfferImageToJson(newOfferImage))
      .then(() => closeModal())
      .catch((error) => console.error('Failed to add offer image:', error));
  };

  return (
    <div>
      <Button onClick={openModal} variant='dark' className='mt-2'>Add New Offer Image</Button>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Offer Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formOfferImageName">
            <Form.Label>Offer Image Name</Form.Label>
            <Form.Control
              type="text"
              name="offerImageName"
              value={offerImageName}
              placeholder="Enter the Offer Image Name"
              onChange={handleOfferImageNameChange}
              isInvalid={!!formErrors.offerImageName}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.offerImageName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formOfferImageUrl" className="mt-3">
            <Form.Label>Offer Image URL</Form.Label>
            <Form.Control
              type="text"
              name="offerImageUrl"
              value={offerImageUrl}
              placeholder="Enter the Offer Image URL"
              onChange={handleOfferImageUrlChange}
              isInvalid={!!formErrors.offerImageUrl}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.offerImageUrl}
            </Form.Control.Feedback>
          </Form.Group>
          {offerImageUrl && !formErrors.offerImageUrl && (
            <div className="mt-3">
              <img
                src={offerImageUrl}
                alt="Selected Offer"
                style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
              />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Close</Button>
          <Button variant="primary" onClick={handleSubmit}>Upload Image</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddOfferImage;