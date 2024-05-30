// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import SellerRequest from '../components/SellerRequest';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have Bootstrap imported

// // Breadcrumb Component
// function Breadcrumb() {
//     return (
//         <nav aria-label="breadcrumb"> 
//             <ol className="breadcrumb py-3 px-3">
//                 <li className="breadcrumb-item inactive">
//                     Admin
//                 </li>
//                 <li className="breadcrumb-item inactive" aria-current="page">
//                 <Link to="/dashboard/seller" style={{textDecoration:'none'}}>Seller</Link>

//                 </li>
//             </ol>
//         </nav>
//     );
// }

// // SellerPage Component
// function SellerPage() {
//     // Initial array of seller request objects
//     const initialSellerRequests = [
//         {
//             id: 1,
//             seller: "Amazon",
//             productName: "Smartphones",
//             productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//             price: "50",
//             quantity: "100",
//             category: "Electronics"
//         },
//         {
//             id: 2,
//             seller: "Flipkart",
//             productName: "T-Shirt",
//             productDescription: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
//             price: "70",
//             quantity: "50",
//             category: "Clothing"
//         },
//         {
//             id: 3,
//             seller: "Best Buy",
//             productName: "Headphones",
//             productDescription: "High-quality headphones for immersive sound experience.",
//             price: "100",
//             quantity: "30",
//             category: "Electronics"
//         },
//         {
//             id: 4,
//             seller: "Nike",
//             productName: "Running Shoes",
//             productDescription: "Lightweight running shoes for ultimate comfort and performance.",
//             price: "120",
//             quantity: "20",
//             category: "Footwear"
//         },
//         {
//             id: 5,
//             seller: "Apple",
//             productName: "MacBook Pro",
//             productDescription: "Powerful laptop for professional use with stunning Retina display.",
//             price: "1500",
//             quantity: "10",
//             category: "Electronics"
//         }
//     ];

//     // State to hold seller requests
//     const [sellerRequests, setSellerRequests] = useState(initialSellerRequests);

//     // Function to handle approval of a request
//     const handleApprove = (requestId) => {
//         setSellerRequests(prevRequests => prevRequests.filter(request => request.id !== requestId));
//     };

//     // Function to handle rejection of a request
//     const handleReject = (requestId) => {
//         setSellerRequests(prevRequests => prevRequests.filter(request => request.id !== requestId));
//     };

//     const [isHovered, setIsHovered] = useState(false);

//     return (
//         <><br></br>
//         <div className="container" style={{ padding: "0px" }}>
//             <div className="d-flex justify-content-between align-items-center mt-4" style={{ margin: "0px" }}>
//                 <Breadcrumb />
//                 <div>
//                     <Link 
//                         to="/seller/sellerdetails" 
//                         className="btn btn-dark"
//                         style={{
//                             color: 'white',
//                             textDecoration: isHovered ? 'underline' : 'none'
//                         }}
//                         onMouseEnter={() => setIsHovered(true)}
//                         onMouseLeave={() => setIsHovered(false)}
//                     >
//                         View Sellers
//                     </Link>
//                 </div>
//             </div>
//             <section className="Admin-seller-requests" style={{ padding: "0px" }}>
//                 <h2 className="text-center mb-4" style={{ paddingTop: "20px" }}>Seller Product Requests</h2>
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <SellerRequest 
//                             sellerRequests={sellerRequests} 
//                             onApprove={handleApprove} 
//                             onReject={handleReject} 
//                         />
//                     </div>
//                 </div>
//             </section>
//         </div>
//         </>
//     );
// }

// export default SellerPage;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPendingProducts, deleteProduct } from '../slices/productSlice';
import SellerRequest from '../components/SellerRequest';
import 'bootstrap/dist/css/bootstrap.min.css';

// Breadcrumb Component
function Breadcrumb() {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb py-3 px-3">
                <li className="breadcrumb-item">
                    Admin
                </li>
                <li className="breadcrumb-item" aria-current="page">
                    <Link to="/dashboard/seller" style={{ textDecoration: 'none' }}>Seller</Link>
                </li>
            </ol>
        </nav>
    );
}

// SellerPage Component
function SellerPage() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchPendingProducts());
            } catch (err) {
                setError(err.toString());
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [dispatch]);

    // Function to handle approval of a request
    const handleApprove = (requestId) => {
        dispatch(deleteProduct(requestId));
    };

    // Function to handle rejection of a request
    const handleReject = (requestId) => {
        dispatch(deleteProduct(requestId));
    };

    return (
        <>
            <br />
            <div className="container" style={{ padding: "0px" }}>
                <div className="d-flex justify-content-between align-items-center mt-4" style={{ margin: "0px" }}>
                    <Breadcrumb />
                    <div>
                        <Link
                            to="/seller/sellerdetails"
                            className="btn btn-dark"
                            style={{
                                color: 'white',
                                textDecoration: isHovered ? 'underline' : 'none'
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            View Sellers
                        </Link>
                    </div>
                </div>
                <section className="Admin-seller-requests" style={{ padding: "0px" }}>
                    <h2 className="text-center mb-4" style={{ paddingTop: "20px" }}>Seller Product Requests</h2>
                    <div className="container">
                        <div className="row justify-content-center">
                            {loading ? (
                                <div>Loading...</div>
                            ) : error ? (
                                <div>{error}</div>
                            ) : (
                                <SellerRequest
                                    sellerRequests={products}
                                    onApprove={handleApprove}
                                    onReject={handleReject}
                                />
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default SellerPage;
