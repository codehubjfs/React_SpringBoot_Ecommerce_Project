import React from 'react';

function ContactContent() {
  return (
    <div className="col-md-6 custom-width">
      <div className="ui-contact">
        <p id="ui-supports" style={{ fontSize: '18px', color: 'black', textAlign: 'left' }}>
          Horizon supplier support is available to solve all your doubts and issues before and after you start your online selling business.
        </p>
        <p id="ui-supporting" style={{ fontSize: '18px', color: 'black', textAlign: 'left' }}>
          <img src="https://ssl.gstatic.com/ui/v1/icons/mail/images/favicon5.ico" alt="mail icon" />
          You can reach out to <a href="mailto:sell@meesho.com" className="mail" style={{ color: 'black' }}>susvel2001@gmail.com</a>
        </p>
      </div>
    </div>
  );
}

export default ContactContent;
