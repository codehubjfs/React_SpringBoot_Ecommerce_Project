import React from 'react';
import phoneIcon from '../assets/images/mobilenumber.jpeg';
import notesIcon from '../assets/images/notes.jpeg';
import bankIcon from '../assets/images/bank.jpeg';

function RegisteringSeller() {
  return (
    <div style={{ marginBottom: '40px', padding: '20px', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Register Your Account</h3>
      <p>To start selling on Horizon, you need to first create an account on Horizon. All you need is:</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' ,marginTop:'20px' }}>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img src={phoneIcon} alt="Icon 21" style={{ width: '50px', height: '50px' }} /><br />
          <span>Mobile Number & Email ID</span>
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img src={notesIcon} alt="Icon 22" style={{ width: '50px', height: '50px' }} /><br />
          <span>GSTIN Number (for GST sellers) or<br /> Enrolment ID / UIN (for non-GST sellers)</span>
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img src={bankIcon} alt="Icon 23" style={{ width: '50px', height: '50px' }} /><br />
          <span>Active Bank Account with<br /> the same GST</span>
        </div>
      </div>
      <p>
        Once you have provided these details, enter your Store Name which will be the name of your online business.
        Add the Pickup Address from which orders will be picked up by our logistics partners. And, that’s all. Your free account on Horizon will be created.
      </p>
    </div>
  );
}

export default RegisteringSeller;
