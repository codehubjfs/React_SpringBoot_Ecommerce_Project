import React, { useState } from 'react';
import OrderCard from '../components/OrderCard.js'; 
// import '../../src/Admin1.css';

const paymentStats = [
    { title: 'Transactions', value: '1000', icon: 'bi bi-credit-card-2-back' },
    { title: 'Payment Success', value: '899', icon: 'bi bi-check-circle' },
    { title: 'Payment Failed', value: '54', icon: 'bi bi-exclamation-triangle' },
    { title: 'Payment Pending', value: '47', icon: 'bi bi-exclamation-circle' }
];

const PaymentStats = () => {
  return (
    
      <div className="col d-flex justify-content-between">
        {paymentStats.map((stat, index) => (
          <OrderCard key={index} title={stat.title} value={stat.value} icon={stat.icon} />
        ))}
      </div>

  );
};

export default PaymentStats;
