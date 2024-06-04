import React, { useState } from 'react';
import SideBar from './SideBar';
import RegisteringSeller from './RegisteringSeller';
import ProductListing from './ProductListing';
import OrderComponent from './OrderComponent';
import DeliveryOrders from './DeliveryOrders';

function MainComponent() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSidebarItemClick = (id) => {
    setSelectedItem(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sidebarItems = [
    { id: 'register-account', label: 'Register Your Account' },
    { id: 'list-products', label: 'List Your Products' },
    { id: 'getting-orders', label: 'Getting Orders' },
    { id: 'delivery-orders', label: 'Delivery Orders' },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <SideBar
        sidebarItems={sidebarItems}
        onSidebarItemClick={handleSidebarItemClick}
      />
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        <div id="register-account">
          <RegisteringSeller />
        </div>
        <div id="list-products">
          <ProductListing />
        </div>
        <div id="getting-orders">
          <OrderComponent />
        </div>
        <div id="delivery-orders">
          <DeliveryOrders />
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
