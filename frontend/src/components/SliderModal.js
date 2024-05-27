import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";
import { addSliderImageToJson } from "../slices/SliderSlice";

export const SliderModal = () => {
  const dispatch = useDispatch();
  const sliderImages = useSelector((state) => state.sliderImages.sliderImagesList);

  const [showModal, setShowModal] = useState(false);
  const defaultData = {
    sliderImageName: "",
    sliderImageUrl: "",
  };
  const [formData, setFormData] = useState({ ...defaultData });
  const [formErrors, setFormErrors] = useState({
    sliderImageName: "",
    sliderImageUrl: "",
  });
  const [image, setImage] = useState(null);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormErrors({
      sliderImageName: "",
      sliderImageUrl: "",
    });
    setFormData({ ...defaultData });
    setImage(null);
  };

  const validateForm = () => {
    let valid = true;
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    const newErrors = {
      sliderImageName: !formData.sliderImageName.trim() ? "Slider Name is required." : "",
      sliderImageUrl: !formData.sliderImageUrl
        ? "Slider Image URL is required."
        : !urlRegex.test(formData.sliderImageUrl)
        ? "Invalid URL format."
        : "",
    };

    setFormErrors(newErrors);

    Object.values(newErrors).forEach((error) => {
      if (error) {
        valid = false;
      }
    });

    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const newSliderImage = {
        sliderImageName: formData.sliderImageName,
        sliderImageUrl: formData.sliderImageUrl,
      };

      dispatch(addSliderImageToJson(newSliderImage))
        .then(() => closeModal())
        .catch((error) => console.error("Failed to add slider image:", error));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    let newErrors = { ...formErrors };

    if (name === "sliderImageName") {
      newErrors.sliderImageName = !value.trim() ? "Slider Name is required." : "";
    }

    if (name === "sliderImageUrl") {
      const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
      newErrors.sliderImageUrl = !value.trim()
        ? "Slider Image URL is required."
        : !urlRegex.test(value)
        ? "Invalid URL format."
        : "";
      setImage(urlRegex.test(value) ? value : null);
    }

    setFormErrors(newErrors);
  };

  return (
    <div className="d-flex justify-content-end">
      <Button variant="dark" className="mb-3 me-3" onClick={openModal}>
        Add Slider
      </Button>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Home Slider</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formsliderImageName">
              <Form.Label>Slider Name</Form.Label>
              <Form.Control
                type="text"
                name="sliderImageName"
                value={formData.sliderImageName}
                onChange={handleInputChange}
                isInvalid={!!formErrors.sliderImageName}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.sliderImageName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSliderImageUrl">
              <Form.Label>Slider Image URL</Form.Label>
              <Form.Control
                type="text"
                name="sliderImageUrl"
                value={formData.sliderImageUrl}
                onChange={handleInputChange}
                isInvalid={!!formErrors.sliderImageUrl}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.sliderImageUrl}
              </Form.Control.Feedback>
              {image && (
                <div className="container">
                  <div className="row">
                    <img
                      src={image}
                      alt="form-image"
                      className="w-75 mt-4 mx-auto"
                    />
                  </div>
                </div>
              )}
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
              <Button variant="primary" type="submit" className="ms-2">
                Add
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
