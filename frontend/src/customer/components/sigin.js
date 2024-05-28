import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../loginstyle.css";
import { useDispatch, useSelector } from "react-redux";
import { loginCustomer, verifyEmail, resetPassword } from "../slices/CustomerSlice";
import { useAuth } from "../AuthContext";

export function LoginForm() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginEmailError, setLoginEmailError] = useState("");
  const [loginPasswordError, setLoginPasswordError] = useState("");
  const [loginFailureError, setLoginFailureError] = useState("");
  const [modalEmail, setModalEmail] = useState("");
  const [modalEmailError, setModalEmailError] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [showVerificationCodeModal, setShowVerificationCodeModal] = useState(false);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { login } = useAuth();
  const customerState = useSelector(state => state.customer);

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const phoneRegex = /^\d{10}$/;
    return emailRegex.test(value) ;
  };

  const isValidPassword = (value) => {
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*[@#$%!^&*])(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;
    return passwordPattern.test(value);
  };

  const handleLoginEmailChange = (e) => {
    const { value } = e.target;
    setLoginEmail(value);
    if (!value.trim()) {
      setLoginEmailError("Please enter your email address ");
    } else if (!isValidEmail(value.trim())) {
      setLoginEmailError("Please enter a valid email address");
    } else {
      setLoginEmailError("");
    }
    setLoginFailureError(""); // Clear login error on email input change
  };

  const handleLoginEmailFocus = () => {
    setLoginFailureError(""); // Clear login error on email input focus
  };

  const handleLoginPasswordChange = (e) => {
    const { value } = e.target;
    setLoginPassword(value);
    if (!value.trim()) {
      setLoginPasswordError("Please enter your password");
    } else if (!isValidPassword(value.trim())) {
      setLoginPasswordError("Please enter the password in correct format");
    } else {
      setLoginPasswordError("");
    }
    setLoginFailureError(""); // Clear login error on password input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateLoginForm()) {
      dispatch(loginCustomer({ email: loginEmail, password: loginPassword }))
        .unwrap()
        .then(() => {
          login();
          setShowSuccessModal(true);
        })
        .catch((error) => {
          console.error("Login failed:", error);
          setLoginFailureError("Invalid username and password"); // Set login failure error
        });
    }
  };

  const handleForgotPassword = () => {
    setShowForgotPasswordModal(true);
  };

  const handleModalEmailChange = (e) => {
    const { value } = e.target;
    setModalEmail(value);
    if (!value.trim()) {
      setModalEmailError("Please enter your email address");
    } else if (!isValidEmail(value.trim())) {
      setModalEmailError("Please enter a valid email address");
    } else {
      setModalEmailError("");
    }
  };

  const handleProceedForgotPassword = () => {
    if (isValidEmail(modalEmail)) {
      dispatch(verifyEmail(modalEmail))
        .unwrap()
        .then((response) => {
          if (response.status === 'verified') {
            setShowForgotPasswordModal(false);
            setShowResetPasswordModal(true);        
            } else {
            setModalEmailError("Email not found");
          }
        })
        .catch((error) => {
          console.error("Email verification failed:", error);
          setModalEmailError("Email verification failed");
        });
    } else {
      setModalEmailError("Please enter a valid email address");
    }
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
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

  const handleResetPassword = () => {
    if (isValidPassword(newPassword) && newPassword === confirmPassword) {
      dispatch(resetPassword({ email: modalEmail, password: newPassword }))
        .unwrap()
        .then((response) => {
          if (response.status === 'success') {
            setShowResetPasswordModal(false);
            navigate("/signin");
          } else {
            setNewPasswordError("Password reset failed");
          }
        })
        .catch((error) => {
          console.error("Password reset failed:", error);
          setNewPasswordError("Password reset failed");
        });
    }
  };
  

  const validateLoginForm = () => {
    let isValid = true;

    if (!loginEmail.trim()) {
      setLoginEmailError("Please enter your email address ");
      isValid = false;
    } else if (!isValidEmail(loginEmail.trim())) {
      setLoginEmailError("Please enter a valid email address");
      isValid = false;
    } else {
      setLoginEmailError("");
    }

    if (!loginPassword.trim()) {
      setLoginPasswordError("Please enter your password");
      isValid = false;
    } else if (!isValidPassword(loginPassword.trim())) {
      setLoginPasswordError("Please enter password in correct format");
      isValid = false;
    } else {
      setLoginPasswordError("");
    }

    return isValid;
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate("/");
  };

  return (
    <Container>
      <Row>
        <Col lg={10}>
          <div className="login-section">
            <Form id="loginForm" onSubmit={handleSubmit}>
              <Form.Group controlId="login_email">
                <Form.Label>
                  Email Address
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email/phone"
                  style={{ border: "2px solid #ccc", borderRadius: "5px" }}
                  value={loginEmail}
                  onChange={handleLoginEmailChange}
                  onFocus={handleLoginEmailFocus} // Clear error on focus
                />
                <Form.Text className="error" style={{ color: "red" }}>
                  {loginEmailError}
                </Form.Text>
              </Form.Group>
              <div>
                <br />
              </div>
              <Form.Group controlId="login_pass">
                <Form.Label>
                  Password<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  style={{ border: "2px solid #ccc", borderRadius: "5px" }}
                  value={loginPassword}
                  onChange={handleLoginPasswordChange}
                />
                <Form.Text className="error" style={{ color: "red" }}>
                  {loginPasswordError}
                </Form.Text>
              </Form.Group>
              <div>
                <br />
              </div>
              <Form.Text className="error" style={{ color: "red" }}>
                {loginFailureError}
              </Form.Text>
              <p>
                By continuing, you agree to Horizon's Conditions of Use and
                Privacy Notice.
              </p>
              <Button variant="primary" type="submit" id="loginBtn">
                Sign in
              </Button>
              <Button
                variant="link"
                onClick={handleForgotPassword}
                style={{ marginLeft: "180px", marginTop: "-55px" }}
              >
                Forgot your password?
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      <Modal show={showSuccessModal} onHide={handleCloseModal}>
        <Modal.Header>
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

      <Modal
        show={showForgotPasswordModal}
        onHide={() => setShowForgotPasswordModal(false)}
      >
        <Modal.Header>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please enter your email address to reset your password:</p>
          <Form.Control
            type="text"
            placeholder="Enter your email"
            value={modalEmail}
            onChange={handleModalEmailChange}
          />
          <Form.Text className="error" style={{ color: "red" }}>
            {modalEmailError}
          </Form.Text>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowForgotPasswordModal(false)}
          >
            Close
          </Button>
          <Button variant="primary" onClick={handleProceedForgotPassword}>
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showVerificationCodeModal}
        onHide={() => setShowVerificationCodeModal(false)}
      >
        <Modal.Header>
          <Modal.Title>Enter Verification Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="verificationCode">
            <Form.Label>
              Verification Code<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter verification code"
              value={verificationCode}
              onChange={handleVerificationCodeChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowVerificationCodeModal(false)}
          >
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            setShowVerificationCodeModal(false);
            setShowResetPasswordModal(true);
          }}>
            Verify
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showResetPasswordModal}
        onHide={() => setShowResetPasswordModal(false)}
      >
        <Modal.Header>
          <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="newPassword">
            <Form.Label>
              New Password<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
            <Form.Text className="error" style={{ color: "red" }}>
              {newPasswordError}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>
              Confirm Password<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <Form.Text className="error" style={{ color: "red" }}>
              {confirmPasswordError}
            </Form.Text>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowResetPasswordModal(false)}
          >
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
            <h2 className="panel-title">New Customer?</h2>
          </div>
          <div className="panel-body">
            <p className="new-customer-intro">
              Create an account with us and you'll be able to:
            </p>
            <ul className="new-customer-fact-list">
              <li className="new-customer-fact">Check out faster</li>
              <li className="new-customer-fact">
                Save multiple shipping addresses
              </li>
              <li className="new-customer-fact">Access your order history</li>
              <li className="new-customer-fact">Track new orders</li>
            </ul>
            <Link to="/register">
              <Button variant="primary">Create Account</Button>
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
}
