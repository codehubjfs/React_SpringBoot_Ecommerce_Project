import React, { useState, useContext } from 'react';
import PageLayout from '../Layout/PageLayout';
import RightContent from '../Layout/RightContent';
import { useNavigate,Link } from "react-router-dom";
import { FormContext } from '../context/FormContext'; // Import FormContext

function Breadcrumb() {
    return (
        <nav aria-label="breadcrumb"  className="breadcrumb-container"> 
            <ol className="breadcrumb py-3 px-3" style={{ backgroundColor: '#e8e9ea', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <li className="breadcrumb-item">
                    <Link to="/homesupplier" style={{ textDecoration: 'none', color: '#343a40' }}>
                        <span style={{ transition: 'color 0.3s' }}>Seller</span>
                    </Link>  
                </li>
                <li className="breadcrumb-item">
                    <Link to="/registration" style={{ textDecoration: 'none', color: '#343a40' }}>
                        <span style={{ transition: 'color 0.3s' }}>Basic Details</span>
                    </Link>               
                 </li>
                 <li className="breadcrumb-item">
                    <Link to="/taxdetails" style={{ textDecoration: 'none', color: '#343a40' }}>
                        <span style={{ transition: 'color 0.3s' }}>GSTIN or EnrollmentID</span>
                    </Link>               
                 </li>
                 <li className="breadcrumb-item">
                    <Link to="/pickupaddress" style={{ textDecoration: 'none', color: '#343a40' }}>
                        <span style={{ transition: 'color 0.3s' }}>PickupAddress</span>
                    </Link>               
                 </li>
            </ol>
        </nav>
    );
}

function BankDetails() {
    const { formData, updateFormData } = useContext(FormContext); // Use FormContext
    const [errors, setErrors] = useState({
        accountNumber: '',
        confirm_account_number: '',
        ifscCode: ''
    });
    const navigate = useNavigate();

    const validateField = (name, value) => {
        switch (name) {
            case 'accountNumber':
                if (!value.trim()) return 'Account Number is required.';
                if (!/^[0-9]{9,18}$/.test(value)) return 'Invalid Account Number format contains 9 to 18 numbers.';
                break;
            case 'confirm_account_number':
                if (!value.trim()) return 'Confirm Account Number is required.';
                if (value !== formData.accountNumber) return 'Confirm Account Number must match the entered Account Number.';
                break;
            case 'ifscCode':
                if (!value.trim()) return 'IFSC Code is required.';
                if (!/^[A-Za-z]{4}[0][a-zA-Z0-9]{6}$/.test(value)) return 'Invalid IFSC Code format.';
                break;
            default:
                break;
        }
        return '';
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        updateFormData(name, value);
        const errorMessage = validateField(name, value);
        setErrors(prevErrors => ({ ...prevErrors, [name]: errorMessage }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            navigate('/sellerdetails'); // Assuming '/sellerdetails' is the correct path
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        for (const key in formData) {
            const errorMessage = validateField(key, formData[key]);
            newErrors[key] = errorMessage;
            if (errorMessage) isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const formFields = [
        { name: 'accountNumber', label: 'Account Number', placeholder: 'Enter Account Number' },
        { name: 'confirm_account_number', label: 'Confirm Account Number', placeholder: 'Confirm Account Number' },
        { name: 'ifscCode', label: 'IFSC Code', placeholder: 'Enter IFSC Code' }
    ];

    return (
        <>
         <div style={{marginTop:'40px'}}>
        <Breadcrumb />
        </div>
        <PageLayout
            leftContent={
                <form onSubmit={handleSubmit}>
                    <div className="registercontent">
                        <h2>Bank Details for Horizon Seller Account</h2>
                        {formFields.map(field => (
                            <div className="form-group" key={field.name} style={{ marginTop: '10px' }}>
                                <label htmlFor={field.name}><strong>{field.label}</strong><span style={{ color: 'red' }}>*</span></label>
                                <input
                                    type="text"
                                    id={field.name}
                                    name={field.name}
                                    className="form-control"
                                    placeholder={field.placeholder}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    style={{margin:'0'}}
                                />
                                <span className="error" style={{ color: 'red' }}>{errors[field.name]}</span>
                            </div>
                        ))}
                        <button type="submit" id="sellercontinueButton" className="btn btn-primary" style={{marginTop:'25px'}}>Continue</button>
                    </div>
                </form>
            }
            rightContent={<RightContent title="Importance of Bank Details in Horizon Seller Account" content="Providing accurate bank details is crucial for a Horizon seller account. It ensures timely payouts for your orders and helps in seamless transactions. Make sure to double-check your bank information to avoid any payment delays." />}
            specialIconIndex={2} // Set the special icon index to 2 for Bank Details
        />
        </>
    );
}

export default BankDetails;
