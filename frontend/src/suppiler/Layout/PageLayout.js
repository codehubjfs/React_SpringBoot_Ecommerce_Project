import React from 'react';
// import Navbar from './Navbar'; 
import logo from '../assets/tax.png'; 
import logo1 from '../assets/maps-and-flags.png';
import logo2 from '../assets/bank.png';
import logo3 from '../assets/supplier.png';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function PageLayout({ leftContent, rightContent, specialIconIndex, showModal, toggleModal}) {
  // Array of icon images
  const icons = [logo, logo1, logo2, logo3];

  return (

    <div >
       {/* <Navbar /> */}
      <div className="emoji-container" style={{ textAlign: 'center', marginTop: '20px' }}>
        {/* Mapping over the array of icons */}
        {icons.map((icon, index) => (
          <span key={index} className="emoji-span">
            <img src={icon} className={`emoji-img ${index === specialIconIndex ? 'special-emoji' : ''}`} alt={`emoji ${index}`}  style={{ marginBottom: '10px' }}/>
          </span>
        ))}
      </div>

      <div className="container mt-5">
        <div className="row mx-auto">
          {leftContent && <div className="col-lg-6 col-md-8 col-sm-12">{leftContent}</div>}
          {rightContent && <div className="col-lg-6 col-md-4 col-sm-12">{rightContent}</div>}
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <b>1. Registration:</b> Sellers must register with accurate business and product information.<br></br>

        <b>2. Product Listings:</b> Sellers must accurately describe products and avoid listing prohibited items.<br></br>

        <b>3. Order Fulfillment:</b> Timely order fulfillment and proper packaging are required.<br></br>

        <b>4. Customer Service:</b> Sellers must provide excellent customer service and handle inquiries professionally.<br></br>

        <b>5. Payment and Fees:</b> Sellers agree to Horizon's payment terms and fee structure.<br></br>

        <b>6. Compliance:</b> Sellers must comply with all e-commerce laws and Horizon's policies.<br></br>

        <b>7. Data Privacy:</b> Sellers must handle personal data responsibly in line with privacy laws.<br></br>

        <b>8. Termination:</b> Horizon reserves the right to terminate accounts for policy violations or misconduct.<br></br><br></br>

        <b>By registering as a seller on Horizon, you agree to these terms and conditions.</b>       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PageLayout;
