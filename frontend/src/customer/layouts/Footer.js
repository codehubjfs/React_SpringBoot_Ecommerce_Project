import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";
import "../Footer.css";
import { useAuth } from "../AuthContext";
function Footer() {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <footer id="main-footer" className="custom-footer" role="contentinfo">
      <div className="container-fluid custom-container-fluid">
        <div className="row custom-row">
          <div className="col-md-3 custom-col-md-3">
            <h5>
              <strong>Company</strong>
            </h5>
            <ul>
              <li>
                <Link
                  to="/AboutUs"
                  style={{ color: "#fff4a3", paddingRight: "10%" }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/SupportPage"
                  style={{ color: "#fff4a3", paddingRight: "14%" }}
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  to="/PrivacyPolicy"
                  style={{ color: "#fff4a3", paddingRight: "1%" }}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 custom-col-md-3">
            <h5>
              <strong>Prime Membership</strong>
            </h5>
            <p>Register for our Prime Membership for exclusive benefits.</p>
            <p>
              {isLoggedIn ? (
                <Link to="/prime" style={{ color: "#fff4a3" }}>
                  <strong>JOIN PRIME</strong>
                </Link>
              ) : (
                <Link to="/signin" style={{ color: "#fff4a3" }}>
                  <strong>JOIN PRIME</strong>
                </Link>
              )}
            </p>
          </div>
          <div className="col-md-3 custom-col-md-3">
            <h5>
              <strong>Social</strong>
            </h5>
            <div
              className="footer-icons custom-footer-icons"
              style={{ color: "#fff4a3" }}
            >
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-x-twitter"></i>{" "}
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="col-md-3 custom-col-md-3">
            <h5>
              <strong>Address</strong>
            </h5>
            <p>123 Street, Salem, Tamil nadu</p>
            <p>Email: Info@horizon.com</p>
          </div>
        </div>
      </div>
      <div className="container mt-4 custom-container">
        <div>
          <hr />
          <p style={{ textAlign: "center" }}>
            &copy; 2024 Horizon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
