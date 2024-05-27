import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/profile.png';


const Navbar = ({ toggleSidebar }) => {
  
  return (
    <header id="header" className="Admin-main-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <h3 style={{ color: 'white', margin: '0' }}>
        <button id="sidebar-toggle" style={{ background: 'none', border: 'none' }} onClick={toggleSidebar}>
          <span className="las la-bars" style={{ color: 'white' }}></span>
        </button>
        Admin
      </h3>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="Admin-notification-icon">
          <Link to="/notification" style={{ color: 'white', textDecoration: 'none' }}>
            <span>🔔</span>
          </Link>
        </div>
        <div className="Admin-profile-dropdown" style={{ position: 'relative', marginLeft: '10px' }}>
          <div className="Admin-dropdown">
            <button className="btn border-none dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              <img src={profile} alt="" style={{ borderRadius: '100%', height: '40px', width: '40px' }} />
              <span className="ms-2" style={{ color: 'white', fontSize: 'medium' }}>Sathish</span>
            </button>
            <div className="Admin-dropdown-menu bg-white border-none" aria-labelledby="triggerId" style={{ zIndex: '1001' }}>
              <Link to="/profile1" className="dropdown-item">Profile</Link>
              <Link to="/" className="dropdown-item">Log out</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
