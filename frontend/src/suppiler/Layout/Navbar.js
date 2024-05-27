import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/Webpage-icon.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="navbar">
      <div className="container d-flex justify-content-between align-items-center" style={{ margin: '0', padding: '0' }}>
        <Link to="/" className="navbar-brand d-flex align-items-center" style={{ fontFamily: 'sans-serif', fontSize: 'large', color: 'white' }}>
          <img src={logo} alt="Logo" style={{ filter: 'invert(100%)', height: '40px', marginRight: '10px' }} />
          Horizon
        </Link>
        <ul className="navbar-nav" style={{marginLeft:"10px"}}>
          <li className="nav-item">
            <Link to="/signin" className="nav-link" style={{ color: 'white', fontSize: 'larger' }}>Already have an account? Sign in</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
