import React from "react";
import "./AboutUs.css"; // Import CSS file for styling
import Image1 from "../Images/curosel6.jpg"; // Import images for illustration
import Image2 from "../Images/curosel6.jpg"; // Import additional images
import { Link } from "react-router-dom";

function AboutUs() {
  // Data for "Why Choose Us" section
  const reasons = [
    {
      title: "Quality Products",
      description:
        "We offer only the highest quality products to ensure customer satisfaction.",
      imageUrl:
        "https://st2.depositphotos.com/4285885/47275/i/450/depositphotos_472759118-stock-photo-quality-product-text-orange-vintage.jpg",
    },
    {
      title: "Fast Delivery",
      description:
        "With our efficient delivery services, your orders will reach you in no time.",
      imageUrl:
        "https://img.freepik.com/premium-vector/fast-delivery-truck-icon-set-fast-shipping-design-website-mobile-apps-online-shopping_97458-1032.jpg",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated customer support team is available round the clock to assist you.",
      imageUrl:
        "https://img.freepik.com/free-vector/twenty-four-service_1017-30335.jpg",
    },
  ];

  // Data for "Testimonials" section
  const testimonials = [
    {
      text: '"Horizon has made my online shopping experience incredibly convenient. The variety of products and the ease of navigation on their website are impressive. Highly recommended!"',
      author: "- Santhosh",
    },
    {
      text: "\"I've been a loyal customer of Horizon for years. Their commitment to quality and customer satisfaction is unmatched. I'm always satisfied with my purchases.\"",
      author: "- Gpoee",
    },
  ];

  // Data for "Our Team" section
  const teamMembers = [
    {
      name: "Logesh",
      role: "Founder",
      imageUrl:
        "https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg",
    },
    {
      name: "Susmitha",
      role: "CEO",
      imageUrl:
        "https://i.pinimg.com/originals/aa/9e/f0/aa9ef022cdae83df1d96baa6fbbeb380.jpg",
    },
    {
      name: "Hazel",
      role: "Marketing Director",
      imageUrl:
        "https://i.pinimg.com/originals/aa/9e/f0/aa9ef022cdae83df1d96baa6fbbeb380.jpg",
    },
  ];

  return (
    <div className="about-container">
      <div
        className="about-content"
        style={{ marginTop: "100px", marginBottom: "50px" }}
      >
        <div className="header">
          <img
            src="https://knowledge.csc.gov.sg/images/Cropped_images/Ethos_Digital_07/D7_Banner_eCommerce%20Development.jpg"
            alt="About Us"
            className="header-image"
            style={{ width: "auto", height: "250px" }}
          />
          <h1>About Us</h1>
        </div>
        <div className="main-content" style={{ textAlign: "center" }}>
          {/* Your existing content */}

          <p>
            Welcome to Horizon! We are committed to providing the best online
            shopping experience for our customers.
          </p>
          <p>
            At Horizon, we believe in offering a wide range of high-quality
            products at competitive prices. Our dedicated team works tirelessly
            to ensure that your shopping experience is smooth, convenient, and
            enjoyable.
          </p>
          <p>
            Whether you're looking for electronics, fashion, home essentials, or
            anything in between, Horizon has you covered. Our user-friendly
            interface, secure payment options, and efficient delivery services
            make shopping with us a breeze.
          </p>
          <p>Thank you for choosing Horizon. Happy shopping!</p>
        </div>

        {/* Additional Sections */}
        <div className="additional-content">
          <div className="mission-values">
            <div className="mission-section">
              <h2>
                <strong>Our Mission</strong>{" "}
              </h2>
              <p>
                At Horizon, we are driven by a relentless commitment to
                revolutionize online shopping and redefine the customer
                experience. Our mission is rooted in the belief that every
                customer deserves access to an unparalleled shopping journey,
                characterized by convenience, choice, and exceptional service.
                Empowering Choice We are dedicated to offering a diverse and
                carefully curated selection of top-quality products across
                various categories. From electronics and fashion to home
                essentials and beyond, we empower our customers with an
                extensive range of options to suit their unique preferences and
                lifestyles.
              </p>
            </div>
            <div className="values-section">
              <h2>
                {" "}
                <strong>Our Values</strong>
              </h2>
              <ul>
                <li>
                  <strong>Customer Satisfaction:</strong> We prioritize the
                  satisfaction of our customers above all else.
                </li>
                <li>
                  <strong>Quality:</strong> We ensure that all products offered
                  on our platform meet the highest standards of quality.
                </li>
                <li>
                  <strong>Integrity:</strong> We conduct our business with
                  honesty, transparency, and integrity.
                </li>
                <li>
                  <strong>Innovation:</strong> We continuously innovate to
                  enhance the shopping experience for our customers.
                </li>
                <li>
                  <strong>Community:</strong> We value our community of shoppers
                  and strive to foster a sense of belonging and inclusivity.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="additional-content">
          <div className="why-choose-us">
            <h2>
              <strong>Why Choose Us</strong>
            </h2>
            <div className="reasons">
              {reasons.map((reason, index) => (
                <div className="reason" key={index}>
                  <img
                    src={reason.imageUrl}
                    alt={reason.title}
                    className="reason-image"
                  />
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="testimonials">
            <h2>
              <strong>Testimonials</strong>
            </h2>
            {testimonials.map((testimonial, index) => (
              <div className="testimonial" key={index}>
                <p>{testimonial.text}</p>
                <p className="testimonial-author">{testimonial.author}</p>
              </div>
            ))}
          </div>
          <h2 style={{ textAlign: "center" }}>Our Team</h2>
          <div className="team">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="team-member-image"
                />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="achievements">
          <h2>
            <strong>Company Achievements</strong>
          </h2>
          <ul>
            <li>Featured in Forbes magazine</li>
            <li>Ranked among top 10 online retailers by Business Insider</li>
            <li>Won "Best Customer Service" award from Consumer Reports</li>
          </ul>
        </div>
        <div className="call-to-action">
          <h2>Ready to start shopping?</h2>
          <Link to="/HomePage">
            <button className="btn-primary">Shop Now</button>
          </Link>
        </div>
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            If you have any questions, feedback, or concerns, feel free to reach
            out to us. Our customer support team is available 24/7 to assist
            you.
          </p>
          <p>Email: support@horizon.com</p>
          <p>Phone: 1-800-123-4567</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
