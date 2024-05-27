import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout4({ children }) {
  return (
    <div>
      <NavBar />
      <div className="content-container">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
export default Layout4;