import React, { useState, useRef } from 'react';

function PromocodeForm({ promoData }) {
    const [formData, setFormData] = useState({
        code: promoData?.code || '',
        startDate: promoData?.startDate || '',
        endDate: promoData?.endDate || '',
        amount: promoData?.amount || ''
    });
    const [formErrors, setFormErrors] = useState({
        code: '',
        startDate: '',
        endDate: '',
        amount: ''
    });

    const modalRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name, value);
    };

    const validateField = (name, value) => {
        const currentDate = new Date();
        const startDate = new Date(formData.startDate);
        const endDate = new Date(formData.endDate);
    
        switch (name) {
            case 'code':
                setFormErrors((prevErrors) => ({
                    ...prevErrors,
                    code: /^[a-zA-Z]+$/.test(value.trim()) ? '' : 'Invalid code'
                }));
                break;
            case 'startDate':
                setFormErrors((prevErrors) => ({
                    ...prevErrors,
                    startDate: value.trim() ? (startDate >= currentDate ? '' : 'Invalid start date ') : 'Please enter the start date'
                }));
                break;
            case 'endDate':
                setFormErrors((prevErrors) => ({
                    ...prevErrors,
                    endDate: value.trim() ? (endDate > startDate ? '' : 'End date should be greater than start date') : 'Please enter the end date'
                }));
                break;
            case 'amount':
                setFormErrors((prevErrors) => ({
                    ...prevErrors,
                    amount: value.trim() && !isNaN(value.trim()) && Number(value.trim()) > 0 ? '' : 'Invalid Amount '
                }));
                break;
            default:
                break;
        }
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Perform form submission action
            // Example: send form data to server
            console.log(formData);
            // Clear form after successful submission
            clearForm();
            // Close the modal
            modalRef.current.click();
        }
    };

    const validateForm = () => {
        const { code, startDate, endDate, amount } = formData;

        let isValid = true;

        if (!code.trim()) {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                code: 'Please enter the code'
            }));
            isValid = false;
        }

        if (!startDate.trim()) {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                startDate: 'Please enter the start date'
            }));
            isValid = false;
        }

        if (!endDate.trim()) {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                endDate: 'Please enter the end date'
            }));
            isValid = false;
        }

        if (!amount.trim()) {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                amount: 'Please enter the amount'
            }));
            isValid = false;
        }

        return isValid;
    };

    const clearForm = () => {
        setFormData({
            code: '',
            startDate: '',
            endDate: '',
            amount: ''
        });
        setFormErrors({
            code: '',
            startDate: '',
            endDate: '',
            amount: ''
        });
    };

    return (
        <form id="promo-form" onSubmit={handleSubmit}>
            <button ref={modalRef} type="button" className="btn btn-primary" style={{ display: 'none' }} data-bs-toggle="modal" data-bs-target="#PromocodeModal">Hidden Button</button>
            <div className="modal fade" id="PromocodeModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Promocode</h5>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="code-input" className="col-form-label">Code</label>
                                <input type="text" className="form-control" id="code-input" name="code" value={formData.code} onChange={handleInputChange} />
                                <div id="codeError" style={{ color: 'red' }}>{formErrors.code}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="start-date-input" className="col-form-label">Start Date</label>
                                <input type="date" className="form-control" id="start-date-input" name="startDate" value={formData.startDate} onChange={handleInputChange} />
                                <div id="startDateError" style={{ color: 'red' }}>{formErrors.startDate}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="end-date-input" className="col-form-label">End Date</label>
                                <input type="date" className="form-control" id="end-date-input" name="endDate" value={formData.endDate} onChange={handleInputChange} />
                                <div id="endDateError" style={{ color: 'red' }}>{formErrors.endDate}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="value-input" className="col-form-label">Amount</label>
                                <input type="number" className="form-control" id="value-input" name="amount" value={formData.amount} onChange={handleInputChange} />
                                <div id="valueError" style={{ color: 'red' }}>{formErrors.amount}</div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" id="cancel" data-bs-dismiss="modal" onClick={clearForm}>Cancel</button>
                            <button type="submit" className="btn btn-primary" id="add-promo-btn">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default PromocodeForm;
