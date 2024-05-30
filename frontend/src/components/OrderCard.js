import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Order.css';

const OrderCard = ({ title, value, icon }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayValue((prevValue) => {
        // Ensure value is parsed correctly based on its type
        const numericValue = typeof value === 'string'
          ? parseInt(value.replace(/[^\d.]/g, ''), 10)
          : typeof value === 'number'
          ? value
          : 0;
          
        const increment = Math.ceil(numericValue / 50); 
        return prevValue + increment <= numericValue ? prevValue + increment : numericValue;
      });
    }, 50); 

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="m-3 card key-metric-card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="card-title">{title}</h2>
            <i className={`${icon} display-4`}></i>
          </div>
          <p className="running-number display-4">
            {title === "Revenue" ? `₹${displayValue.toLocaleString()}` : displayValue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
