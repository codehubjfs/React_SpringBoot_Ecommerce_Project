import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export function Layout({ children }) {
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
