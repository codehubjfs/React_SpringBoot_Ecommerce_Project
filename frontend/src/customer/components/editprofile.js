import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateCustomerProfile } from "../slices/CustomerSlice";

function EditProfile() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.customers.customer);

  const [formData, setFormData] = useState({
    id: userData.id, // Add id to formData
    fname: userData.fname,
    email: userData.email,
    password: userData.password,
    confirmPassword: userData.password,
    phone: userData.phone,
    status: userData.status,
    membership: userData.membership,
    dateofregister: userData.dateofregister,
  });

  const [errors, setErrors] = useState({
    fn: "",
    em: "",
    pas: "",
    confirmPas: "",
    ph: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };
    const passwordPattern =
      /^(?=.[A-Z])(?=.[@#$%!^&])(?=.[0-9])(?=.*[a-zA-Z]).{8,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;
    const namePattern = /^[a-zA-Z ]{1,15}$/;

    switch (fieldName) {
      case "fname":
        newErrors.fn = value.trim()
          ? namePattern.test(value)
            ? ""
            : "Full Name must contain only alphabets and be maximum 15 characters long"
          : "Full Name can't be empty";
        break;
      case "email":
        newErrors.em = value
          ? emailPattern.test(value)
            ? ""
            : "Invalid email format"
          : "Email can not be empty";
        break;
      case "password":
        newErrors.pas = value
          ? passwordPattern.test(value)
            ? ""
            : "Password must contain at least one uppercase letter, one lowercase letter, and one digit"
          : "Password can't be empty";
        break;
      case "confirmPassword":
        newErrors.confirmPas =
          value === formData.password ? "" : "Passwords don't match";
        break;
      case "phone":
        newErrors.ph = value
          ? phonePattern.test(value)
            ? ""
            : "Invalid phone number"
          : "Phone Number can't be empty";
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const clearError = (errorField) => {
    setErrors({
      ...errors,
      [errorField]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(updateCustomerProfile(formData))
        .unwrap()
        .then(() => setShowModal(true))
        .catch((error) => console.error("Failed to update profile:", error));
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const validateForm = () => {
    let isValid = true;
    const { fname, email, password, confirmPassword, phone } = formData;

    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;
    const namePattern = /^[a-zA-Z ]{1,15}$/;

    const newErrors = { ...errors };

    if (!fname.trim()) {
      newErrors.fn = "Full Name can't be empty";
      isValid = false;
    } else if (!namePattern.test(fname)) {
      newErrors.fn =
        "Full Name must contain only alphabets and be maximum 15 characters long";
      isValid = false;
    }

    if (!password) {
      newErrors.pas = "Password can't be empty";
      isValid = false;
    } else if (password.length < 8) {
      newErrors.pas = "Password must be at least 8 characters long";
      isValid = false;
    } else if (!passwordPattern.test(password)) {
      newErrors.pas =
        "Password must contain at least one uppercase letter, one lowercase letter, and one digit";
      isValid = false;
    }

    if (!confirmPassword) {
      newErrors.confirmPas = "Confirm Password can't be empty";
      isValid = false;
    } else if (confirmPassword !== password) {
      newErrors.confirmPas = "Passwords don't match";
      isValid = false;
    }

    if (!email) {
      newErrors.em = "Email can not be empty";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      newErrors.em = "Invalid email format";
      isValid = false;
    }

    if (!phone) {
      newErrors.ph = "Phone Number can't be empty";
      isValid = false;
    } else if (!phonePattern.test(phone)) {
      newErrors.ph = "Invalid phone number";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  return (
    <div className="edit-profile-box">
      <div>
        <br />
        <p>{formData.id}</p>
      </div>
      <h1 className="text-center mb-4">EDIT PROFILE</h1>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="fname">
                <Form.Label>
                  Full Name (First and Last Name)
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Firstname"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                />
                <Form.Text className="text-danger">{errors.fn}</Form.Text>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="email">
                <Form.Label>
                  Email <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Form.Text className="text-danger">{errors.em}</Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="password">
                <Form.Label>
                  Password <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <Form.Text className="text-danger">{errors.pas}</Form.Text>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="confirmPassword">
                <Form.Label>
                  Confirm Password <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <Form.Text className="text-danger">
                  {errors.confirmPas}
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="phone">
                <Form.Label>
                  Phone Number <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Form.Text className="text-danger">{errors.ph}</Form.Text>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="image">
                <Form.Label>Profile Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  name="image"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="text-center">
            <Button
              variant="primary"
              type="submit"
              style={{ marginRight: "10px" }}
            >
              Save
            </Button>
            <Link to="/profile">
              <Button variant="secondary" className="ms-2">
                Cancel
              </Button>
            </Link>
          </div>
        </Form>
        <div>
          <br />
        </div>
      </Container>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Profile edited successfully.</Modal.Body>
        <Modal.Footer>
          <Link to="/profile">
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default EditProfile;
