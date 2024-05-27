import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar1.module.css'; // Import the CSS module

const Sidebar1 = ({ isSidebarVisible }) => {
  return (
    <div className={`${styles.AdminSidebar} ${isSidebarVisible ? styles.visible : styles.hidden}`} style={{marginTop:'60px'}}>
      
      <div className={styles.AdminSidebarMenu}>
        <ul>
        <div className={styles.AdminSidebarBrand}>
        <h4><span className="lab la-opencart" > Horizon</span></h4>
      </div>
          <li>
            <Link to="/dashboard" className={styles.active}><span className="las la-chalkboard"></span>
              <span className={styles.AdminSpan}>Dashboard</span></Link>
          </li>
          <li>
            <Link to="/dashboard/customer"><span className="las la-users"></span>
              <span className={styles.AdminSpan}>Customer</span></Link>
          </li>
          <li>
            <Link to="/dashboard/seller"><span className="las la-user-secret"></span>
              <span className={styles.AdminSpan}>Seller</span></Link>
          </li>
          <li>
            <Link to="/dashboard/payment"><span className="las la-coins"></span>
              <span className={styles.AdminSpan}>Payment</span></Link>
          </li>
          <li>
            <Link to="/dashboard/order"><span className="las la-truck"></span>
              <span className={styles.AdminSpan}>Order</span></Link>
          </li>
          <li>
            <Link to="/dashboard/offer"><span className="lab la-hotjar"></span>
              <span className={styles.AdminSpan}>Offer</span></Link>
          </li>
          <li>
            <Link to="/dashboard/selleroffer"><span className="lab la-hotjar"></span>
              <span className={styles.AdminSpan}>Seller Offer</span></Link>
          </li>
          <li>
            <Link to="/dashboard/offerimage"><span className="lab la-hotjar"></span>
              <span className={styles.AdminSpan}>Offer ads</span></Link>
          </li>
          <li>
            <Link to="/dashboard/utilities"><span className="las la-gift"></span>
              <span className={styles.AdminSpan}>Utilities</span></Link>
          </li>
          <li>
            <Link to="/dashboard/products"><span className="las la-gifts"></span>
              <span className={styles.AdminSpan}>Product</span></Link>
          </li>
          <li>
            <Link to="/dashboard/homeslider"><span className="las la-film"></span>
              <span className={styles.AdminSpan}>Home sliders</span></Link>
          </li>
          <li>
            <Link to="/dashboard/promocode"><span className="las la-barcode"></span>
              <span className={styles.AdminSpan}>Promo code</span></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar1;
