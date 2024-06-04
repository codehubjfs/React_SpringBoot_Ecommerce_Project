import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-content" style={{ backgroundColor: 'black', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' ,textAlign:'center',padding:'20px'}}>
        <div className="footer-section">
          <p id="ui-footer" style={{ color: 'white',fontSize:'18px'}}>Sell your products to crores of<br /> customers on Horizon</p>
          <p id="ui-footer" style={{ color: 'white',fontSize:'18px' }}>at 0% commission</p>
          <Link to="/sellonline" style={{ color: 'white',fontSize:'18px' }}>Start Selling</Link>
        </div>
        <div className="ui-footer-section">
          <ul>
            <h4 style={{ color: 'white', fontSize:'22px'}}>Sell on Horizon</h4>
            <li><Link to="/sellonline" style={{ color: 'white' }}>Sell Online</Link></li>
            <li><Link to="/howitsworks" style={{ color: 'white' }}>How it Works</Link></li>
            <li><Link to="/pricingcommission" style={{ color: 'white' }}>Pricing & Commission</Link></li>
       
            <li><Link to="/gst" style={{ color: 'white' }}>Don't have GST?</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 style={{ color: 'white',fontSize:'22px' }}>Contact Us</h4>
          <p style={{ color: 'white' }}>sell@Horizon.com</p>
          <div style={{ color: 'white' }}>
            <h5>Social Media

            </h5>
            <div className="footer-icons">
              <a href="#" style={{ marginRight: '10px' }}>
                <i className="fab fa-instagram" style={{ color: 'white' }}></i>
              </a>
              <a href="#" style={{ marginRight: '10px' }}>
                <i className="fab fa-facebook" style={{ color: 'white' }}></i>
              </a>
              <a href="#" style={{ marginRight: '10px' }}>
                <i className="fab fa-twitter" style={{ color: 'white' }}></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube" style={{ color: 'white' }}></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h4 style={{ color: 'white', fontSize:'22px' }}>Address</h4>
          <div>
            <p style={{ color: 'white' }}>123 Street Name</p>
            <p style={{ color: 'white' }}>City, Country</p>
            <p style={{ color: 'white' }}>Postal Code</p>
          </div>
        </div>
      </div>
      {/* Center-aligned copyright notice */}
      <div className="footer-bottom" >
        <p style={{  backgroundColor: 'black',color: 'white',textAlign:'center' }}>© 2024 Horizon Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
