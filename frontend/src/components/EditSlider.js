import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export const EditSliderModal = ({ show, handleClose, handleSubmit, slider }) => {
  const [sliderImageName, setSliderImageName] = useState('');
  const [sliderImageUrl, setSliderImageUrl] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [nameError, setNameError] = useState('');
  const [imageUrlError, setImageUrlError] = useState('');

  useEffect(() => {
    if (slider) {
      setSliderImageName(slider.sliderImageName);
      setSliderImageUrl(slider.sliderImageUrl);
      setImagePreview(slider.sliderImageUrl);
    }
  }, [slider]);

  const handleImageUrlChange = (e) => {
    const value = e.target.value;
    setSliderImageUrl(value);
    setImagePreview(value);

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    if (!value.trim()) {
      setImageUrlError('Slider Image URL is required.');
    } else if (!urlRegex.test(value)) {
      setImageUrlError('Invalid URL format.');
    } else {
      setImageUrlError('');
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setSliderImageName(value);
    if (!value.trim()) {
      setNameError('Slider Name is required.');
    } else {
      setNameError('');
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!sliderImageName.trim()) {
      setNameError('Slider Name is required.');
      return;
    }

    if (!sliderImageUrl.trim()) {
      setImageUrlError('Slider Image URL is required.');
      return;
    }

    handleSubmit({
      sliderImageId: slider.sliderImageId,
      sliderImageName: sliderImageName,
      sliderImageUrl: sliderImageUrl,
    });
  };

  const handleCloseModal = () => {
    handleClose();
    setSliderImageName('');
    setSliderImageUrl('');
    setImagePreview('');
    setNameError('');
    setImageUrlError('');
  };

  if (!slider) {
    return null;
  }

  return (
    <Modal show={show} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Slider</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formsliderImageName">
            <Form.Label>Slider Name</Form.Label>
            <Form.Control
              type="text"
              value={sliderImageName}
              onChange={handleNameChange}
              isInvalid={!!nameError}
            />
            <Form.Control.Feedback type="invalid">
              {nameError}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSliderImageUrl">
            <Form.Label>Slider Image URL</Form.Label>
            <Form.Control
              type="text"
              value={sliderImageUrl}
              onChange={handleImageUrlChange}
              isInvalid={!!imageUrlError}
            />
            <Form.Control.Feedback type="invalid">
              {imageUrlError}
            </Form.Control.Feedback>
            {imageUrlError === '' && imagePreview && (
              <div className="mt-2 text-center">
                <img src={imagePreview} alt="Slider Preview" className="img-fluid" style={{ maxHeight: '200px' }} />
              </div>
            )}
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleFormSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
