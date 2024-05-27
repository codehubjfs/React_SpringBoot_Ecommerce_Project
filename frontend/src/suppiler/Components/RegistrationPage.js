import React, { useContext, useState } from 'react';
import RightContent from '../Layout/RightContent';
import { useNavigate } from "react-router-dom";
import { FormContext } from '../context/FormContext'; // Import the context
import './styles.css';
import logo from '../assets/supplier_community.svg';
import logo1 from '../assets/pincode.svg';
import logo2 from '../assets/reach_india.svg';
import logo3 from '../assets/categories.svg';

function RegistrationPage() {
    const { formData, updateFormData } = useContext(FormContext); // Use the context
    const [mobileNumberError, setMobileNumberError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            navigate('/taxdetails');
        }
    };

    const validateForm = () => {
        let isValid = true;

        if (!formData.mobileNumber) {
            setMobileNumberError('Mobile number is required');
            isValid = false;
        } else if (!/^\d+$/.test(formData.mobileNumber)) {
            setMobileNumberError('Letters not allowed in mobile number.');
            isValid = false;
        } else if (!/^[6-9]/.test(formData.mobileNumber)) {
            setMobileNumberError('Mobile number must start with 6, 7, 8, or 9.');
            isValid = false;
        } else if (formData.mobileNumber.length !== 10) {
            setMobileNumberError('Mobile number should contain 10 digits.');
            isValid = false;
        } else {
            setMobileNumberError('');
        }

        if (!formData.email) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!validateEmail(formData.email)) {
            setEmailError('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!formData.password) {
            setPasswordError('Password is required');
            isValid = false;
        } else if (!validatePassword(formData.password)) {
            setPasswordError('Please enter a valid password.');
            isValid = false;
        } else {
            setPasswordError('');
        }

        return isValid;
    };

    const validateEmail = (email) => {
        const regex = /^\S+@\S+\.\S+$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[A-Z])(?=.*[@#$%!^&*])(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;
        return regex.test(password);
    };

    const handleMobileNumberChange = (event) => {
        const value = event.target.value;
        const mobileNumberRegex = /^[6-9]\d*$/;
        
        updateFormData('mobileNumber', value);

        if (!value.trim()) {
            setMobileNumberError('Mobile number is required');
        } else if (!mobileNumberRegex.test(value)) {
            setMobileNumberError('Mobile number should start with 6, 7, 8, or 9 and contain only numbers.');
        } else {
            setMobileNumberError('');
        }
    };

    const handleEmailChange = (event) => {
        updateFormData('email', event.target.value);
        if (!event.target.value.trim()) {
            setEmailError('Email is required');
        } else if (!validateEmail(event.target.value)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (event) => {
        updateFormData('password', event.target.value);
        if (!event.target.value.trim()) {
            setPasswordError('Password is required');
        } else if (!validatePassword(event.target.value)) {
            setPasswordError('Please enter a valid password.');
        } else {
            setPasswordError('');
        }
    };

    return (
        <div>            
            <div className="container-fluid" style={{ backgroundColor: '#343a40!important' }}>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="registration-section">
                                <h2 className="head1">Welcome to Horizon</h2>
                                <h3 className="head2">Create your account to start selling</h3>
                                <form id="registrationForm" onSubmit={handleSubmit}>
                                    <div className="form-group" style={{marginBottom:'10px'}}>
                                        <label htmlFor="sellerName"><strong>Mobile Number</strong><span style={{color:"red"}}>*</span></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="sellerName" 
                                            placeholder="Enter your Mobile Number" 
                                            value={formData.mobileNumber} 
                                            style={{margin:'0'}} 
                                            onChange={handleMobileNumberChange} 
                                        />
                                        <span id="numErr" className="error">{mobileNumberError}</span>
                                    </div>
                                    
                                    <div className="form-group" style={{marginBottom:'10px'}}>
                                        <label htmlFor="email"><strong>Email</strong><span style={{color:"red"}}>*</span></label>
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            id="email" 
                                            placeholder="Enter your email" 
                                            value={formData.email} 
                                            style={{margin:'0'}} 
                                            onChange={handleEmailChange} 
                                        />
                                        <span id="mailErr" className="error">{emailError}</span>
                                    </div>
                                    
                                    <div className="form-group" style={{marginBottom:'20px'}}>
                                        <label htmlFor="password"><strong>Password</strong><span style={{color:"red"}}>*</span></label>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            id="password" 
                                            placeholder="Set Password" 
                                            value={formData.password} 
                                            style={{margin:'0'}} 
                                            onChange={handlePasswordChange} 
                                        />
                                        <span id="passErr" className="error">{passwordError}</span>
                                        <br />
                                        <div style={{marginTop:"10px"}}>
                                            <small id="passwordHelpBlock" className="form-text text-muted">
                                                <b style={{color:'black'}}>Password must contain:</b>
                                                <ul>
                                                    <li><b style={{color:"black"}}>*</b> Minimum 8 characters (letters & numbers)</li>
                                                    <li><b style={{color:"black"}}>*</b> Minimum 1 special character (@ # $ % ! ^ & *)</li>
                                                    <li><b style={{color:"black"}}>*</b> Minimum 1 capital letter (A-Z)</li>
                                                    <li><b style={{color:"black"}}>*</b> Minimum 1 number (0-9)</li>
                                                </ul>
                                            </small>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary" id="createAcc">Create Account</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <RightContent title="Grow your business faster by selling on Horizon" content={
                                <div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src={logo} alt="Supplier Community" />
                                            <strong>11 Thousand+</strong><br />
                                            <label className="growth">Suppliers are selling commission-free</label>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={logo1} alt="Pincode" />
                                            <strong>1000+</strong><br />
                                            <label className="growth">Pincodes supported for delivery</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src={logo2} alt="Reach India" />
                                            <strong>Lakhs of</strong><br />
                                            <label className="growth">Customers buy across India</label>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={logo3} alt="Categories" />
                                            <strong>700+</strong><br />
                                            <label className="growth">Categories to sell</label>
                                        </div>
                                    </div>
                                    <hr />
                                    <p><strong>All you need to sell on Horizon is:</strong></p>
                                    <ul>
                                        <li><b style={{color:"black"}}>*</b> Tax Details</li>
                                        <ul style={{marginLeft:"30px"}}>
                                            <li><b style={{color:"black"}}>*</b> GSTIN (for regular/composition GST sellers)</li>
                                            <li><b style={{color:"black"}}>*</b> Enrolment ID/UIN (for Non-GST sellers)</li>
                                        </ul>
                                        <li><b style={{color:"black"}}>*</b> Bank Account</li>
                                    </ul>
                                </div>
                            } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;
