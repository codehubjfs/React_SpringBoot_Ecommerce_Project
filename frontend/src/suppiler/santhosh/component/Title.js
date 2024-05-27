import React from 'react';
import '../title.css';
import logo from '../photos/Webpage-icon.png';
import profile from '../photos/smart.jpg';
import { Nav, NavDropdown } from 'react-bootstrap';
// import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
function Title() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#343a40' , padding:"0px"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="e.html" style={{ fontFamily: 'sans-serif', fontSize: 'large' }}>
            <img src={logo} alt="Logo" id='img' />    
            <span style={{ color: 'white', marginLeft: '10px' }}>Horizon</span>
          </a>
          
          <div className="d-flex align-items-center">
            <span className="notification-symbol" style={{ marginRight: '10px' }}>🔔</span>
            <Nav className="ms-auto d-flex align-items-center">
              <NavDropdown title={<img src={profile} alt="avatar" className="rounded-circle" style={{ width: '40px', height: '40px' }} />} align="end">
                <NavDropdown.Item ><Nav.Link as={Link} to="/UserProfileForm ">Profile</Nav.Link></NavDropdown.Item>
                <NavDropdown.Item ><Nav.Link as={Link} to="/homesupplier ">Logout</Nav.Link></NavDropdown.Item>
              </NavDropdown>
              <div className="user-info ml-2" style={{ color: 'white !important' }}>
                <p className="mb-0">Santhosh</p>
                <p className="mb-0">santhosh@gmail.com</p>
              </div>
            </Nav>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Title;
