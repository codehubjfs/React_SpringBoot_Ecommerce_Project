import React from "react";
import Navbar from './Navbar';

function Layouts({ children }) {
  return (
    <div>
      <Navbar />
      
      <main>{children}</main>
             
    </div>
  );
}

export default Layouts;