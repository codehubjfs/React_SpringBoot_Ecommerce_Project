import React from 'react';
import '../App.css';
import phoneIcon from '../assets/images/mobilenumber.jpeg';
import notesIcon from '../assets/images/notes.jpeg';
import bankIcon from '../assets/images/bank.jpeg';

function RegisteringSeller() {
  return (
    <div className="col-md-12">
        <h3 className="ui-register-header mb-4">Register Your Account</h3>
      <p className="ui-register-paragraph mb-4">
        To start selling on Horizon, you need to first create an account on Horizon. All you need is:
      </p>
      <div className="ui-icon-list mb-4">
        <div className="ui-icon-item mb-4">
          <img src={phoneIcon} alt="Icon 21" /><br />
          <span>Mobile Number & Email ID</span>
        </div>
        <div className="ui-icon-item mb-4">
          <img src={notesIcon} alt="Icon 22" /><br />
          <span>GSTIN Number (for GST sellers) or<br /> Enrolment ID / UIN (for non-GST sellers)</span>
        </div>
        <div className="ui-icon-item mb-4">
          <img src={bankIcon} alt="Icon 23" /><br />
          <span>Active Bank Account with<br /> the same GST</span>
        </div>
      </div>
      <p className="ui-register-paragraph mb-4">
        Once you have provided these details, enter your Store Name which will be the name of your online business. Add the Pickup Address from
        which orders will be picked up by our logistics partners. And, that’s all. Your free account on  Horizonwill be created.
      </p>
    </div>
  );
}

export default RegisteringSeller;
