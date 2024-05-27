import React, { createContext, useState } from 'react';

const FormContext = createContext();

const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        mobileNumber: '',
        email: '',
        password: '',
        storeName: '',
        fullName: '',
        gstin: '',
        building: '',
        street: '',
        city: '',
        state: '',
        pincode: '',
        country: 'India',
        accountNumber: '',
        confirmAccountNumber: '',
        ifscCode: ''
    });

    const updateFormData = (name, value) => {
        console.log(`Updating field: ${name}, Value: ${value}`);
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <FormContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormContext.Provider>
    );
};

export { FormContext, FormProvider };
