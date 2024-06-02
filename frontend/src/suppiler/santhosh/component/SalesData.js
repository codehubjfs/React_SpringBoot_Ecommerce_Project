import React from 'react';
import SalesReport from './SalesReport'; // Import the SalesReport component
import '../title.css';
const salesData = {
  //DAta to be fetched from DB
  product: [
    { label: "Products Ordered", value: 0 },
    { label: "Products Available", value: 0 },
    { label: "Products Returned", value: 0 }
  ],
  listing: [
    { label: " Revenue", value: 0 },
    { label: "Out Of Stock", value: 0 },
    { label: "Low Stock", value: 0 }
  ],
  sales: [
    { label: "Views", value: "0" },
    { label: "TodayOrders", value: 0 },
    { label: "Total stock listed", value: 0 },
    { label: "Today Income", value: "₹ 0" }
  ]
};

// Use the SalesReport component and pass salesData as a prop
const SalesDatas = () => {
  return (
    <div>
      {/* <SalesReport data={salesData} /> */}
      <SalesReport data ={salesData} />
    </div>
  );
};

export default SalesDatas;
