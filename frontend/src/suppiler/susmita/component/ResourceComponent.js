import React, { useState } from 'react';
import Sidebar from './SideBar';
import '../App.css';

function ResourceComponent() {
    const [selectedItem, setSelectedItem] = useState('requirements');
    const sidebarItems = [
        { id: 'requirements', label: 'requirements' },
        { id: 'adding-products', label: 'adding-products' },
        { id: 'manage-products', label: 'manage-products' },
        { id: 'fee-payments', label: 'fee-payments' },
        { id: 'tools-to-grow', label: 'tools-to-grow' },
        { id: 'help-support', label: 'help-support' },
        { id: 'other-resources', label: 'other-resources' }
    ];
    const additionalContent = (
        <>
      
          <h1 className="ui-content"><span className="ui-headingresource">For Seller:</span>Introduction to Selling on Horizon.in</h1>
          </>
    );
    return (
        <div>
            <Sidebar sidebarItems={sidebarItems} additionalContent={additionalContent}  selectedItem={selectedItem} onSidebarItemClick={setSelectedItem} />
        </div>
    );
}

export default ResourceComponent;
