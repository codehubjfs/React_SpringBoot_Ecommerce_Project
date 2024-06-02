import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSellerDetails } from '../../slice/sellerDetailsSlice';
import { Link } from 'react-router-dom';
import logo from '../photos/Webpage-icon.png';
import profile from '../photos/smart.jpg';
import NotificationModal from './NotificationModal';
import '../title.css';

const SellerTitle = ({ toggleSidebar }) => {
  const sellerDetails = useSelector((state) => state.sellerDetails);
  const dispatch = useDispatch();
  const [showNotificationModal, setShowNotificationModal] = useState(false);

  useEffect(() => {
    if (sellerDetails.id) {
      dispatch(fetchSellerDetails(sellerDetails.id));
    }
  }, [dispatch, sellerDetails.id]);

  const handleNotificationClick = () => {
<<<<<<< HEAD

    if (sellerDetails.sellerId) {
      dispatch(fetchRejectedProductsBySupplier({ supplierId: sellerDetails.sellerId }));
      setShowNotificationModal(true);
    }
=======
    setShowNotificationModal(true);
>>>>>>> 073900aa4a902ef0038f5eb4b832a757a4828c10
  };

  const handleCloseNotificationModal = () => {
    setShowNotificationModal(false);
  };

  return (
    <header id="header" className="Seller-main-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#343a40', padding: '0px' }}>
      <h3 style={{ color: 'white', margin: '0' }}>
        <button id="sidebar-toggle" style={{ background: 'none', border: 'none' }} onClick={toggleSidebar}>
          <span className="las la-bars" style={{ color: 'white' }}><i className="fa-sharp fa-regular fa-bars"></i></span>
        </button>
        Horizon
      </h3>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="Seller-notification-icon" style={{ marginRight: '10px' }}>
          <Link to="#" style={{ color: 'white', textDecoration: 'none' }} onClick={handleNotificationClick}>
            <span>🔔</span>
          </Link>
        </div>
        <div className="Seller-profile-dropdown" style={{ position: 'relative', marginLeft: '10px' }}>
          <div className="Seller-dropdown">
            <img src={profile} alt="Profile" style={{ borderRadius: '100%', height: '40px', width: '40px' }} />
            <span className="ms-2" style={{ color: 'white', fontSize: 'medium', marginRight: '10px' }}>{sellerDetails.fullName}</span>
            <div className="Seller-dropdown-menu bg-white border-none" aria-labelledby="triggerId" style={{ zIndex: '1001' }}>
              <Link to="/UserProfileForm" className="dropdown-item">Profile</Link>
              <Link to="/homesupplier" className="dropdown-item">Logout</Link>
            </div>
          </div> 
        </div>
      </div>
      <NotificationModal show={showNotificationModal} handleClose={handleCloseNotificationModal} />
    </header>
  );
};



export default SellerTitle;





