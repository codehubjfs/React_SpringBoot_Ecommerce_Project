import React from "react";
import Header from "./Header";
import MenuBar from "./Menubar";
import '../title.css';

function Layout({ children }) {
  return (
    <div>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 sellersidebar">
            <MenuBar />
          </div>
          <div className="col-md-9">
            <div className="sellercontent">
              <div className="container-fluid mt-3"> {/* Use container-fluid for full width */}
                <main>{children}</main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
