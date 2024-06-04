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
    <header style={styles.header}>
      <div style={styles.titleContainer}>
        <h3 style={styles.title}>
          <button style={styles.button} onClick={toggleSidebar}>
            <span className="las la-bars" style={styles.icon}></span>
          </button>
          Admin
        </h3>
      </div>

      <div style={styles.profileContainer}>
        <div className="Admin-notification-icon">
          <Link to="#" style={styles.link} onClick={openNotificationModal}>
            <span>🔔</span>
          </Link>
        </div>
        <div className="Admin-profile-dropdown" style={styles.profileDropdown}>
          <div className="Admin-dropdown">
            <button
              className="btn border-none dropdown-toggle"
              type="button"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src={profilePlaceholder} alt="" style={styles.profileImage} />
              <span className="ms-2" style={styles.name}>{profile?.name || 'Guest'}</span>
            </button>
            <div className="Admin-dropdown-menu bg-white border-none" aria-labelledby="triggerId" style={styles.dropdownMenu}>
              <Link to="/profile1" className="dropdown-item">Profile</Link>
              <Link to="/" className="dropdown-item">Log out</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleContainer: {
    marginLeft: '0px'
  },
  title: {
    color: 'white',
    margin: '0'
  },
  button: {
    background: 'none',
    border: 'none'
  },
  icon: {
    color: 'white'
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  },
  profileDropdown: {
    position: 'relative',
    marginLeft: '10px'
  },
  profileImage: {
    borderRadius: '100%',
    height: '40px',
    width: '40px'
  },
  name: {
    color: 'white',
    fontSize: 'medium'
  },
  dropdownMenu: {
    zIndex: '1001'
  }
};

export default Header;
