import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchSellerDetails } from '../slice/sellerDetailsSlice';
import './styles.css';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [identifierError, setIdentifierError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [forgotPasswordEmailError, setForgotPasswordEmailError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isValidEmailOrPhone = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
  };

  const isValidPassword = (value) => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[@#$%!^&*])(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;
    return passwordPattern.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      try {
        const response = await fetch('http://localhost:8086/sellers/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });

        if (response.ok) {
          const responseData = await response.json();
          if (responseData.status === "Active") {
            const sellerId = responseData.sellerId;
            sessionStorage.setItem('sellerId', sellerId);
            dispatch(fetchSellerDetails(sellerId));
            setShowSuccessModal(true);
          } else if (responseData.status === "Inactive") {
            setPasswordError('Your login credentials are suspended due to bad product feedback');
          } else {
            setPasswordError('Invalid Email or Password');
          }
        } else {
          setPasswordError('Invalid Email or Password');
        }
      } catch (error) {
        setPasswordError('An error occurred during login. Please try again.');
      }
    }
  };

  const handleForgotPassword = () => {
    setShowForgotPasswordModal(true);
  };

  const handleProceedForgotPassword = async () => {
    if (isValidEmailOrPhone(forgotPasswordEmail)) {
      try {
        const response = await fetch('http://localhost:8086/verify-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: forgotPasswordEmail })
        });
  
        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData); // Debugging: log the response data
  
          // Check if the responseData contains any identifying property
          if (responseData.email) {  // Adjust this condition as per your response structure
            setShowForgotPasswordModal(false);
            setShowResetPasswordModal(true);
          } else {
            setForgotPasswordEmailError("Email not found");
          }
        } else {
          setForgotPasswordEmailError("Email not found");
        }
      } catch (error) {
        setForgotPasswordEmailError("An error occurred. Please try again.");
      }
    } else {
      setForgotPasswordEmailError("Please enter a valid email address");
    }
  };
  

  const handleNewPasswordChange = (e) => {
    const { value } = e.target;
    setNewPassword(value);
    if (!isValidPassword(value.trim())) {
      setNewPasswordError("Invalid Password");
    } else {
      setNewPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
    if (value !== newPassword) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleResetPassword = async () => {
    if (isValidPassword(newPassword) && newPassword === confirmPassword) {
      try {
        const response = await fetch(`http://localhost:8086/reset-password`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: forgotPasswordEmail, newPassword })
        });
        // console.log(response);
        if (response.ok) {
          // Update the password field in the form
          // console.log(response);

          // setPassword(newPassword);
          setPassword('');
          setPasswordError('');
          setShowResetPasswordModal(false);
          // setShowSuccessModal(true);
          navigate('/signin');
          return; // Exit the function to prevent displaying error message
        } else {
          setConfirmPasswordError("Failed to reset password. Please try again.");
        }
      } catch (error) {
        setConfirmPasswordError("An error occurred. Please try again.");
      }
    } else {
      // Additional validation to ensure both fields are filled
      if (!isValidPassword(newPassword)) {
        setNewPasswordError("Invalid Password");
      }
      if (newPassword !== confirmPassword) {
        setConfirmPasswordError("Passwords do not match");
      }
    }
  };

  const validateForm = () => {
    let isValid = true;

    if (!email.trim()) {
      setIdentifierError("Please enter your email address");
      isValid = false;
    } else if (!isValidEmailOrPhone(email.trim())) {
      setIdentifierError("Please enter a valid email address or phone number");
      isValid = false;
    } else {
      setIdentifierError('');
    }

    if (!password.trim()) {
      setPasswordError("Please enter your password");
      isValid = false;
    } else if (!isValidPassword(password.trim())) {
      setPasswordError("Invalid Password");
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate('/home');
  };

  return (
    <Container>
      <Row>
        <Col lg={10}>
          <div className="login-section">
            <Form id="loginForm" onSubmit={handleSubmit}>
              <Form.Group controlId="login_email">
                <Form.Label>Email Address<span style={{ color: 'red' }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  style={{ border: '2px solid #ccc', borderRadius: '5px' }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="error" style={{ color: 'red' }}>{identifierError}</Form.Text>
              </Form.Group>
              <div>
                <br />
              </div>
              <Form.Group controlId="login_pass">
                <Form.Label>Password<span style={{ color: 'red' }}>*</span></Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  style={{ border: '2px solid #ccc', borderRadius: '5px' }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Text className="error" style={{ color: 'red' }}>{passwordError}</Form.Text>
              </Form.Group>
              <div>
                <br />
              </div>

              <p>By continuing, you agree to Horizon's Conditions of Use and Privacy Notice.</p>
              <Button variant="primary" type="submit" id="loginBtn">Sign in</Button>
              <Button
                variant="primary"
                id="forgotpassword"
                onClick={handleForgotPassword}
                className="forgot-password-button "
                style={{marginLeft:'180px'}}
              >
                Forgot password?
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      <Modal show={showSuccessModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You have successfully logged in!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showForgotPasswordModal} onHide={() => setShowForgotPasswordModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please enter your email address to reset your password:</p>
          <Form.Control
            type="text"
            placeholder="Enter your email"
            value={forgotPasswordEmail}
            onChange={(e) => setForgotPasswordEmail(e.target.value)}
          />
          <Form.Text className="error" style={{ color: 'red' }}>{forgotPasswordEmailError}</Form.Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowForgotPasswordModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleProceedForgotPassword}>
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showResetPasswordModal} onHide={() => setShowResetPasswordModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="newPassword">
            <Form.Label>New Password<span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
            <Form.Text className="error" style={{ color: 'red' }}>{newPasswordError}</Form.Text>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password<span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <Form.Text className="error" style={{ color: 'red' }}>{confirmPasswordError}</Form.Text>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowResetPasswordModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleResetPassword}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export function NewCustomerSection() {
  return (
    <Col lg={6}>
      <div className="customer-section">
        <div className="panel">
          <div className="panel-header">
            <h2 className="panel-title">New Seller?</h2>
          </div>
          <div className="panel-body">
            <p className="new-customer-intro">Create an account with us and you'll be able to:</p>
            <ul className="new-customer-fact-list">
              <li className="new-seller-fact">Reach a larger customer base</li>
              <li className="new-seller-fact">Manage inventory efficiently</li>
              <li className="new-seller-fact">Track sales performance</li>
              <li className="new-seller-fact">Receive timely payments</li>
            </ul>
            
            <Link to='/registration'>
              <Button variant="primary">Create Account</Button>
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
}