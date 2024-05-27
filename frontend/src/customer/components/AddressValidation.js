// AddressValidation.js
import { useState } from "react";

const useAddressValidation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    pincode: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
    }
    if (!formData.mobile.trim()) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      errors.mobile = "Mobile number must be 10 digits";
    }
    if (!formData.pincode.trim()) {
      errors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      errors.pincode = "Pincode must be 6 digits";
    }
    if (!formData.area.trim()) {
      errors.area = "Street/Area is required";
    }
    if (!formData.landmark.trim()) {
      errors.landmark = "Landmark is required";
    }
    if (!formData.city.trim()) {
      errors.city = "Town/City is required";
    }
    if (!formData.state.trim()) {
      errors.state = "State is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const clearForm = () => {
    setFormData({
      fullName: "",
      mobile: "",
      pincode: "",
      area: "",
      landmark: "",
      city: "",
      state: "",
    });
    setErrors({});
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  return {
    formData,
    setFormData,
    errors,
    validateForm,
    clearForm,
    handleChange,
  };
};

export default useAddressValidation;
