// import React, { useState, useEffect } from 'react';

// function TodayStatus() {
//     const [customerCounter, setCustomerCounter] = useState(0);
//     const [sellerCounter, setSellerCounter] = useState(0);
//     const [productCounter, setProductCounter] = useState(0);
//     const [incomeCounter, setIncomeCounter] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
            
//             setCustomerCounter(prevCount => {
//                 const newCount = prevCount + 1;
//                 return newCount < 100 ? newCount : prevCount; // Stop at 100
//             });
//             setSellerCounter(prevCount => {
//                 const newCount = prevCount + 1;
//                 return newCount < 50 ? newCount : prevCount; // Stop at 50
//             });
//             setProductCounter(prevCount => {
//                 const newCount = prevCount + 5;
//                 return newCount < 200 ? newCount : prevCount; // Stop at 200
//             });
//             setIncomeCounter(prevCount => {
//                 const newCount = prevCount + 100;
//                 return newCount < 10000 ? newCount : prevCount; // Stop at 10000
//             });
//         }, 50); 

        
//         return () => clearInterval(interval);
//     }, []);
//     return (
//         <div className="Admin1-card w-100">
//             <div className="Admin1-card-body">
//                 <h2>Today's Status</h2>
//                 <br />
//                 <br />
//                 <div className="row">
//                     <div className="col-md-6">
//                         <div className="counter-container text-center">
//                             <h3 className="mb-4">{customerCounter}</h3>
//                             <p>New Customers</p>
//                         </div>
//                     </div>
//                     <div className="col-md-6">
//                         <div className="counter-container text-center">
//                             <h3 className="mb-4">{sellerCounter}</h3>
//                             <p>New Sellers</p>
//                         </div>
//                     </div>
//                     <div className="col-md-6">
//                         <div className="counter-container text-center">
//                             <h3 className="mb-4">{productCounter}</h3>
//                             <p>New Products</p>
//                         </div>
//                     </div>
//                     <div className="col-md-6">
//                         <div className="counter-container text-center">
//                             <h3 className="mb-4">₹{incomeCounter}</h3>
//                             <p>Today's Income</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default TodayStatus;


// import React, { useState, useEffect } from 'react';

// function TodayStatus() {
//     const [customerCounter, setCustomerCounter] = useState(0);
//     const [sellerCounter, setSellerCounter] = useState(0);
//     const [productCounter, setProductCounter] = useState(0);
//     const [incomeCounter, setIncomeCounter] = useState(0);

//     useEffect(() => {
//         const fetchTodayCustomerCount = async () => {
//             try {
//                 const response = await fetch('http://localhost:8086/customers/today-count');
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 console.log(data);
//                 setCustomerCounter(data);
//             } catch (error) {
//                 console.error('Error fetching todays customer count:', error);
//             }
//         };

//         fetchTodayCustomerCount();

//         const interval = setInterval(() => {
//             setSellerCounter(prevCount => {
//                 const newCount = prevCount + 1;
//                 return newCount < 50 ? newCount : prevCount; // Stop at 50
//             });
//             setProductCounter(prevCount => {
//                 const newCount = prevCount + 5;
//                 return newCount < 200 ? newCount : prevCount; // Stop at 200
//             });
//             setIncomeCounter(prevCount => {
//                 const newCount = prevCount + 100;
//                 return newCount < 10000 ? newCount : prevCount; // Stop at 10000
//             });
//         }, 50);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="Admin1-card w-100">
//             <div className="Admin1-card-body">
//                 <h2>Today's Status</h2>
//                 <br />
//                 <br />
//                 <div className="row">
//                     <div className="col-md-6">
//                         <div className="counter-container text-center">
//                             <h3 className="mb-4">{customerCounter}</h3>
//                             <p>New Customers</p>
//                         </div>
//                     </div>
//                     <div className="col-md-6">
//                         <div className="counter-container text-center">
//                             <h3 className="mb-4">{sellerCounter}</h3>
//                             <p>New Sellers</p>
//                         </div>
//                     </div>
//                     <div className="col-md-6">
//                         <div className="counter-container text-center">
//                             <h3 className="mb-4">{productCounter}</h3>
//                             <p>New Products</p>
//                         </div>
//                     </div>
//                     <div className="col-md-6">
//                         <div className="counter-container text-center">
//                             <h3 className="mb-4">₹{incomeCounter}</h3>
//                             <p>Today's Income</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default TodayStatus;

import React, { useState, useEffect } from 'react';

function TodayStatus() {
    const [customerCounter, setCustomerCounter] = useState(0);
    const [sellerCounter, setSellerCounter] = useState(0);
    const [productCounter, setProductCounter] = useState(0);
    const [incomeCounter, setIncomeCounter] = useState(0);

    useEffect(() => {
        const fetchTodayCustomerCount = async () => {
            try {
                const response = await fetch('http://localhost:8086/customers/today-count');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCustomerCounter(data);
            } catch (error) {
                console.error('Error fetching today\'s customer count:', error);
            }
        };

        const fetchTodaySellerCount = async () => {
            try {
                const response = await fetch('http://localhost:8086/today-count');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSellerCounter(data);
            } catch (error) {
                console.error('Error fetching today\'s seller count:', error);
            }
        };

        const fetchTodayProductCount = async () => {
            try {
                const response = await fetch('http://localhost:8086/products/today-count');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProductCounter(data);
            } catch (error) {
                console.error('Error fetching today\'s product count:', error);
            }
        };

        fetchTodayCustomerCount();
        fetchTodaySellerCount();
        fetchTodayProductCount();

        const incomeInterval = setInterval(() => {
            setIncomeCounter(prevCount => {
                const newCount = prevCount + 100;
                return newCount < 10000 ? newCount : prevCount; // Stop at 10000
            });
        }, 50);

        // Clear intervals when component unmounts
        return () => {
            clearInterval(incomeInterval);
        };
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

