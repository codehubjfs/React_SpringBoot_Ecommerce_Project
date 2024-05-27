import React, { useState, useEffect, useContext } from 'react';
import PageLayout from '../Layout/PageLayout';
import RightContent from '../Layout/RightContent';
import { useNavigate } from "react-router-dom";
import { FormContext } from '../context/FormContext'; // Import FormContext

function TaxDetails() {
    const { formData, updateFormData } = useContext(FormContext); // Use FormContext
    const [taxOption, setTaxOption] = useState(formData.taxOption || 'gstin');
    const [gstinError, setGstinError] = useState('');
    const [enrollmentError, setEnrollmentError] = useState('');
    const [gstinVerified, setGstinVerified] = useState(false);
    const [enrollmentVerified, setEnrollmentVerified] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false); 

    const navigate = useNavigate();

    const handleTaxOptionChange = (event) => {
        setTaxOption(event.target.value);
        setGstinError('');
        setEnrollmentError('');
        setGstinVerified(false);
        setEnrollmentVerified(false);
        updateFormData('taxOption', event.target.value);
    };

    const validateGSTIN = (gstin) => {
        const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
        if (gstin === '') {
            setGstinError('Please enter a GSTIN number.');
            return false;
        } else if (!gstinRegex.test(gstin)) {
            setGstinError('Please enter a valid GSTIN number.');
            return false;
        }
        setGstinError('');
        return true;
    };
    
    const validateEnrollmentID = (enrollmentID) => {
        const enrollmentRegex = /^SELLER[0-9]{4}-[0-9]{6}$/;
        if (enrollmentID === '') {
            setEnrollmentError('Please enter an Enrollment ID.');
            return false;
        } else if (!enrollmentRegex.test(enrollmentID)) {
            setEnrollmentError('Please enter a valid Enrollment ID.');
            return false;
        }
        setEnrollmentError('');
        return true;
    };
    
    const handleVerifyGSTIN = () => {
        if (validateGSTIN(formData.gstin)) {
            setGstinVerified(true);
        }
    };
    
    const handleVerifyEnrollment = () => {
        if (validateEnrollmentID(formData.enrollmentId)) {
            setEnrollmentVerified(true);
        }
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if ((taxOption === 'gstin' && formData.gstin && gstinVerified) || (taxOption === 'enrollment' && formData.enrollmentId && enrollmentVerified)) {
            const valueToStore = taxOption === 'gstin' ? formData.gstin : formData.enrollmentId;
            updateFormData('gstin', valueToStore); // Update the gstin field with the correct value
            setFormSubmitted(true); 
        } else {
            alert('Please fill and verify either GSTIN or Enrollment ID.');
        }
    };

    useEffect(() => {
        if (formSubmitted) {
            navigate('/pickupaddress');
        }
    }, [formSubmitted, navigate]);

    return (
        <PageLayout
            leftContent={
                <form id="step1" className="registration-form active" onSubmit={handleSubmit}>
                    <div className="registercontent">
                        <h2>Tax Details</h2>
                        <div className="form-group">
                            <label htmlFor="tax_option">Tax Option:</label>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="tax_option"
                                    id="option_gstin"
                                    value="gstin"
                                    checked={taxOption === 'gstin'}
                                    onChange={handleTaxOptionChange}
                                />
                                <label className="form-check-label" htmlFor="option_gstin">
                                    <strong>GSTIN Number</strong> 
                                </label>
                                {taxOption === 'gstin' && (
                                    <>
                                        <p id="regular_gstin_info">For Regular GST Sellers:</p>
                                        <div className="input-group" style={{ marginBottom: '0px' }}>
                                            <input
                                                type="text"
                                                id="regular_gstin_input"
                                                name="gstin"
                                                className="form-control"
                                                style={{ marginRight: '10px' }}
                                                placeholder="Enter GSTIN"
                                                value={formData.gstin}
                                                onChange={(e) => updateFormData('gstin', e.target.value)}
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                id="gstin_btns"
                                                style={{ color: 'white', backgroundColor: 'rgb(78, 77, 77)', height:'45px'}}
                                                onClick={handleVerifyGSTIN}
                                            >
                                                Verify
                                            </button>
                                        </div>
                                        <span id="gstin_error" style={{ color: 'red' }}>
                                            {gstinError}
                                        </span>
                                    </>
                                )}
                            </div>
                            <hr />
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="tax_option"
                                    id="regular_gstin_input"
                                    value="enrollment"
                                    checked={taxOption === 'enrollment'}
                                    onChange={handleTaxOptionChange}
                                />
                                <label className="form-check-label" htmlFor="option_enrollment">
                                    <strong>Enrollment ID</strong>
                                </label>
                                {taxOption === 'enrollment' && (
                                    <>
                                        <p id="composition_enrollment_info">For Composition GST Sellers:</p>
                                        <div className="input-group" style={{ marginBottom: '0px' }}>
                                            <input
                                                type="text"
                                                id="composition_enrollment_input"
                                                name="enrollment_id"
                                                className="form-control"
                                                style={{ marginRight: '10px' }}
                                                placeholder="Enter Enrollment ID"
                                                value={formData.enrollmentId}
                                                onChange={(e) => updateFormData('enrollmentId', e.target.value)}
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                id="enrollment_btns"
                                                style={{ color: 'white', backgroundColor: 'rgb(78, 77, 77)', height:'45px' }}
                                                onClick={handleVerifyEnrollment}
                                            >
                                                Verify
                                            </button>
                                        </div>
                                        <span id="enrollment_error" style={{ color: 'red' }}>
                                            {enrollmentError}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div >
                        
                        <button type="submit" id="continueButton" className="btn btn-success continue-button" disabled={!gstinVerified && !enrollmentVerified} >
                            Continue
                        </button>
                    </div>
                </form>
            }
            rightContent={<RightContent title="About GSTIN and Enrollment ID" content={
                <>
                    <br></br>
                    <p><strong>GSTIN (Goods and Services Tax Identification Number):</strong> The GSTIN is a 15-digit unique identification number assigned to every registered taxpayer under the Goods and Services Tax (GST) regime in India.</p>
                    <p><strong>Enrollment ID:</strong> The Enrollment ID is a unique identifier assigned to each seller upon registration or enrollment on the Horizon platform.</p>
                </>
            } />}
            specialIconIndex={0}
        />
    );
}

export default TaxDetails;
