import React from "react";

export function SupportPage() {
  const faqItems = [
    {
      question: "How can I track my order?",
      answer:
        "You can track your order by logging into your account and navigating to the 'Orders' section.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept  MasterCard, UPI  and PayPal.",
    },
    {
      question: "How do I return an item?",
      answer:
        "To return an item, please contact our customer support team for assistance.",
    },
    {
      question: "How can I change my shipping address?",
      answer:
        "You can update your shipping address in the 'Address' section of your profile.",
    },
    {
      question: "How long will it take to receive my order?",
      answer:
        "Delivery times changes depending on your location and shipping method chosen at checkout. Please refer to our shipping policy for more information.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to many countries. Shipping rates and delivery times may vary. Please contact our support team for more information.",
    },
    {
      question: "Can I cancel or modify my order after it has been placed?",
      answer:
        "Once an order has been placed, it may not be possible to cancel or modify it. Please contact our support team as soon as possible for assistance.",
    },
  ];

  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <h1 className="mt-5">Customer Support</h1>
      <hr />

      <h3>Frequently Asked Questions (FAQs)</h3>
      <div className="accordion" id="faqAccordion">
        {faqItems.map((item, index) => (
          <div className="card-faq" key={index}>
            <div className="card-header" id={`faqHeading${index}`}>
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target={`#faqCollapse${index}`}
                  aria-expanded="true"
                  aria-controls={`faqCollapse${index}`}
                >
                  {item.question}
                </button>
              </h5>
            </div>
            <div
              id={`faqCollapse${index}`}
              className="collapse"
              aria-labelledby={`faqHeading${index}`}
              data-parent="#faqAccordion"
            >
              <div className="card-body">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <div>
        <h3>Prime Customer Service Options</h3>
        <div class="service-options ">
          <div class="service-option" style={{ margin: "25px" }}>
            <h4>Live Chat Support</h4>
            <p>
              Get instant assistance from our dedicated support team through
              live chat available on our website. Our agents are ready to help
              you with any queries or issues you may have, ensuring a swift
              resolution to your concerns.
            </p>
            <a href="#" class="btn btn-primary">
              Chat Now
            </a>
          </div>
          <div class="service-option" style={{ margin: "25px" }}>
            <h4>Knowledge Base</h4>
            <p>
              Explore our comprehensive knowledge base to find answers to common
              questions, helpful guides, and troubleshooting solutions. Our
              extensive collection of resources is designed to empower you with
              the information you need for a seamless shopping experience.
            </p>
            <a href="#" class="btn btn-primary">
              Explore Now
            </a>
          </div>
        </div>
      </div>

      <hr />
      <h3>Contact Us</h3>
      <div className="row">
        <div className="col-md-6">
          <h5>Call Us:</h5>
          <p>
            For immediate assistance, call our customer support team at:{" "}
            <strong>1-800-123-4567</strong>
          </p>
          {/* <a href="#" className="btn btn-primary">
            Call Us
          </a> */}
        </div>
        <div className="col-md-6">
          <h5>Mail Us:</h5>
          <p>
            Email us at <strong>support@horizon.com</strong> and we'll get back
            to you within 24 hours.
          </p>
          {/* <a href="#" className="btn btn-primary">
            Mail Us
          </a> */}
        </div>
        <div className="container" style={{ marginTop: "70px" }}>
          <h1 className="mt-5">
            Horizon Help Centre: Get All Shopping Solutions Here
          </h1>
          <hr />

          <p>
            Once you place your order on any online shopping store, the next
            obvious thing to do is wait for your product to arrive. This wait
            can be quite anxiety-ridden if you do not get updates about your
            order or do not receive support post-delivery of your order.
            However, with the Horizon Help Centre, your wait becomes exciting,
            and your shopping experience becomes joyful, thanks to all the
            support it provides related to your order. With websites like
            Horizon, the entire shopping experience has gone through a major
            change. Now, you can conveniently shop anytime, from anywhere, and
            anything that you want. These websites are one-stop destinations for
            all your needs and requirements. From skincare products to home
            appliances and groceries to baby care essentials, everything is just
            a few clicks away. These websites provide you convenience, and to
            ensure that your shopping experience is delightful, the Horizon Help
            Centre support offers every assistance that you need. From reporting
            specific delivered product-related issues to letting you manage your
            orders, the Horizon Help Centre has solutions to all your worries
            related to your orders. Furthermore, if you do not find a solution
            to your queries here, then you can use the Horizon Help Centre
            number to get your issues solved. Keep reading to know more about
            Horizon Help Centre and what all assistance you get here.
          </p>

          <h3>24x7 Customer Care Support</h3>
          <p>
            You can find 24x7 Customer Care Support on the Horizon Help Centre.
            Any query or issue that you may possibly have while shopping on
            Horizon is taken care of here. This page is easy to navigate, and
            you can get support almost immediately. Once you log onto your
            Horizon account, this page shows you your recent orders and lets you
            report any issue. By clicking on the specific order, you can raise
            your query. It also has a chat option to ensure that your queries
            and issues are taken care of. Similarly, there are other options on
            this page that are created to assist you and to make your shopping
            experience hassle-free. You can get support anytime and get a
            satisfactory solution to your queries and issues within minutes.
          </p>

          <h3>Types and Topics of Support in Horizon Help Centre</h3>
          <p>
            Apart from helping you with your orders and/or your delivered
            product-related issues, you can find various other support at
            Horizon Help Centre. You can select from three types of issues here
            - help with your issues, help with your order, and help with other
            issues. You can track your orders here, manage your orders, get help
            with your returns and refunds issues, and even get help related to
            various other issues, such as offers, payment, Horizon Plus, etc.
            There are also details about specific help topics, such as
            cancellations and returns, wallet, insurance, Horizon Quick, Reward
            Points, Gift Card, etc., available here. So, log on to your Horizon
            account and shop without hassles and with complete help and support.
          </p>

          <p>
            The Horizon Help Centre is available on the Horizon site to help
            every Horizon customer with any grievance that they may have. You
            can find solutions regarding the tracking of your order. It will
            also help edit your delivery date or address and more. All your
            issues will be addressed at any time of the day or night (24/7
            service). This way, you can immediately get your grievances
            addressed. You can also get help regarding returns and refunds and
            many other issues through the Horizon Help Centre. In case you're
            not satisfied with the solution given, you can seek further
            assistance. You can get in touch with a support assistant via the
            Horizon Help Centre number. The next time you have any issue with
            your order or if you want more clarity regarding payment options,
            Horizon Plus, account-related queries, and more, you can access
            Horizon Help Centre support for further information. This way, you
            can shop without worry and have a satisfying shopping experience.
            The support centre will do all that it can to address your grievance
            until you’re completely satisfied. So, no matter the nature of your
            grievance, you must get in touch with the support forum. This way,
            you won’t have to compromise in any way.
          </p>
        </div>
      </div>
    </div>
  );
}
