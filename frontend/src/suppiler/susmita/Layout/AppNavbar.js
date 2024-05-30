import React from 'react';
import { NavLink } from 'react-router-dom';
import HorizonSellerIcon from '../assets/images/Webpage-icon-1.png';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../App.css'; // Import the CSS file

function AppNavbar() {
  return (
    <Navbar bg="black" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand as={NavLink} to="/">
        <img src={HorizonSellerIcon} alt="Horizon Seller Icon" style={{ marginRight: '5px', width: '30px' }} />
        Horizon
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/sellonline">Sell Online</Nav.Link>
          <Nav.Link as={NavLink} to="/howitsworks">Grow Business</Nav.Link>
          <Nav.Link as={NavLink} to="/pricingcommission">Pricing & Commission</Nav.Link>
          <Nav.Link as={NavLink} to="/gst">GstPage</Nav.Link>
        </Nav>
        <Nav className="ui-ml-auto"> {/* Add ml-auto class to move items to the right */}
          <Button variant="dark" href="/sellerlogin">Login</Button>
          <Button variant="dark" href="/registration">Start Selling</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
