import React from "react";
import { Link, NavLink } from "react-router-dom";
// import Webpage-icon-1.png form "../";
import icon from "../Images/Webpage-icon-1.png";
import img1 from "../Images/avatar.jpg";
import "../Navbar.css";
import { useAuth } from "../AuthContext";
function NavBar() {
  const { isLoggedIn, login, logout } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
        <Link className="navbar-brand" to="/Homepage">
          <img src={icon} alt="Logo" style={{ verticalAlign: "middle" }} />
          <span className="horizon-txt" style={{ marginLeft: "5px" }}>
            Horizon
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#Content"
          aria-controls="Content"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="Content">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <i className="fas fa-map-marker-alt"></i>
                <span className="text" style={{ marginLeft: "5px" }}>
                  Location
                </span>
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              style={{ width: "85%", height: "40px" }}
              aria-label="Search"
            />
            <button
              className="btn btn-outline-light my-2 my-sm-0"
              type="submit"
            >
              <i className="fas fa-search"></i>
            </button>
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/registration">
                <i className="fas fa-store"></i>
                <span className="text" style={{ marginLeft: "5px" }}>
                  Become Seller
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/adminhome">
                <i className="fas fa-user-shield"></i>
                <span className="text" style={{ marginLeft: "5px" }}>
                  Admin
                </span>
              </Link>
            </li>
            {isLoggedIn ? (
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>Logesh</span>
                  <img
                    src={img1}
                    alt="Avatar"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                    }}
                  />
                </Link>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdown"
                >
                  <Link className="dropdown-item" to="/profile">
                    Profile
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link
                    className="dropdown-item"
                    to="/HomePage"
                    onClick={logout}
                  >
                    Log Out
                  </Link>
                </div>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/signin">
                  <i className="fas fa-sign-in-alt"></i>
                  <span>Sign In</span>
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/wishlist">
                <i className="fas fa-heart"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Cart">
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div style={{ marginBottom: "10px" }}></div>
    </div>
  );
}

export default NavBar;
