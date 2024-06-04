import React from "react";
import { Link } from "react-router-dom";
import icon from "../Images/Webpage-icon-1.png";
import img1 from "../Images/avatar.jpg";
import { useAuth } from "../AuthContext";
import { useDispatch } from "react-redux";
import { useState } from "react";
import WeatherComponent from "../components/Citycomponent";
import { fetchWishlist } from "../slices/WishlistSlice";
import { fetchCarts } from "../slices/CartSlice";
import { searchProducts } from "../slices/SearchSlice";
function NavBar() {
  const { isLoggedIn, login, logout } = useAuth();
  const data = JSON.parse(sessionStorage.getItem("customerData"));
  const [cityName, setCityName] = useState("");
  const [pincode, setPincode] = useState("");
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  if (isLoggedIn) {
    console.log(data);
    dispatch(fetchWishlist(data.id));
    dispatch(fetchCarts(data.id));
  }

  const navbarStyle = {
    backgroundColor: "#000",
    position: "fixed",
    width: "100%",
    minHeight: "50px",
  };

  const navbarBrandImgStyle = {
    maxHeight: "30px",
    verticalAlign: "middle",
  };

  const navLinkStyle = {
    color: "#fff",
    fontSize: "18px",
  };

  const formInlineStyle = {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  };

  const formControlStyle = {
    width: "600px",
    height: "40px",
  };

  const navItemStyle = {
    marginLeft: "15px",
  };

  const navItemLastStyle = {
    marginRight: "15px",
  };

  const navbarTogglerStyle = {
    borderColor: "#fff",
  };

  const navbarTogglerIconStyle = {
    backgroundColor: "#fff",
  };

  const navLinkHoverStyle = {
    color: "#ccc",
  };
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("search Submitted")
    console.log(e);
    dispatch(searchProducts(searchQuery));
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-sm navbar-dark fixed-top"
        style={navbarStyle}
      >
        <Link className="navbar-brand" to="/Homepage">
          <img src={icon} alt="Logo" style={navbarBrandImgStyle} />
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
          style={navbarTogglerStyle}
        >
          <span
            className="navbar-toggler-icon"
            style={navbarTogglerIconStyle}
          ></span>
        </button>

        <div className="collapse navbar-collapse" id="Content">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/" style={navLinkStyle}>
                <i className="fas fa-map-marker-alt"></i>
                <span className="text" style={{ marginLeft: "0px" }}>
                  <span>
                    <WeatherComponent
                      setCityName={setCityName}
                      setPincode={setPincode}
                    />
                    {cityName}
                    {pincode}
                  </span>
                </span>
              </Link>
            </li>
          </ul>
          <form
            className="form-inline my-2 my-lg-0"
            onSubmit={handleSearch}
            style={{formControlStyle}}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              style={{ width: "450px", height: "40px" }}
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="btn btn-outline-light my-2 my-sm-0"
              type="submit"
            >
              <i className="fas fa-search"></i>
            </button>
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item" style={navItemStyle}>
              <Link
                className="nav-link"
                to="/homesupplier"
                style={navLinkStyle}
              >
                <i className="fas fa-store"></i>
                <span className="text" style={{ marginLeft: "5px" }}>
                  Become Seller
                </span>
              </Link>
            </li>
            <li className="nav-item" style={navItemStyle}>
              <Link className="nav-link" to="/adminhome" style={navLinkStyle}>
                <i className="fas fa-user-shield"></i>
                <span className="text" style={{ marginLeft: "5px" }}>
                  Admin
                </span>
              </Link>
            </li>
            {isLoggedIn ? (
              <>
                <li className="nav-item dropdown" style={navItemStyle}>
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={navLinkStyle}
                  >
                    <span>{data.fname}</span>
                    <img
                      src={img1}
                      alt="Avatar"
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        marginLeft: "5px",
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
                <li className="nav-item" style={navItemStyle}>
                  <Link
                    className="nav-link"
                    to="/wishlist"
                    style={navLinkStyle}
                  >
                    <i className="fas fa-heart"></i>
                  </Link>
                </li>
                <li className="nav-item" style={navItemLastStyle}>
                  <Link className="nav-link" to="/cart" style={navLinkStyle}>
                    <i className="fas fa-shopping-cart"></i>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item" style={navItemStyle}>
                  <Link className="nav-link" to="/signin" style={navLinkStyle}>
                    <i className="fa fa-user"></i>
                    <span> Sign In</span>
                  </Link>
                </li>
                <li className="nav-item" style={navItemStyle}>
                  <Link className="nav-link" to="/signin" style={navLinkStyle}>
                    <i className="fas fa-heart"></i>
                  </Link>
                </li>
                <li className="nav-item" style={navItemLastStyle}>
                  <Link className="nav-link" to="/signin" style={navLinkStyle}>
                    <i className="fas fa-shopping-cart"></i>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      <div style={{ marginBottom: "10px" }}></div>
    </div>
  );
}

export default NavBar;