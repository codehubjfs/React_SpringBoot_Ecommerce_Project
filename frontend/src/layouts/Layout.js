import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar1 from "../components/Sidebar1";
import { NotificationModal } from "../components/NotificationModal";

const Layout = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(window.innerWidth > 900);
  const [isNotificationModalOpen, setNotificationModalOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const openNotificationModal = () => {
    setNotificationModalOpen(true);
  };

  const closeNotificationModal = () => {
    setNotificationModalOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setSidebarVisible(window.innerWidth > 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Sidebar1 isSidebarVisible={isSidebarVisible} />
      
        <Header toggleSidebar={toggleSidebar} openNotificationModal={openNotificationModal} />
      
      
      <div
        style={{
          marginLeft: isSidebarVisible ? "230px" : "0px",
          marginTop: isSidebarVisible ? "-80px" : "-80px",
          transition: "margin 0.2s ease",
        }}
      >
        <main className="Admin-main" >{children}</main>
      </div>

      <NotificationModal isOpen={isNotificationModalOpen} onClose={closeNotificationModal} />
    </>
  );
};

export default Layout;
