import React from "react";
import "./PrivacyPolicy.css"; // Import CSS file for styling
import { Link } from "react-router-dom";
function PrivacyPolicy() {
  // Define an array of objects containing titles and contents for each paragraph
  const paragraphs = [
    {
      title: "How We Use Your Information",
      content:
        "We use the information we collect for various purposes, including:",
      list: [
        "Providing, operating, and maintaining our website",
        "Improving and personalizing our services",
        "Communicating with you, including sending promotional materials",
        "Analyzing usage data to understand user behavior and preferences",
        "Preventing fraudulent activities",
        "Complying with legal obligations",
      ],
    },
    {
      title: "Disclosure of Your Information",
      content:
        "We may share your information with third parties in certain circumstances, including:",
      list: [
        "With service providers and business partners who assist us in delivering our services",
        "With law enforcement agencies or regulators when required by law",
        "In connection with a merger, acquisition, or sale of assets",
      ],
    },
    {
      title: "Data Retention",
      content:
        "We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. The criteria used to determine the retention periods include:",
      list: [
        "The nature of the personal information and its sensitivity",
        "The purposes for which we collect and process the information",
        "The necessity of retaining the information for the provision of our services",
        "Our legal obligations, such as compliance with tax and accounting requirements",
        "The existence of any legal claims or disputes",
      ],
    },
    {
      title: "Children's Privacy",
      content:
        "Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe that we have inadvertently collected information from a child under 13, please contact us immediately.",
      list: [],
    },
    {
      title: "Updates to Our Privacy Policy",
      content:
        "We may update our Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review this Privacy Policy periodically for updates.",
      list: [],
    },
  ];

  return (
    <div className="privacy-container">
      <div className="privacy-content" style={{ marginTop: "40px" }}>
        <div className="header">
          <h1>Privacy Policy</h1>
        </div>
        <div className="main-content">
          <p>
            Your privacy is important to us. It is Horizon's policy to respect
            your privacy regarding any information we may collect from you
            across our website, <a href="#">www.horizon.com</a>, and other sites
            we own and operate.
          </p>

          {paragraphs.map((paragraph, index) => (
            <div key={index}>
              <h2>{paragraph.title}</h2>
              <p>{paragraph.content}</p>
              <ul style={{ listStyle: "circle", marginLeft: "60px" }}>
                {paragraph.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <h2>User Rights</h2>
          {/* Add User Rights content here */}
          <p>
            {" "}
            As a user, you have certain rights regarding the personal
            information you provide to us. These rights are designed to give you
            control over your data and ensure that it is handled appropriately.
            We are committed to upholding these rights and facilitating your
            requests in a timely and transparent manner. 1. Right to Access You
            have the right to request access to the personal information we hold
            about you. This includes information about how we collect, use, and
            share your data. Upon request, we will provide you with a copy of
            your personal information in a clear and understandable format. 2.
            Right to Correction If you believe that any of the personal
            information we hold about you is inaccurate or incomplete, you have
            the right to request corrections or updates. We will promptly review
            your request and make any necessary changes to ensure that your
            information is accurate and up to date. 3. Right to Deletion You
            have the right to request the deletion of your personal information
            under certain circumstances. This includes situations where your
            data is no longer necessary for the purposes for which it was
            collected, or if you withdraw your consent for its processing. Upon
            receipt of a valid deletion request, we will securely delete or
            anonymize your data in accordance with applicable laws and
            regulations. 4. Right to Object You have the right to object to the
            processing of your personal information for certain purposes, such
            as direct marketing or profiling. If you object to the processing of
            your data, we will cease processing it for the specified purposes,
            unless we have compelling legitimate grounds for continued
            processing that override your interests, rights, and freedoms. 5.
            Right to Data Portability You have the right to receive a copy of
            your personal information in a structured, commonly used, and
            machine-readable format, and to transmit that data to another
            controller. This right applies where the processing is based on your
            consent or is necessary for the performance of a contract, and where
            the processing is carried out by automated means. 6. Right to
            Withdraw Consent If we rely on your consent as the legal basis for
            processing your personal information, you have the right to withdraw
            that consent at any time. Withdrawal of consent will not affect the
            lawfulness of processing based on consent before its withdrawal.
          </p>

          <h2>Contact Us</h2>
          {/* Add Contact Us content here */}
          <p>
            If you have any questions or concerns about our Privacy Policy or
            our practices regarding your personal information, please contact us
            at:
          </p>
          <ul style={{ listStyle: "circle", marginLeft: "60px" }}>
            <li>Email: privacy@horizon.com</li>
            <li>Phone: 1-800-123-4567</li>
            <li>Address: 123 Horizon Street, City, Country</li>
          </ul>
          <Link to="/SupportPage">
            {" "}
            <button className="btn-primary " style={{ marginLeft: "40px" }}>
              Support{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
