import React from 'react';
import OrderCard from './OrderCard'; 
import "../Admin1.css";
function DashboardCards() {
    // Array of objects containing data for each card
    const cardData = [
        { title: 'Customers', value: '5400', icon: 'bi bi-people' },
        { title: 'Products', value: '100', icon: 'bi bi-handbag-fill' },
        { title: 'Orders', value: '1000', icon: 'bi bi-truck' },
        { title: 'Revenue', value: '₹64000', icon: 'bi bi-currency-rupee' }
    ];

    return (
        <div  className="col d-flex justify-content-between">
            {cardData.map((card, index) => (
                <OrderCard key={index} title={card.title} value={card.value} icon={card.icon} />
            ))}
        </div>
    );
}

export default DashboardCards;
