import React, { useState } from 'react';
import SideBar from './SideBar';
import '../App.css';
import '../Sidebar.css';
import RegisteringSeller from './RegisteringSeller';
import ProductListing from './ProductListing';
import OrderComponent from './OrderComponent';
import Deliveryorders from './Deliveryorders';


function MainComponent() {
  const [selectedItem, setSelectedItem] = useState(null); // State to track selected item

  const handleSidebarItemClick = (id) => {
    setSelectedItem(id);
    // Scroll to the corresponding section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sidebarItems = [
    { id: 'register-account', label: 'Register Your Account' },
    { id: 'list-products', label: 'List Your Products' },
    { id: 'getting-orders', label: 'Getting Orders' },
    { id: 'delivery-orders', label: 'Delivery Orders' }
  ];

  return (
    <div className="ui-flex-container">
      <SideBar
        sidebarItems={sidebarItems}
        onSidebarItemClick={handleSidebarItemClick}
      />
      <div>
        <div id="register-account"> {/* Provide id here */}
          <RegisteringSeller />
        </div>
        <div id="list-products"> {/* Provide id here */}
          <ProductListing />
        </div>
        <div id="getting-orders"> {/* Provide id here */}
          <OrderComponent />
        </div>
        <div id="delivery-orders"> {/* Provide id here */}
       <Deliveryorders />
        </div>
   
        {/* Add other components */}
      </div>
    </div>
  );
}

export default MainComponent;
