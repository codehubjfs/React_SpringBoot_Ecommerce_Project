import React, { useState, useContext } from 'react';
import PageLayout from '../Layout/PageLayout';
import RightContent from '../Layout/RightContent';
import { useNavigate } from "react-router-dom";
import { FormContext } from '../context/FormContext'; // Import FormContext

function PickupAddress() {
    const { formData, updateFormData } = useContext(FormContext); // Use FormContext
    const [errors, setErrors] = useState({
        building: '',
        street: '',
        pincode: '',
        country: '',
        state: '',
        city: ''
    });
    const navigate = useNavigate();

    const validateField = (fieldName, value) => {
        switch(fieldName) {
            case 'building':
            case 'street':
                const alphanumericRegex = /^[a-zA-Z0-9\s]+$/;
                if (!value.trim()) return 'This field is required.';
                if (!alphanumericRegex.test(value)) return 'Enter a valid address.';
                break;
            case 'pincode':
                const pincodePattern = /^[1-9]\d{5}$/;
                if (!pincodePattern.test(value)) return 'Please enter a valid pincode.';
                break;
            case 'state':
            case 'city':
                if (!value.trim()) return 'This field is required.';
                if (!isNaN(value)) return 'This field should not contain numbers.';
                break;
            default:
                break;
        }
        return '';
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        updateFormData(name, value); // Update form data using FormContext
        const errorMessage = validateField(name, value);
        setErrors(prevErrors => ({ ...prevErrors, [name]: errorMessage }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;
        const newErrors = { ...errors };

        for (const key in formData) {
            const errorMessage = validateField(key, formData[key]);
            newErrors[key] = errorMessage;
            if (errorMessage) isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            navigate('/bankdetails');
        }
    }

    const indianStates = [
        'Andaman and Nicobar Islands',
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chandigarh',
        'Chhattisgarh',
        'Dadra and Nagar Haveli',
        'Daman and Diu',
        'Delhi',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jammu and Kashmir',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Ladakh',
        'Lakshadweep',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Puducherry',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttar Pradesh',
        'Uttarakhand',
        'West Bengal'
    ];

    const indianStatesAndCities = {
        'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Tiruppur', 'Erode', 'Vellore', 'Thoothukudi', 'Dindigul', 'Thanjavur', 'Ranipet', 'Nagercoil', 'Karur'],
        'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Malappuram', 'Kannur', 'Kollam', 'Palakkad', 'Alappuzha', 'Kottayam', 'Kasaragod', 'Pathanamthitta', 'Idukki', 'Wayanad', 'Ernakulam'],
        'Karnataka': ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum', 'Davanagere', 'Bellary', 'Shimoga', 'Gulbarga', 'Dharwad', 'Vijayapura', 'Raichur', 'Bidar', 'Hospet', 'Udupi'],
        'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Rajahmundry', 'Tirupati', 'Kakinada', 'Anantapur', 'Kadapa', 'Vizianagaram', 'Eluru', 'Ongole', 'Nandyal', 'Machilipatnam'],
        'Andaman and Nicobar Islands': ['Port Blair'],
        'Arunachal Pradesh': ['Itanagar'],
        'Assam': ['Guwahati', 'Dibrugarh', 'Silchar', 'Jorhat', 'Nagaon', 'Tinsukia', 'Tezpur'],
        'Bihar': ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Purnia', 'Darbhanga', 'Bihar Sharif'],
        'Chandigarh': ['Chandigarh'],
        'Chhattisgarh': ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Raigarh', 'Durg', 'Rajnandgaon'],
        'Dadra and Nagar Haveli': ['Silvassa'],
        'Daman and Diu': ['Daman'],
        'Delhi': ['New Delhi'],
        'Goa': ['Panaji', 'Vasco da Gama'],
        'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Junagadh', 'Gandhinagar', 'Gandhidham', 'Nadiad'],
        'Haryana': ['Faridabad', 'Gurgaon', 'Panipat', 'Ambala', 'Yamunanagar', 'Rohtak', 'Hisar', 'Karnal', 'Sonipat'],
        'Himachal Pradesh': ['Shimla', 'Mandi', 'Solan', 'Dharamshala', 'Bilaspur', 'Kullu'],
        'Jammu and Kashmir': ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Sopore', 'Kathua', 'Udhampur', 'Rajouri', 'Pulwama'],
        'Jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro Steel City', 'Deoghar', 'Hazaribagh'],
        'Ladakh': ['Leh', 'Kargil'],
        'Lakshadweep': ['Kavaratti'],
        'Madhya Pradesh': ['Indore', 'Bhopal', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar', 'Dewas'],
        'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Kalyan-Dombivali', 'Vasai-Virar', 'Aurangabad', 'Navi Mumbai', 'Solapur'],
        'Manipur': ['Imphal'],
        'Meghalaya': ['Shillong'],
        'Mizoram': ['Aizawl'],
        'Nagaland': ['Kohima', 'Dimapur'],
        'Odisha': ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur', 'Sambalpur', 'Puri'],
        'Puducherry': ['Puducherry', 'Karaikal', 'Mahe', 'Yanam'],
        'Punjab': ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Hoshiarpur', 'Mohali'],
        'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Bikaner', 'Ajmer', 'Bhilwara', 'Alwar', 'Sikar'],
        'Sikkim': ['Gangtok'],
        'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad', 'Khammam', 'Karimnagar', 'Ramagundam'],
        'Tripura': ['Agartala'],
        'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Ghaziabad', 'Agra', 'Meerut', 'Varanasi', 'Allahabad', 'Bareilly', 'Aligarh', 'Moradabad', 'Saharanpur', 'Gorakhpur'],
        'Uttarakhand': ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Rudrapur'],
        'West Bengal': ['Kolkata', 'Asansol', 'Siliguri', 'Durgapur', 'Bardhaman', 'Malda', 'Baharampur', 'Habra']
    };

    const handleStateChange = (event) => {
        const selectedState = event.target.value;
        setErrors(prevErrors => ({ ...prevErrors, state: '', city: '' }));
        updateFormData('state', selectedState); // Update state in form data
        updateFormData('city', ''); // Reset city in form data
    }

    return (
        <PageLayout
            leftContent={
                <form onSubmit={handleSubmit}>
                    <div className="registercontent">
                        <h2>Pick Address for Delivery</h2>
                        <div className="form-group" style={{ marginBottom: '20px' }}>
                            <label htmlFor="building"><strong>Room/Floor/Building Number</strong><span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="building" name="building" className="form-control" placeholder="Enter Room/Floor/Building Number" value={formData.building} onChange={handleChange} style={{margin:'0'}}/>
                            <span className="error" style={{ color: 'red' }}>{errors.building}</span>
                        </div>
                        <div className="form-group" style={{ marginBottom: '20px' }}>
                            <label htmlFor="street"><strong>Street/Locality/Landmark</strong><span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="street" name="street" className="form-control" placeholder="Enter Street/Locality/Landmark" value={formData.street} onChange={handleChange} style={{margin:'0'}}/>
                            <span className="error" style={{ color: 'red' }}>{errors.street}</span>
                        </div>
                        <div className="form-group" style={{ marginBottom: '20px' }}>
                            <label htmlFor="pincode"><strong>Pincode</strong><span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="pincode" name="pincode" className="form-control" placeholder="Enter Pincode" value={formData.pincode} onChange={handleChange} style={{margin:'0'}}/>
                            <span className="error" style={{ color: 'red' }}>{errors.pincode}</span>
                        </div>
                       
                        
                        <div className="form-group" style={{ marginBottom: '20px' }}>
                        <label htmlFor="country"><strong>Country</strong><span style={{ color: 'red' }}>*</span></label>
                        <input 
                            type="text" 
                            id="country" 
                            name="country" 
                            className="form-control" 
                            placeholder="Enter Country" 
                            value={formData.country} 
                            onChange={handleChange} 
                            readOnly 
                            style={{margin:'0'}}
                        />
                        <span className="error" style={{ color: 'red' }}>{errors.country}</span>
                        </div>

                        <div className="form-group" style={{ marginBottom: '20px' }}>
                            <label htmlFor="state"><strong>State</strong><span style={{ color: 'red' }}>*</span></label>
                            <select id="state" name="state" className="form-control" value={formData.state} onChange={handleStateChange}>
                                <option value="">Select State</option>
                                {indianStates.map(state => (
                                    <option key={state} value={state}>{state}</option>
                                ))}
                            </select>
                            <span className="error" style={{ color: 'red' }}>{errors.state}</span>
                        </div>
                        <div className="form-group" style={{ marginBottom: '20px' }}>
                            <label htmlFor="city"><strong>City</strong><span style={{ color: 'red' }}>*</span></label>
                            <select id="city" name="city" className="form-control" value={formData.city} onChange={handleChange}>
                                <option value="">Select City</option>
                                {formData.state && indianStatesAndCities[formData.state] && indianStatesAndCities[formData.state].map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                            <span className="error" style={{ color: 'red' }}>{errors.city}</span>
                        </div>
                        <button type="submit" className="btn btn-success continue-button">Continue</button>
                    </div>
                </form>
            }
            rightContent={<RightContent title="Pickup Address Information" content={
                <>
                    <p>
                       <b style={{fontSize:'25px', color:"black"}}>* </b>  Pick Address is a feature in Horizon that allows you to specify the exact location from which your products will be picked up for delivery. By providing accurate address details, you ensure smooth delivery of your products to your customers.
                    </p>
                    <p>
                       <b style={{fontSize:'25px', color:"black"}}>* </b>  Additionally, accurate pickup address information is crucial for ensuring timely delivery, enhancing customer experience, reducing errors and returns, streamlining operations, complying with legal requirements, and preventing miscommunication.
                    </p>
                </>
            } />}
            specialIconIndex={1} // Set the special icon index to 1 for Pickup Address
        />
    );
}

export default PickupAddress;
