import React, { useState } from 'react';
import OrderCard from '../components/OrderCard.js'; 
import { OrderTable } from '../components/OrderTable';
import DescriptionCard from '../components/DescriptionCard ';
import '../components/Order.css' 

const orders = [
  {
    sno: 1,
    id: 301,
    customer: 'Sathish',
    date: '09-04-2024',
    status: 'Pending',
    amount: '₹1500.00',
    method: 'Offline',
    products: [
      { name: 'Shirt', quantity: 2 },
      { name: 'Jeans', quantity: 1 },
    ],
    deliveryDate: '12-04-2024'
  },
  {
    sno: 2,
    id: 302,
    customer: 'Prasanna',
    date: '10-04-2024',
    status: 'Delivered',
    amount: '₹26000.00',
    method: 'Online',
    products: [
      { name: 'Oppo f11', quantity: 3 },
    ],

    deliveryDate: '15-04-2024'
  },
  {
    sno: 3,
    id: 303,
    customer: 'Kavya',
    date: '12-04-2024',
    status: 'Processing',
    amount: '₹5700.00',
    method: 'Online',
    products: [
      { name: 'Leggins', quantity: 1 },
      { name: 'Hair dryer', quantity: 1 },
    ],
    deliveryDate: '17-04-2024'
  },
];

const ordersData = [
  { title: 'Total Orders', value: '100', icon: 'bi bi-truck' },
  { title: 'Revenue', value: '₹10,000', icon: 'bi bi-currency-rupee' },
  { title: 'Seller Count', value: '20', icon: 'bi bi-people' },
];

const Order = () => {
  const [showOrders, setShowOrders] = useState(false);
  const toggleOrders = () => {
    setShowOrders(!showOrders);
  };

  return (
    <><br></br>
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <h2 className='mt-2'>Orders</h2>
      <hr></hr>
      <div style={{ margin: '20px', textAlign: 'left' }}>
      <DescriptionCard title="Welcome to the Orders Page">
        Here, you can manage all the orders placed by customers.
        Click on "View Orders" below to see the list of orders.
      </DescriptionCard>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        {ordersData.map((order, index) => (
          <OrderCard key={index} title={order.title} value={order.value} icon={order.icon} />
        ))}
      </div>
      <button className='bg-dark text-white'
        style={{ padding: '8px 16px', fontSize: '16px' }} 
        onClick={toggleOrders} 
      >
        {showOrders ? 'Hide Orders' : 'View Orders'}
      </button>
      {showOrders && <OrderTable orders={orders} />}
    </div>
    </>
  );
};

export default Order;
