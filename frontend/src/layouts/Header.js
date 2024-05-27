import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import profilePlaceholder from '../assets/profile.png';
import { fetchProfile } from '../slices/profileSlices';

const Header = ({ toggleSidebar, openNotificationModal }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);
  const status = useSelector((state) => state.profile.status);
  const error = useSelector((state) => state.profile.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProfile());
    }
  }, [dispatch, status]);

  return (
    <header id="header" className="Admin-main-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{marginLeft:'0px'}}>
      <h3 style={{ color: 'white', margin: '0' }}>
        <button id="sidebar-toggle" style={{ background: 'none', border: 'none' }} onClick={toggleSidebar}>
          <span className="las la-bars" style={{ color: 'white' }}></span>
        </button>
        Admin
      </h3>
      </div>
      

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="Admin-notification-icon">
          <Link to="#" style={{ color: 'white', textDecoration: 'none' }} onClick={openNotificationModal}>
            <span>🔔</span>
          </Link>
        </div>
        <div className="Admin-profile-dropdown" style={{ position: 'relative', marginLeft: '10px' }}>
          <div className="Admin-dropdown">
            <button className="btn border-none dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              <img src={profilePlaceholder} alt="" style={{ borderRadius: '100%', height: '40px', width: '40px' }} />
              <span className="ms-2" style={{ color: 'white', fontSize: 'medium' }}>{profile.name}</span>
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

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
};

const titleStyle = {
  color: 'white',
  margin: '0'
};

const buttonStyle = {
  background: 'none',
  border: 'none'
};

const iconStyle = {
  color: 'white'
};

const profileContainerStyle = {
  display: 'flex',
  alignItems: 'center'
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none'
};

const profileDropdownStyle = {
  position: 'relative',
  marginLeft: '10px'
};

const profileImageStyle = {
  borderRadius: '100%',
  height: '40px',
  width: '40px'
};

const nameStyle = {
  color: 'white',
  fontSize: 'medium'
};

const dropdownMenuStyle = {
  zIndex: '1001'
};

export default Header;
