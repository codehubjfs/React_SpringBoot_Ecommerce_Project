import React, { useState } from 'react';
import ProductRequest from './ProductRequest';
import { Link } from 'react-router-dom';

function ProductRequestDetails() {
    // Initial array of seller request objects
    const initialSellerRequests = [
        {
            id: 1,
            seller: "Amazon",
            productName: "Smartphones",
            productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "50",
            quantity: "100",
            category: "Electronics"
        },
        {
            id: 2,
            seller: "Flipkart",
            productName: "T-Shirt",
            productDescription: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
            price: "70",
            quantity: "50",
            category: "Clothing"
          },
          
        {
            id: 3,
            seller: "Best Buy",
            productName: "Headphones",
            productDescription: "High-quality headphones for immersive sound experience.",
            price: "100",
            quantity: "30",
            category: "Electronics"
        },
        {
            id: 4,
            seller: "Nike",
            productName: "Running Shoes",
            productDescription: "Lightweight running shoes for ultimate comfort and performance.",
            price: "120",
            quantity: "20",
            category: "Footwear"
        },
        {
            id: 5,
            seller: "Apple",
            productName: "MacBook Pro",
            productDescription: "Powerful laptop for professional use with stunning Retina display.",
            price: "1500",
            quantity: "10",
            category: "Electronics"
        }
        
    ];

    // State to hold seller requests
    const [sellerRequests, setSellerRequests] = useState(initialSellerRequests);

    // Function to handle approval of a request
    const handleApprove = (requestId) => {
        setSellerRequests(prevRequests => prevRequests.filter(request => request.id !== requestId));
    };

    // Function to handle rejection of a request
    const handleReject = (requestId) => {
        setSellerRequests(prevRequests => prevRequests.filter(request => request.id !== requestId));
    };

    return (
        <div>
            
            <section className="Admin-seller-requests " style={{ margin: 0, padding: 0 }}>
            <h2 className="text-center mb-4" style={{ marginTop: '60px' }}>Product Status</h2>
                <div className="container">
                    <div className="row justify-content-center">
                        <ProductRequest
                            sellerRequests={sellerRequests} 
                            onReject={handleReject} 
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductRequestDetails;
