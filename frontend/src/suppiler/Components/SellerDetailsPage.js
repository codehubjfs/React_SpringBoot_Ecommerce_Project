import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../Layout/PageLayout';
import RightContent from '../Layout/RightContent';
import { submitSellerDetails, resetSellerDetails } from '../slice/sellerDetailsSlice';
import { FormContext } from '../context/FormContext'; // Import FormContext

function SellerDetailsPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { formData, updateFormData } = useContext(FormContext); // Use FormContext
    const [errors, setErrors] = useState({
        storeName: '',
        fullName: '',
        termsConditions: ''
    });
    const [showModal, setShowModal] = useState(false); // Set initial state of modal to false
    const status = useSelector((state) => state.sellerDetails.status);
    const error = useSelector((state) => state.sellerDetails.error);

    const handleSubmit = (event) => {
        event.preventDefault();
        const nameRegex = /^[a-zA-Z\s]+$/; // Regex pattern to allow only letters and spaces

        if (validateForm(nameRegex)) {
            dispatch(submitSellerDetails(formData)).then((result) => {
                if (result.type === 'sellerDetails/submitSellerDetails/fulfilled') {
                    console.log('Form data submitted:', formData);
                    dispatch(resetSellerDetails());
                    navigate('/signin');
                } else {
                    console.error('Failed to submit form data:', error);
                }
            });
        }
    };

    const validateForm = (nameRegex) => {
        let isValid = true;
        let newErrors = {};

        if (formData.storeName.trim() === '') {
            newErrors.storeName = 'Store Name is required.';
            isValid = false;
        } else if (!nameRegex.test(formData.storeName.trim())) {
            newErrors.storeName = 'Store Name should contain only letters and spaces.';
            isValid = false;
        } else {
            newErrors.storeName = '';
        }

        if (formData.fullName.trim() === '') {
            newErrors.fullName = 'Full Name is required.';
            isValid = false;
        } else if (!nameRegex.test(formData.fullName.trim())) {
            newErrors.fullName = 'Full Name should contain only letters and spaces.';
            isValid = false;
        } else {
            newErrors.fullName = '';
        }

        if (!formData.termsConditions) {
            newErrors.termsConditions = 'Please agree to the Terms and Conditions.';
            isValid = false;
        } else {
            newErrors.termsConditions = '';
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleStoreNameChange = (event) => {
        const value = event.target.value;
        const nameRegex = /^[a-zA-Z\s]+$/; // Define nameRegex here
        updateFormData('storeName', value);
        if (!nameRegex.test(value.trim())) {
            setErrors(prevErrors => ({ ...prevErrors, storeName: 'Store Name should contain only letters and spaces.' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, storeName: '' }));
        }
    };

    const handleFullNameChange = (event) => {
        const value = event.target.value;
        const nameRegex = /^[a-zA-Z\s]+$/; // Define nameRegex here
        updateFormData('fullName', value);
        if (!nameRegex.test(value.trim())) {
            setErrors(prevErrors => ({ ...prevErrors, fullName: 'Full Name should contain only letters and spaces.' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, fullName: '' }));
        }
    };

    const handleTermsConditionsChange = (event) => {
        updateFormData('termsConditions', event.target.checked);
        setErrors(prevErrors => ({ ...prevErrors, termsConditions: '' }));
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <PageLayout
            leftContent={
                <div className="registercontent">
                    <h2>Seller Details for Horizon Seller Account</h2>
                    <form id="sellerDetailsForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="store_name"><strong>Store Name</strong><span style={{ color: 'red' }}>*</span></label>
                            <input
                                type="text"
                                id="store_name"
                                className="form-control"
                                placeholder="Enter Store Name"
                                value={formData.storeName}
                                onChange={handleStoreNameChange}
                                style={{ margin: '0' }}
                            />
                            <p id="storeNameErrorMsg" className="error-msg">{errors.storeName}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="full_name"><strong>Your Full Name</strong><span style={{ color: 'red' }}>*</span></label>
                            <input
                                type="text"
                                id="full_name"
                                className="form-control"
                                placeholder="Enter Full Name"
                                value={formData.fullName}
                                onChange={handleFullNameChange}
                                style={{ margin: '0' }}
                            />
                            <p id="fullNameErrorMsg" className="error-msg">{errors.fullName}</p>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="terms_conditions"
                                checked={formData.termsConditions}
                                onChange={handleTermsConditionsChange}
                            />
                            <label className="form-check-label" htmlFor="terms_conditions">
                                I agree to the <a href="#" onClick={toggleModal} style={{ color: "blue", cursor: "pointer" }}>Terms and Conditions</a>
                            </label>
                            <p id="termsErrorMsg" className="error-msg">{errors.termsConditions}</p>
                        </div>
                        <button type="submit" className="btn btn-success continue-button" style={{ backgroundColor: 'rgb(54, 99, 196)' }} disabled={status === 'loading'}>
                            {status === 'loading' ? 'Submitting...' : 'Submit All'}
                        </button>
                        {status === 'failed' && <p className="text-danger">Submission failed: {error}</p>}
                    </form>
                </div>
            }
            rightContent={<RightContent title="Importance of Store Name and Terms and Conditions" content="Your store name is crucial for brand recognition and trust-building among customers. Choose a name that reflects your brand identity and is easy to remember. Agreeing to the terms and conditions ensures that you understand and comply with the policies and guidelines set forth by Horizon for successful selling on the platform. It's important to read and understand these terms before proceeding." />}
            specialIconIndex={3}
            showModal={showModal}
            toggleModal={toggleModal}
        />
    );
}

export default SellerDetailsPage;
