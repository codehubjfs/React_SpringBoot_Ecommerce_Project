import React from 'react';

const ContactSupport = () => {
  return (
    <div className="col-md-7 custom-width" style={{ marginTop: '30px' }}>
      <div className="card">
        <div className="card-body" style={{padding:'45px'}}>
          <div className="ui-contact">
            <p id="ui-supports" style={{ fontSize: '18px', color: 'black', textAlign: 'center' }}>
              Horizon supplier support is available to solve all your doubts and issues before and after you start your online selling business.
            </p>
            <p id="ui-supporting" style={{ fontSize: '18px', color: 'black', textAlign: 'center' }}>
              <img src="https://ssl.gstatic.com/ui/v1/icons/mail/images/favicon5.ico" alt="mail icon" />
              You can reach out to <a href="mailto:horizon@example.com" className="mail" style={{ color: 'black' }}>horizon@example.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
