// import React, { useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap'; // Assuming you're using Bootstrap for modals and forms

// function EditProfileModal(props) {
//     const [show, setShow] = useState(false);
//     const [errors, setErrors] = useState({});
//     const [profileData, setProfileData] = useState({
//         fullName: 'Sathish R S',
//         role: 'Administrator',
//         location: 'Bengaluru',
//         email: 'sathish.tech@gmail.com',
//         personalEmail: 'sathish123@gmail.com',
//         phone: '(123) 456-7890',
//         mobile: '(098) 765-4321',
//         address: 'whitefield, Bangalore'
//     });

//     const handleClose = () => {
//         setShow(false);
//         setErrors({});
//     };

//     const handleShow = () => setShow(true);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProfileData(prevData => ({
//             ...prevData,
//             [name]: value
//         }));
//     };

//     const validateForm = () => {
//         let formIsValid = true;
//         const newErrors = {};

//         // Validation rules for each field
//         if (!profileData.fullName.trim()) {
//             newErrors.fullName = 'Full Name is required';
//             formIsValid = false;
//         }

//         if (!profileData.role.trim()) {
//             newErrors.role = 'Role is required';
//             formIsValid = false;
//         }

//         if (!profileData.location.trim()) {
//             newErrors.location = 'Location is required';
//             formIsValid = false;
//         }

//         if (!profileData.email.trim()) {
//             newErrors.email = 'Email is required';
//             formIsValid = false;
//         }

//         if (!profileData.personalEmail.trim()) {
//             newErrors.personalEmail = 'Personal Email is required';
//             formIsValid = false;
//         }

//         if (!profileData.phone.trim()) {
//             newErrors.phone = 'Phone is required';
//             formIsValid = false;
//         }

//         setErrors(newErrors);
//         return formIsValid;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (validateForm()) {
//             // Handle form submission here
//             handleClose(); // Close the modal after submission
//         }
//     };

//     return (
//         <>
//             <Button variant="dark" onClick={handleShow}>
//                 Edit Profile
//             </Button>

//             <Modal show={show} onHide={handleClose} centered>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Edit Profile</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form onSubmit={handleSubmit}>
//                         <Form.Group controlId="formFullName">
//                             <Form.Label>Full Name</Form.Label>
//                             <Form.Control type="text" name="fullName" value={profileData.fullName} onChange={handleChange} />
//                             {errors.fullName && <span className="text-danger">{errors.fullName}</span>}
//                         </Form.Group>
//                         <Form.Group controlId="formRole">
//                             <Form.Label>Role</Form.Label>
//                             <Form.Control type="text" name="role" value={profileData.role} onChange={handleChange} />
//                             {errors.role && <span className="text-danger">{errors.role}</span>}
//                         </Form.Group>
//                         <Form.Group controlId="formLocation">
//                             <Form.Label>Location</Form.Label>
//                             <Form.Control type="text" name="location" value={profileData.location} onChange={handleChange} />
//                             {errors.location && <span className="text-danger">{errors.location}</span>}
//                         </Form.Group>
//                         <Form.Group controlId="formEmail">
//                             <Form.Label>Email</Form.Label>
//                             <Form.Control type="email" name="email" value={profileData.email} onChange={handleChange} />
//                             {errors.email && <span className="text-danger">{errors.email}</span>}
//                         </Form.Group>
//                         <Form.Group controlId="formPersonalEmail">
//                             <Form.Label>Personal Email</Form.Label>
//                             <Form.Control type="email" name="personalEmail" value={profileData.personalEmail} onChange={handleChange} />
//                             {errors.personalEmail && <span className="text-danger">{errors.personalEmail}</span>}
//                         </Form.Group>
//                         <Form.Group controlId="formPhone">
//                             <Form.Label>Phone</Form.Label>
//                             <Form.Control type="tel" name="phone" value={profileData.phone} onChange={handleChange} />
//                             {errors.phone && <span className="text-danger">{errors.phone}</span>}
//                         </Form.Group>
//                         {/* You can add similar Form.Group components for other fields */}
//                         <Button variant="primary" type="submit">
//                             Save Changes
//                         </Button>
//                     </Form>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// }

// export default EditProfileModal;


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Form, Spinner } from 'react-bootstrap';
import { updateProfile } from '../slices/profileSlices';

function EditProfileModal({ profile }) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState(profile);

  const dispatch = useDispatch();
  const updateStatus = useSelector((state) => state.profile.status);
  const updateError = useSelector((state) => state.profile.error);

  useEffect(() => {
    if (!show) {
      setFormData(profile);
    }
  }, [show, profile]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {updateStatus === 'failed' && <p style={{ color: 'red' }}>{updateError}</p>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmployeeId">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Official Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Office</Form.Label>
              <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPersonalEmail">
              <Form.Label>Personal Email</Form.Label>
              <Form.Control type="email" name="personalEmail" value={formData.personalEmail} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={updateStatus === 'loading'}>
              {updateStatus === 'loading' ? (
                <Spinner animation="border" size="sm" />
              ) : (
                'Save Changes'
              )}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditProfileModal;

