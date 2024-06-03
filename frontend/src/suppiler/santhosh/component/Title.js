import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRejectedProductsBySupplier } from '../../slice/productSlice';
import { fetchSellerDetails, updateSellerDetails } from '../../slice/sellerDetailsSlice';
import { Link, useNavigate } from 'react-router-dom';
import NotificationModal from './NotificationModal';
import profile from '../photos/smart.jpg';
import '../title.css';

const SellerTitle = ({ toggleSidebar }) => {
  const sellerDetails = useSelector((state) => state.sellerDetails);
  const rejectedProducts = useSelector((state) => state.products.rejectedProducts);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showNotificationModal, setShowNotificationModal] = useState(false);

  useEffect(() => {
    const storedDetails = JSON.parse(sessionStorage.getItem('sellerDetails'));
    if (storedDetails) {
      dispatch(updateSellerDetails(storedDetails)); // Update Redux state with stored details
    } else if (sellerDetails.sellerId) {
      dispatch(fetchSellerDetails(sellerDetails.sellerId)); // Fetch details from server if not in sessionStorage
    }
  }, [dispatch, sellerDetails.sellerId]);

  const handleNotificationClick = () => {
    if (sellerDetails.sellerId) {
      dispatch(fetchRejectedProductsBySupplier({ supplierId: sellerDetails.sellerId }));
      setShowNotificationModal(true);
    }
  };

  const handleCloseNotificationModal = () => {
    setShowNotificationModal(false);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/homesupplier', { replace: true });

    // Add multiple entries to history stack to prevent back navigation
    // window.history.pushState(null, '', '/homesupplier');
    window.history.pushState(null, '', '/sellerlogin');
   
    // Add popstate listener to redirect to logout page on back navigation
    window.addEventListener('popstate', handleBackButton);

    // Function to handle back button
    function handleBackButton() {
      navigate('/homesupplier', { replace: true });
      window.history.pushState(null, '', '/homesupplier');
    }
  };

  return (
    <header id="header" className="Seller-main-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#343a40', padding: '0px', marginLeft: '50px' }}>
      <h3 style={{ color: 'white', margin: '0' }}>
        <button id="sidebar-toggle" style={{ background: 'none', border: 'none' }} onClick={toggleSidebar}>
          <span className="las la-bars" style={{ color: 'white' }}><i className="fa-solid fa-bars"></i></span>
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
            <span className="ms-2" style={{ color: 'white', fontSize: 'medium', marginRight: '10px' }}>
              {sellerDetails.fullName}
            </span>
            <div className="Admin-dropdown-menu bg-white border-none" aria-labelledby="triggerId" style={{ zIndex: '1001' }}>
              <Link to="/UserProfileForm" className="dropdown-item">Profile</Link>
              <a href="/homesupplier" className="dropdown-item" onClick={handleLogout}>Logout</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SellerTitle;
