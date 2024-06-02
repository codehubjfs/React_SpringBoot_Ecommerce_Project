// /*
// import React from 'react';
// import './productbuttons.css';
// import {Link} from "react-router-dom";

// const ProductButtons = () => {
//     return (
//         <div className="row mt-3">
//             <div className="col-12">
//                 <div className="btn-group" role="group" aria-label="ProductLayout Buttons">
//                     <Link to="/product">
//                     <a href=".#" className="btn btn-custom-orange shadow-0">Buy now</a>
//                     </Link>
//                     <a href="#" className="btn btn-custom-yellow shadow-0"><i className="me-1 fas fa-shopping-basket"></i>Add to cart</a>
//                     <a href="#" className="btn btn-outline-secondary py-2 icon-hover px-3"><i
//                         className="me-1 fas fa-heart fa-lg"></i>Save</a>
//                 </div>


//             </div>
//         </div>
//     );
// };

// export default ProductButtons;
// */
// import React from 'react';
// import { Link } from "react-router-dom";
// import './productbuttons.css';
// import { useAuth } from '../AuthContext';

// const ProductButtons = ({ categoryId,productId ,selectedColor,selectedStorage,selectedSize,selectedContent }) => {
//     const { isLoggedIn, login, logout } = useAuth();

//     return (
//         <div className="row mt-3">
//             <div className="col-12">
//                 {isLoggedIn?(
//                 <div className="btn-group" role="group" aria-label="ProductLayout Buttons">
//                     <Link to={`/checkout/${categoryId}/${productId}?color=${encodeURIComponent(selectedColor)}&storage=${encodeURIComponent(selectedStorage)}&size=${encodeURIComponent(selectedSize)}&Content=${encodeURIComponent(selectedContent)}`}>

//                     <button className="btn btn-custom-orange shadow-0">Buy now</button>
//                     </Link>
//                     <a href="#" className="btn btn-custom-yellow shadow-0"><i className="me-1 fas fa-shopping-basket"></i>Add to cart</a>
//                     <a href="#" className="btn btn-outline-secondary py-2 icon-hover px-3"><i
//                         className="me-1 fas fa-heart fa-lg"></i>Save</a>
//                 </div>
//                 ):(
//                 <div className="btn-group" role="group" aria-label="ProductLayout Buttons">
//                 <Link to={"/signin"}>

//                 <button className="btn btn-custom-orange shadow-0">Buy now</button>
//                 </Link>
//                 <Link to={"/signin"}>
//                 <a href="#" className="btn btn-custom-yellow shadow-0"><i className="me-1 fas fa-shopping-basket"></i>Add to cart</a>
//                 <a href="#" className="btn btn-outline-secondary py-2 icon-hover px-3"><i
//                     className="me-1 fas fa-heart fa-lg"></i>Save</a></Link>
//             </div>
//             )}
//             </div>
//         </div>
//     );
// };

// export default ProductButtons;




import React from 'react';
import { Link } from "react-router-dom";
import './productbuttons.css';

const ProductButtons = ({ category,id ,selectedColor,selectedStorage,selectedSize,selectedContent }) => {
    return (
        <div className="row mt-3">
            <div className="col-12">
                <div className="btn-group" role="group" aria-label="ProductLayout Buttons">
                    <Link to={`/checkout/${category}/${id}`}>

                    <button className="btn btn-custom-orange shadow-0">Buy now</button>
                    </Link>
                    <a href="#" className="btn btn-custom-yellow shadow-0"><i className="me-1 fas fa-shopping-basket"></i>Add to cart</a>
                    <a href="#" className="btn btn-outline-secondary py-2 icon-hover px-3"><i
                        className="me-1 fas fa-heart fa-lg"></i>Save</a>
                </div>
            </div>
        </div>
    );
};

export default ProductButtons;