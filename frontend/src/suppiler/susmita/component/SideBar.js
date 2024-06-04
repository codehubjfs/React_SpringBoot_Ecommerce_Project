import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';

function Sidebar({ sidebarItems, onSidebarItemClick }) {
  const [activeItemId, setActiveItemId] = useState(null);

  const handleItemClick = (id) => {
    setActiveItemId(id);
    onSidebarItemClick(id);
  };

  return (
    <div style={{backgroundColor:' #d6d6d6',borderRadius:'5px'}}>
    <div style={styles.sidebar}>
      <Nav className="flex-column">
        {sidebarItems.map(item => (
          <Nav.Item key={item.id} className={item.id === activeItemId ? 'active' : ''}>
            <Nav.Link
              onClick={() => handleItemClick(item.id)}
              style={item.id === activeItemId ? styles.activeLink : styles.link}
            >
              {item.label}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
    </div>
  );
}

const styles = {
  sidebar: {
    width: '250px',
    // backgroundColor: '#fff',
    borderRight: '1px solid #dee2e6',
    borderRadius: '5px',
    // boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    marginBottom: '20px',
  },
  link: {
    cursor: 'pointer',
    color: '#000',
    padding: '10px 20px',
    borderRadius: '5px',
    marginBottom: '10px',
    transition: 'background-color 0.3s ease',
  },
  activeLink: {
    cursor: 'pointer',
    color: '#fff',
    backgroundColor: 'black',
    padding: '10px 20px',
    borderRadius: '5px',
    marginBottom: '10px',
    transition: 'background-color 0.3s ease',
  },
  hoverLink: {
    backgroundColor: '#ccf0e7',
  }
};

export default Sidebar;
