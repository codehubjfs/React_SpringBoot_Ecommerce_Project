import React from 'react';
import '../index.css';
import '../title.css';
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-3 sellersidebar">
                    <ul className="" style={{ marginTop: '30px' }}>
                        <li className="sellernav-item">
                            <Nav.Link as={Link} to="/home">
                                <span>🏠 Home</span>
                            </Nav.Link>
                        </li>
                        <li className="sellernav-item">
                            <Nav.Link as={Link} to="/Inventory">
                                <span>📦 Inventory</span>
                            </Nav.Link>
                        </li>
                        <li className="sellernav-item">
                            <Nav.Link as={Link} to="/ProductRequest">
                                <span>🛒 Product Request</span>
                            </Nav.Link>
                        </li>
                        <li className="sellernav-item">
                            <Nav.Link as={Link} to="/Product">
                                <span>ℹ Product Q/A</span>
                            </Nav.Link>
                        </li>
                        <li className="sellernav-item">
                            <Nav.Link as={Link} to="/TableDetails">
                                <span>📋 Report</span>
                            </Nav.Link>
                        </li>
                        <li className="sellernav-item">
                            <Nav.Link as={Link} to="/Support">
                                <span>❤ Support/Help</span>
                            </Nav.Link>
                        </li>
                    </ul>
                    {/* <div className="sidebar-video embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/rIJwIrGRYAk" frameBorder="0" allowFullScreen></iframe>
                    </div> */}
                </div>
                <div className="col-12 col-md-9">
                    {/* Your main content goes here */}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;