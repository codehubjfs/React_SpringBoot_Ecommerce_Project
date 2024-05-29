// import React from 'react';
// import { Modal, Button } from 'react-bootstrap';
// import profile from '../assets/amazon.jpeg'

// function ViewSellerModal({ show, onHide, seller }) {
//     return (
//         <Modal show={show} onHide={onHide}>
//             <Modal.Header closeButton>
//                 <Modal.Title>View Seller Details</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//     {seller ? (
//         <div className="customer-details">
//             <div className="profile-picture" style={{ textAlign: 'center',marginBottom:'40px' }}>
//                         <img src={profile} alt="Profile" style={{ height: '150px', width: '150px' ,borderRadius:'100%'}} />
//             </div>
//             <div className="detail-item">
//                 <span className="label-seller">Name</span>
//                 <span className="value">:{seller.fullName}</span>
//             </div>
//             <div className="detail-item">
//                 <span className="label-seller">Email</span>
//                 <span className="value">:{seller.email}</span>
//             </div>
//             <div className="detail-item">
//                 <span className="label-seller">Phone No</span>
//                 <span className="value">:{seller.mobileNumber}</span>
//             </div>
//             <div className="detail-item">
//                 <span className="label-seller">GSTIN Number</span>
//                 <span className="value">:{seller.gstin}</span>
//             </div>
//             <div className="detail-item">
//                 <span className="label-seller">Account Number</span>
//                 <span className="value">:{seller.accountNumber}</span>
//             </div>
//             <div className="detail-item">
//                 <span className="label-seller">IFSC Code</span>
//                 <span className="value">:{seller.ifscCode}</span>
//             </div>
//             <div className="detail-item">
//                 <span className="label-seller">Store Name</span>
//                 <span className="value">:{seller.storeName}</span>
//             </div>
//         </div>
//     ) : (
//         <p>No seller selected</p>
//     )}
// </Modal.Body>

//             <Modal.Footer>
//                 <Button variant="secondary" onClick={onHide}>
//                     Close
//                 </Button>
//             </Modal.Footer>
//         </Modal>
//     );
// }

// export default ViewSellerModal;
// ViewSellerModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ViewSellerModal = ({ show, onHide }) => {
    const selectedSeller = useSelector((state) => state.sellers.selectedSeller);

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Seller Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {selectedSeller ? (
                    <>
                        <p><strong>Full Name:</strong> {selectedSeller.fullName}</p>
                        <p><strong>Store Name:</strong> {selectedSeller.storeName}</p>
                        <p><strong>Mobile Number:</strong> {selectedSeller.mobileNumber}</p>
                        <p><strong>Email:</strong> {selectedSeller.email}</p>
                        <p><strong>GSTIN:</strong> {selectedSeller.gstin}</p>
                        <p><strong>Building:</strong> {selectedSeller.building}</p>
                        <p><strong>Street:</strong> {selectedSeller.street}</p>
                        <p><strong>City:</strong> {selectedSeller.city}</p>
                        <p><strong>State:</strong> {selectedSeller.state}</p>
                        <p><strong>Pincode:</strong> {selectedSeller.pincode}</p>
                        <p><strong>Country:</strong> {selectedSeller.country}</p>
                        <p><strong>Account Number:</strong> {selectedSeller.accountNumber}</p>
                        <p><strong>IFSC Code:</strong> {selectedSeller.ifscCode}</p>
                       
                        
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ViewSellerModal;

