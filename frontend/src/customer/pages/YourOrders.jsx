import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Beautyproductcard, Clothingproductcard, Electroniccards, Homeproductcard } from "../components/Productdatas";

const YourOrders = () => {
    const { categoryId, productId } = useParams();

    const [selectedOrderIndex, setSelectedOrderIndex] = useState(null);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch orders from local storage
        const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrders(storedOrders);
    }, []);

    orders.forEach((order) => {
        const boughtDate = new Date();
        order.boughtDate = boughtDate.toLocaleDateString();
        const deliveryDate = new Date(boughtDate.getTime());
        deliveryDate.setDate(boughtDate.getDate() + 3);
        order.deliveryDate = deliveryDate.toLocaleDateString();
    });

    const clearOrders = () => {
        // Clear the orders in the state
        setOrders([]);
        // Clear the orders in local storage
        localStorage.removeItem('orders');
    };

    const handleOrderClick = (index) => {
        // Set the selected order index in the state
        setSelectedOrderIndex(index);
    };

    const renderProductDetails = (order) => {
        if (!order) return null;

        switch (parseInt(order.categoryId)) {
            case 1: // Electronics
                return (
                    <>
                        <p className="small text-muted mb-0">Color: {order.Color}</p>
                        <p className="small text-muted mb-0">Storage: {order.Storage}</p>
                    </>
                );
            case 2: // Home Appliances
                return (
                    <>
                        <p className="small text-muted mb-0">Color: {order.Color}</p>
                        <p className="small text-muted mb-0">Size: {order.Size}</p>
                    </>
                );
            case 3: // Beauty Products
                return (
                    <>
                        <p className="small text-muted mb-0">Content: {order.Content}</p>
                    </>
                );
            case 4: // Clothing
                return (
                    <>
                        <p className="small text-muted mb-0">Size: {order.Size}</p>
                        <p className="small text-muted mb-0">Color: {order.Color}</p>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <br />
            <br />
            <h2>Welcome to orders</h2>
            <div className="card-header px-4 py-5">
                <h5 className="text-muted mb-0">Order Details</h5>

                {orders.length === 0 ? (
                    <p>No orders available.</p>
                ) : (
                    <div>
                        {orders.map((order, index) => (
                            <div key={index} onClick={() => handleOrderClick(index)} style={{ cursor: 'pointer', marginBottom: '20px' }}>
                                <div className="card-header-order" style={{ borderRadius: '10px', boxShadow: 'none', transition: 'none' }}>
                                    <div className="card-body p-4" style={{ padding: '20px', boxShadow: 'none', transition: 'none' }}>
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            {/* Include the product image here */}
                                            <img src={order.imageSrc} alt={order.productName} style={{ width: '100px', marginRight: '20px' }} />
                                            <div>
                                                <p className="lead fw-normal mb-0" style={{ color: '#a8729a' }}>
                                                    Product Name: {order.productName}
                                                </p>
                                                <p className="small text-muted mb-0">Price: ₹{order.price}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <p className="small text-muted mb-0">Bought Date: {order.boughtDate}</p>
                                            <p className="small text-muted mb-0">Delivery Date: {order.deliveryDate}</p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            {renderProductDetails(order)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <button onClick={clearOrders}>Clear Orders</button>
            </div>
        </div>
    );
};

export default YourOrders;