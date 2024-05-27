import React from "react";
import { Link } from "react-router-dom";
import '../Admin1.css';
function Utilities(){
    return(
        <div>
            <br /><br />
            <h2 style={{textAlign:'center'}}>Utilities</h2>
            <hr />
            <Link to="/dashboard/utilities/category">
            <div className="utilityBox">
                <div className="utility">
                    <h3>Category</h3>
                </div>
            </div>
            </Link>
            <Link to="/dashboard/utilities/subcategory">
            <div className="utilityBox">
                <div className="utility">
                    <h3>Sub Category</h3>
                </div>
            </div>
            </Link>
        </div>
    );
}

export default Utilities;