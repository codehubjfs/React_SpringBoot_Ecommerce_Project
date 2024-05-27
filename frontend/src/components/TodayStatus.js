import React, { useState, useEffect } from 'react';

function TodayStatus() {
    const [customerCounter, setCustomerCounter] = useState(0);
    const [sellerCounter, setSellerCounter] = useState(0);
    const [productCounter, setProductCounter] = useState(0);
    const [incomeCounter, setIncomeCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            
            setCustomerCounter(prevCount => {
                const newCount = prevCount + 1;
                return newCount < 100 ? newCount : prevCount; // Stop at 100
            });
            setSellerCounter(prevCount => {
                const newCount = prevCount + 1;
                return newCount < 50 ? newCount : prevCount; // Stop at 50
            });
            setProductCounter(prevCount => {
                const newCount = prevCount + 5;
                return newCount < 200 ? newCount : prevCount; // Stop at 200
            });
            setIncomeCounter(prevCount => {
                const newCount = prevCount + 100;
                return newCount < 10000 ? newCount : prevCount; // Stop at 10000
            });
        }, 50); 

        
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="Admin1-card w-100">
            <div className="Admin1-card-body">
                <h2>Today's Status</h2>
                <br />
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <div className="counter-container text-center">
                            <h3 className="mb-4">{customerCounter}</h3>
                            <p>New Customers</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="counter-container text-center">
                            <h3 className="mb-4">{sellerCounter}</h3>
                            <p>New Sellers</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="counter-container text-center">
                            <h3 className="mb-4">{productCounter}</h3>
                            <p>New Products</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="counter-container text-center">
                            <h3 className="mb-4">₹{incomeCounter}</h3>
                            <p>Today's Income</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodayStatus;
