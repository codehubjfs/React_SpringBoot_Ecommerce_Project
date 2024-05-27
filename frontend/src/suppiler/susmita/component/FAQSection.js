import React from 'react';
import FAQItem from './FAQItem'; // Assuming you have a component for each FAQ item
import '../App.css'; // Import CSS file for styling

function FAQSection() {
  return (
    <div className="ui-faq-section mb-5">
      <h2 className="ui-faq-heading mb-5">Commonly Asked Questions</h2>
      <FAQItem
        question="How can sellers without a GSTIN register on Horizon?"
        answer={
          <div className="ui-faq-answer">
            <p>
              Sellers without a GSTIN can register by obtaining an Enrolment ID / UIN from the GST website. Once you have your Enrolment ID / UIN, you can sign up for free on Horizon. All you need is a bank account and an Enrolment ID or UIN.
            </p>
          </div>
        }
      />
      <FAQItem
        question="How can sellers get their Enrolment ID or UIN?"
        answer={
          <div className="ui-faq-answer">
            <p>
              You can get your Enrolment ID or UIN by registering as an e-commerce seller on the GST website.
            </p>
          </div>
        }
      />
      <FAQItem
        question="What are the restrictions for sellers with Composition GSTIN?"
        answer={
          <div className="ui-faq-answer">
            <p>
              GSTN requires Enrolment ID / UIN and Composition GSTIN sellers to sell only within their registered states. The state you register during Enrolment ID or Composition GSTIN registration will be considered your registered state.
            </p>
          </div>
        }
      />
      <FAQItem
        question="What are the sales limits for sellers with Enrolment ID / UIN and Composition GSTIN?"
        answer={
          <div className="ui-faq-answer">
            <p>
              For Sellers with Enrolment ID / UIN: If your total annual net sales (on Horizon and otherwise) exceed INR 40 lakhs, further sales on Horizon will be restricted unless you obtain a GSTIN. For northeastern states, this limit is INR 20 lakhs. For Composition GSTIN Sellers: If your total annual net sales (on Horizon and otherwise) exceed INR 1.5 crores, further sales on Horizon will be restricted unless you obtain a regular GSTIN. For northeastern states, this limit is INR 75 lakhs.
            </p>
          </div>
        }
      />
    </div>
  );
}

export default FAQSection;
