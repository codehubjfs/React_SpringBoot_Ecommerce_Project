import React from "react";
import AppNavbar from "../Layout/AppNavbar";
import Footer from "./Footer";
// import { SellerRoutes } from "../Routes/SellerRoutes";

function Layouts({children}) {
  return (
    <div>
      {/* <h1>layout</h1> */}
      <AppNavbar />
      <div><main>{children}</main></div>
      <Footer/>
    </div>
  );
}
export default Layouts;
