import React, { useState } from 'react';
import Sidebar from './SideBar';
import PrimeComponent from './PrimeComponent'; // Import PrimeComponent
import '../App.css';
import GrowthTools from './GrowthTools';


function GrowthComponent() {
  const [selectedItem, setSelectedItem] = useState('requirements');
  const sidebarItems = [
    { id: 'become-prime-seller', label: 'Become a Prime Seller' },
    { id: 'tools', label: 'Tools' },
    { id: 'selling-programs', label: 'Selling Programs' },
    { id: 'service-providers', label: 'Service Providers' },
    { id: 'sell-globally', label: 'Sell Globally' },
    { id: 'shopping-festivals', label: 'Shopping Festivals' }
  ];

  const handleSidebarItemClick = (id) => {
    setSelectedItem(id);
  };
<GrowthTools
  title="Tools to help you grow"
  description="Horizonseller.in offers a whole host of tools that can help you succeed."
  toolsList={["Sponsored Ads on Amazon", "Automated Pricing on Amazon", "Voice of customer dashboard on Horizonseller"]}
  linkText="Find out about all the tools Horizonseller has to offer"
/>


  return (
    <div className="ui-content-container">
            <div className="ui-sidebar-container" id="become-prime-seller">
                <Sidebar sidebarItems={sidebarItems} />
                <PrimeComponent />
            </div>
            <GrowthTools />

            </div>

  );
}

export default GrowthComponent;
