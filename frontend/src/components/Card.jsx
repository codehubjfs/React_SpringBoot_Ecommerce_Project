import React from 'react';
import '../App.css';
function Card({ value, label, iconClass }) {
    return (
        <div className="card-single ">
            <div>
                <h1>{value}</h1>
                <span>{label}</span>
            </div>
            <div>
                <span className={`las ${iconClass}`}></span>
            </div>
        </div>
    );
}

export default Card;
