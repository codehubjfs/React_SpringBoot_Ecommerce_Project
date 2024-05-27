import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Order.css';

const OrderCard = ({ title, value, icon }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayValue((prevValue) => {
        const targetValue = parseInt(value.replace(/[^\d.]/g, ''), 10);
        const increment = Math.ceil(targetValue / 50); 
        return prevValue + increment <= targetValue ? prevValue + increment : targetValue;
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
          <p className="running-number display-4">{displayValue}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
