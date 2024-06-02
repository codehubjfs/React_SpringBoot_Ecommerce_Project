import React from 'react';
import { Link } from 'react-router-dom';
import styles from './sidebar1.module.css'; // Import the CSS module

const SellerSidebar = ({ isSidebarVisible }) => {
  return (
    <div className={`${styles.SellerSidebar} ${isSidebarVisible ? styles.visible : styles.hidden}`} style={{ marginTop: '60px' }}>
      
      <div className={styles.SellerSidebarMenu}>
        <ul>
        
          <li>
            <Link to="/home" className={styles.active}><span ></span>
              <span className={styles.Span}><i class="fa-sharp fa-solid fa-house"></i> Dashboard</span></Link>
          </li>
          <li>
            <Link to="/Inventory"><span ></span>
              <span className={styles.Span}>📦 Inventory</span></Link>
          </li>
          <li>
            <Link to="/ProductRequest"><span></span>
              <span className={styles.Span}>🛒 Product Request</span></Link>
          </li>
          <li>
            <Link to="/Product"><span></span>
              <span className={styles.Span}><img width="25" height="25" src="https://img.icons8.com/emoji/48/question-mark-emoji.png" alt="question-mark-emoji"/> Product Q/A</span></Link>
          </li>
          <li>
            <Link to="/TableDetails"><span ></span>
              <span className={styles.Span}>📋 Report</span></Link>
          </li>
          <li>
            <Link to="/Support"><span></span>
              <span className={styles.Span}>❤ Support/Help</span></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SellerSidebar;

