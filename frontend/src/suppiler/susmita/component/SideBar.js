import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import '../Sidebar.css'; // Import CSS file for styling

function Sidebar({ sidebarItems, onSidebarItemClick }) {
  const [activeItemId, setActiveItemId] = useState(null);

  const handleItemClick = (id) => {
    setActiveItemId(id);
    onSidebarItemClick(id); // Call the callback function to handle the item click
  };

  return (
    <div className="ui-sidebar">
      <Nav className="ui-flex-column">
        {sidebarItems.map(item => (
          <Nav.Item key={item.id} className={item.id === activeItemId ? 'active' : ''}>
            <Nav.Link onClick={() => handleItemClick(item.id)}>{item.label}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
}

export default Sidebar;
