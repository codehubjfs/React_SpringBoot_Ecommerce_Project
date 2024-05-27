import React from 'react';
import '../title.css';
import { FaEnvelope, FaPhone, FaComments } from 'react-icons/fa';

function FAQPage() {
  return (
    <div className="faq-container" style={{marginTop:'70px'}}>
      <div className="content">
        <main>
          <section id="faq">
          <h2 className="section-title" style={{textAlign: 'left !important'}}>Frequently Asked Questions (FAQs)</h2>
            <div className="faq-grid">
              <div className="faq-card">
                <div id="registration" className="faq-content">
                  <h3>Registration Process</h3>
                  <p>For registering as a seller, you must have a valid GSTIN number.</p>
                </div>
              </div>
              <div className="faq-card">
                <div id="product-listing" className="faq-content">
                  <h3>Product Listing</h3>
                  <p>If you have any doubts regarding product listing, refer to the pinned video on the homepage.</p>
                </div>
              </div>
              <div className="faq-card">
                <div id="orders" className="faq-content">
                  <h3>Orders and Fulfillment</h3>
                  <p>Once an order is placed by the user, the amount will be credited to your account upon successful fulfillment.</p>
                </div>
              </div>
              <div className="faq-card">
                {/* <a href="#payment-issues" className="faq-link">Payment Issues</a> */}
                <div id="payment-issues" className="faq-content">
                  <h3>Payment Issues</h3>
                  <p>If you encounter any payment-related issues, please contact our support team for assistance.</p>
                </div>
              </div>
              <div className="faq-card">
                {/* <a href="#returns-refunds" className="faq-link">Returns and Refunds</a> */}
                <div id="returns-refunds" className="faq-content">
                  <h3>Returns and Refunds</h3>
                  <p>We offer a hassle-free returns and refunds process. Please refer to our Returns Policy for more information.</p>
                </div>
              </div>
              <div className="faq-card">
                {/* <a href="#shipping" className="faq-link">Shipping Information</a> */}
                <div id="shipping" className="faq-content">
                  <h3>Shipping Information</h3>
                  <p>We provide shipping services to most locations worldwide. Shipping charges may apply based on your location and order size.</p>
                </div>
              </div>

              {/* Add more FAQ cards here */}
            </div>
          </section>
          <section id="contact">
            <h3 className="section-title"  style={{marginTop:'50px', marginBottom:'10px'}} >Contact Information</h3>
            <div className="contact-info">
              <div className="contact-method">
                <FaEnvelope className="contact-icon" />
                <div>
                <p style={{marginTop:'10px'}} >Email: <a href="mailto:sellersupport@horizon.com">sellersupport@horizon.com</a></p>
                </div>
              </div>
              <div className="contact-method">
                <FaPhone className="contact-icon" />
                <div> <p style={{marginTop:'10px'}}>Phone: 1-800-123-4567</p></div>
               
              </div>
              <div className="contact-method">
                <FaComments className="contact-icon" />
                <div>
                <p style={{marginTop:'7px'}}>Live Chat: Available during business hours</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default FAQPage;
