import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchSellerDetails } from '../../slice/sellerDetailsSlice';
import { fetchSellerDetails, submitSellerDetails, updateSellerDetailsInDB, updateSellerDetails } from '../../slice/sellerDetailsSlice';
import { fetchRejectedProductsBySupplier } from '../../../slices/productSlice';
import { Link } from 'react-router-dom';
import NotificationModal from './NotificationModal';
import logo from '../photos/Webpage-icon.png';
import profile from '../photos/smart.jpg';
import '../title.css';

const SellerTitle = ({ toggleSidebar }) => {
  const sellerDetails = useSelector((state) => state.sellerDetails);
  const rejectedProducts = useSelector((state) => state.products.rejectedProducts);
  const dispatch = useDispatch();
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const storedDetails = JSON.parse(sessionStorage.getItem('sellerDetails'));

  useEffect(() => {
    // Retrieve seller details from Redux state
    const storedDetails = JSON.parse(sessionStorage.getItem('sellerDetails'));
    if (storedDetails) {
      dispatch(updateSellerDetails(storedDetails)); // Update Redux state with stored details
    } else if (storedDetails.sellerId) {
      dispatch(fetchSellerDetails(storedDetails.sellerId)); // Fetch details from server if not in sessionStorage
    }
  }, [dispatch, storedDetails.sellerId]);

  const handleNotificationClick = () => {
    console.log(sellerDetails.sellerId);
    if (sellerDetails.sellerId) {
      dispatch(fetchRejectedProductsBySupplier({ supplierId: sellerDetails.sellerId }));
      setShowNotificationModal(true);
    }
  };

  const handleCloseNotificationModal = () => {
    setShowNotificationModal(false);
  };

  return (
    <header id="header" className="Seller-main-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#343a40', padding: '0px', marginLeft: '50px' }}>
      <h3 style={{ color: 'white', margin: '0' }}>
        <button id="sidebar-toggle" style={{ background: 'none', border: 'none' }} onClick={toggleSidebar}>
          <span style={{ color: 'white' }}><i className="fa-solid fa-bars"></i></span>
        </button>
       Horizon
      </h3>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="Seller-notification-icon" style={{ marginRight: '10px' }}>
          <Link to="#" style={{ color: 'white', textDecoration: 'none' }} onClick={handleNotificationClick}>
            <span role="img" aria-label="notification">🔔</span>
          </Link>
        </div>
        <NotificationModal 
          show={showNotificationModal} 
          handleClose={handleCloseNotificationModal} 
          rejectedProducts={rejectedProducts} 
        />
        <div className="Admin-profile-dropdown" style={{ position: 'relative', marginLeft: '10px' }}>
          <div className="Admin-dropdown">
            <img src={profile} alt="Profile" style={{ borderRadius: '100%', height: '40px', width: '40px' }} />
            <span className="ms-2" style={{ color: 'white', fontSize: 'medium', marginRight:'10px' }}>{sellerDetails.fullName}</span>
            <div className="Admin-dropdown-menu bg-white border-none" aria-labelledby="triggerId" style={{ zIndex: '1001' }}>
              <Link to="/UserProfileForm" className="dropdown-item">Profile</Link>
              <Link to="/homesupplier" className="dropdown-item">Logout</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SellerTitle;