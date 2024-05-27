import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function UpdateCustomerModal({ show, onHide, selectedCustomer }) {
    const [name, setName] = useState(selectedCustomer ? selectedCustomer.name : '');
    const [email, setEmail] = useState(selectedCustomer ? selectedCustomer.email : '');
    const [address, setAddress] = useState(selectedCustomer ? selectedCustomer.address : '');
    const [state, setState] = useState(selectedCustomer ? selectedCustomer.state : '');
    const [pincode, setPincode] = useState(selectedCustomer ? selectedCustomer.pincode : '');
    const [mobile, setMobile] = useState(selectedCustomer ? selectedCustomer.mobile : '');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [mobileError, setMobileError] = useState('');

    const validateName = () => {
        if (name.trim() === '') {
            setNameError('Name is required');
        } else {
            setNameError('');
        }
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };

    const validateMobile = () => {
        const mobileRegex = /^\d{10}$/;
        if (!mobileRegex.test(mobile)) {
            setMobileError('Invalid mobile number');
        } else {
            setMobileError('');
        }
    };

    const handleSaveChanges = () => {
        validateName();
        validateEmail();
        validateMobile();

        if (nameError || emailError || mobileError) {
            return;
        }

        onHide();
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Customer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} onInput={(e) => { setName(e.target.value); validateName(); }} />
                        <Form.Text className="text-danger">{nameError}</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onInput={(e) => { setEmail(e.target.value); validateEmail(); }} />
                        <Form.Text className="text-danger">{emailError}</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formState">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" value={state} onChange={(e) => setState(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formPincode">
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formMobile">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="text" value={mobile} onInput={(e) => { setMobile(e.target.value); validateMobile(); }} />
                        <Form.Text className="text-danger">{mobileError}</Form.Text>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSaveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UpdateCustomerModal;
