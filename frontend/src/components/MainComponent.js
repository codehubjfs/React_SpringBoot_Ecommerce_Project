import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar1 from "./Sidebar1";

const MainComponent = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  // Close sidebar when window is resized to more than 992px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setSidebarVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar1 isSidebarVisible={isSidebarVisible} />
      {/* Main content of the page */}
      <div style={{ marginLeft: isSidebarVisible ? "250px" : "0", transition: "margin-left 0.3s ease" }}>
        {/* Your main content here */}
      </div>
    </div>
  );
};

export default MainComponent;
