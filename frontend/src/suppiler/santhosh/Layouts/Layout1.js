import React, { useState, useEffect } from "react";
import SellerTitle from "../component/Title";
import SellerSidebar from "../component/sidebar";
// import { NotificationModal } from "../components/NotificationModal";

const SellerLayout = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  // const [isNotificationModalOpen, setNotificationModalOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  // const openNotificationModal = () => {
  //   setNotificationModalOpen(true);
  // };

  // const closeNotificationModal = () => {
  //   setNotificationModalOpen(false);
  // };
  useEffect(() => {
    const handleResize = () => {
      setSidebarVisible(window.innerWidth > 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth > 992) {
  //       setSidebarVisible(false);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div className="main-content">
      <SellerSidebar isSidebarVisible={isSidebarVisible} />
      <SellerTitle toggleSidebar={toggleSidebar}  />

      <div
        style={{
          marginLeft: isSidebarVisible ? "120px" : "-125px",
          marginTop: isSidebarVisible ? "-80px" : "-80px",
          transition: "margin 0.3s ease",
        }}
      >
        <main className="seller-main">{children}</main>
      </div>

      {/* <NotificationModal isOpen={isNotificationModalOpen} onClose={closeNotificationModal} /> */}
    </div>
  );
};

export default SellerLayout;