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
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ViewSellerModal({ show, onHide, seller }) {
  if (!seller) return null;

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Seller Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Name:</strong> {seller.fullName}</p>
        <p><strong>Email:</strong> {seller.email}</p>
        <p><strong>Phone:</strong> {seller.mobileNumber}</p>
        <p><strong>Store Name:</strong> {seller.storeName}</p>
        {/* Add more fields as necessary */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewSellerModal;
