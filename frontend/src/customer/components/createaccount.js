import React, { useState } from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../createaccountstyle.css";
import { useDispatch } from "react-redux";
import { registerCustomer } from "../slices/CustomerSlice";
import SuccessModal from './Loginmodal'; // Import the SuccessModal component

function CreateAccount() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    phone: "",
    password: "",
    newpassword: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
    membership: "",
    status: "",
    dateofregister: "",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [cityOptions, setCityOptions] = useState([]);

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/signin");
  };

  const indianStates = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const citiesByState = {
    "Tamil Nadu": [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Tiruchirappalli",
      "Salem",
      "Tirunelveli",
      "Tiruppur",
      "Erode",
      "Vellore",
      "Thoothukudi",
      "Dindigul",
      "Thanjavur",
      "Ranipet",
      "Nagercoil",
      "Karur",
    ],
    Kerala: [
      "Thiruvananthapuram",
      "Kochi",
      "Kozhikode",
      "Thrissur",
      "Malappuram",
      "Kannur",
      "Kollam",
      "Palakkad",
      "Alappuzha",
      "Kottayam",
      "Kasaragod",
      "Pathanamthitta",
      "Idukki",
      "Wayanad",
      "Ernakulam",
    ],
    "Andhra Pradesh": [
      "Visakhapatnam",
      "Vijayawada",
      "Guntur",
      "Nellore",
      "Kurnool",
      "Rajahmundry",
      "Tirupati",
      "Kakinada",
      "Anantapur",
      "Kadapa",
      "Vizianagaram",
      "Eluru",
      "Ongole",
      "Nandyal",
      "Machilipatnam",
    ],
    Karnataka: [
      "Bangalore",
      "Mysore",
      "Hubli",
      "Mangalore",
      "Belgaum",
      "Davanagere",
      "Bellary",
      "Shimoga",
      "Gulbarga",
      "Dharwad",
      "Vijayapura",
      "Raichur",
      "Bidar",
      "Hospet",
      "Udupi",
    ],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "state") {
      setCityOptions(citiesByState[value] || []);
      setFormData((prevData) => ({ ...prevData, city: "", state: value }));
    }

    validateField(name, value);
  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "fname":
        if (!value.trim()) {
          newErrors.fname = "Name can't be empty";
        } else if (value.length >= 15) {
          newErrors.fname = "Maximum length is 15";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          newErrors.fname = "Invalid Name";
        } else {
          delete newErrors.fname;
        }
        break;
      case "email":
        if (!value.trim()) {
          newErrors.email = "Email can't be empty";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = "Invalid email format";
        } else {
          delete newErrors.email;
        }
        break;
      case "phone":
        if (!value.trim()) {
          newErrors.phone = "Phone Number can't be empty";
        } else if (!/^\d{10}$/.test(value)) {
          newErrors.phone = "Invalid phone number";
        } else {
          delete newErrors.phone;
        }
        break;
      case "password":
        if (!value.trim()) {
          newErrors.password = "Password can't be empty";
        } else if (value.length < 8) {
          newErrors.password = "Password must be at least 8 characters long";
        } else if (
          !/^(?=.*[A-Z])(?=.*[@#$%!^&*])(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/.test(
            value
          )
        ) {
          newErrors.password =
            "Password must contain at least one uppercase letter, one lowercase letter, and one digit";
        } else {
          delete newErrors.password;
        }
        break;
      case "newpassword":
        if (!value.trim()) {
          newErrors.newpassword = "Confirm Password can't be empty";
        } else if (value !== formData.password) {
          newErrors.newpassword = "Passwords don't match";
        } else {
          delete newErrors.newpassword;
        }
        break;
      case "area":
        if (!value.trim()) {
          newErrors.area = "Area can't be empty";
        } else {
          delete newErrors.area;
        }
        break;
      case "city":
        if (!value.trim()) {
          newErrors.city = "City can't be empty";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          newErrors.city = "City should contain alphabets only";
        } else {
          delete newErrors.city;
        }
        break;
      case "state":
        if (!value.trim()) {
          newErrors.state = "Please select your State";
        } else {
          delete newErrors.state;
        }
        break;
      case "pincode":
        if (!value.trim()) {
          newErrors.pincode = "Pincode can't be empty";
        } else if (!/^\d{6}$/.test(value)) {
          newErrors.pincode = "Invalid pincode";
        } else {
          delete newErrors.pincode;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fname.trim()) {
      newErrors.fname = "Name can't be empty";
    } else if (formData.fname.length >= 15) {
      newErrors.fname = "Maximum length is 15";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fname)) {
      newErrors.fname = "Invalid Name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email can't be empty";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number can't be empty";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password can't be empty";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    } else if (
      !/^(?=.*[A-Z])(?=.*[@#$%!^&*])(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, and one digit";
    }

    if (!formData.newpassword.trim()) {
      newErrors.newpassword = "Confirm Password can't be empty";
    } else if (formData.newpassword !== formData.password) {
      newErrors.newpassword = "Passwords don't match";
    }

    if (!formData.area.trim()) {
      newErrors.area = "Address can't be empty";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City can't be empty";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.city)) {
      newErrors.city = "City should contain alphabets only";
    }

    if (!formData.state.trim()) {
      newErrors.state = "Please select your State";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode can't be empty";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Invalid pincode";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation before submission
    const isValid = validateForm();

    if (!isValid) {
      return;
    }
    const customerData = {
      fname: formData.fname,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      addresses: [
        {
          area: formData.area,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
        },
      ],
    };

    dispatch(registerCustomer(customerData)).then((result) => {
      if (result.type === "customers/registerCustomer/fulfilled") {
        setShowModal(true);
      } else {
        alert("Registration failed. Please try again.");
      }
    });
  };

  return (
    <div className="box-container">
      <h1 className="text-center mb-4">CREATE ACCOUNT</h1>
      <SuccessModal
        show={showModal}
        handleClose={handleCloseModal}
        message="Account Created Successfully!"
      />
      <div className="container mt-5">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group controlId="fname">
                <Form.Label>
                  Full Name (First and Last Name)
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Fullname"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                />
                {errors.fname && (
                  <Form.Text
                    className="error-message"
                    id="fn"
                    style={{ color: "red" }}
                  >
                    {errors.fname}{" "}
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="email">
                <Form.Label>
                  Email <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <Form.Text
                    className="error-message"
                    id="em"
                    style={{ color: "red" }}
                  >
                    {errors.email}
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="phone">
                <Form.Label>
                  Phone Number<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <Form.Text
                    className="error-message"
                    id="ph"
                    style={{ color: "red" }}
                  >
                    {errors.phone}
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}>
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
                {errors.password && (
                  <Form.Text
                    className="error-message"
                    id="pas"
                    style={{ color: "red" }}
                  >
                    {errors.password}
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="newpassword">
                <Form.Label>
                  Confirm Password <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="newpassword"
                  value={formData.newpassword}
                  onChange={handleChange}
                />
                {errors.newpassword && (
                  <Form.Text
                    className="error-message"
                    id="pas1"
                    style={{ color: "red" }}
                  >
                    {errors.newpassword}
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="area">
                <Form.Label>
                  Street/Area<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={1}
                  style={{ resize: "none" }}
                  placeholder="Enter Address"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                />
                {errors.area && (
                  <Form.Text
                    className="error-message"
                    id="ad"
                    style={{ color: "red" }}
                  >
                    {errors.area}
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group controlId="state" className="mb-3 d-flex flex-column">
                <Form.Label>
                  State <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  style={{
                    height: "40px",

                    border: "2px solid #ccc",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                >
                  <option value="">Select State</option>
                  {indianStates.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </Form.Select>
                {errors.state && (
                  <Form.Text
                    className="error-message"
                    id="stateError"
                    style={{ color: "red" }}
                  >
                    {errors.state}
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="city" className="mb-3 d-flex flex-column">
                <Form.Label>
                  City <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  style={{
                    height: "40px",
                    border: "2px solid #ccc",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                >
                  <option value="">Select City</option>
                  {cityOptions.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </Form.Select>
                {errors.city && (
                  <Form.Text
                    className="error-message"
                    id="cityError"
                    style={{ color: "red" }}
                  >
                    {errors.city}
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="pincode">
                <Form.Label>
                  Pincode<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                />
                {errors.pincode && (
                  <Form.Text
                    className="error-message"
                    id="pin"
                    style={{ color: "red" }}
                  >
                    {errors.pincode}
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
          </Row>
          <div className="text-center">
            <Button variant="primary" type="submit">
              Create
            </Button>
            <Link to="/signin">
              <Button
                variant="secondary"
                className="ms-2"
                style={{ marginLeft: "5px" }}
              >
                Cancel
              </Button>
            </Link>
          </div>
        </Form>
      </div>
      {/* <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>Account Created Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your account has been created successfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
}

export default CreateAccount;
