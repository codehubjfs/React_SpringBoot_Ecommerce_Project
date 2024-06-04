import React, { useState ,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import HorizonSellerIcon from '../assets/images/Webpage-icon-1.png';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../App.css'; // Import the CSS file

function AppNavbar() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Function to handle scrolling to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Function to show or hide the scroll-to-top button based on scroll position
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar bg="black" variant="dark" expand="lg" fixed="top" className="ui-navbar">
      <Navbar.Brand as={NavLink} to="/" className="ui-navbar-brand">
        <img src={HorizonSellerIcon} alt="Horizon Seller Icon" className="ui-navbar-icon" />
        Horizon
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/homeSupplier" className="ui-navbar-nav-link">Seller Home</Nav.Link>
          <Nav.Link as={NavLink} to="/sellonline" className="ui-navbar-nav-link">Sell Online</Nav.Link>
          <Nav.Link as={NavLink} to="/howitsworks" className="ui-navbar-nav-link">Grow Business</Nav.Link>
          <Nav.Link as={NavLink} to="/pricingcommission" className="ui-navbar-nav-link">Pricing & Commission</Nav.Link>
          <Nav.Link as={NavLink} to="/gst" className="ui-navbar-nav-link">GST</Nav.Link>
        </Nav>
        <Nav className="ui-ml-auto">
          <Button variant="dark" href="/signin">Login</Button>
          <div className="mx-2"></div> {/* Add a spacer */}
          <Button variant="dark" href="/registration">Start Selling</Button>
        </Nav>
      </Navbar.Collapse>
      {showScrollButton && (
        <Button variant="dark" className="scroll-to-top-button" onClick={scrollToTop}>
          <i className="fas fa-chevron-up"></i> {/* Use any icon of your choice for scroll-to-top */}
        </Button>
      )}
    </Navbar>
  );
}

export default AppNavbar;
