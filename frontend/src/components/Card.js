import React from 'react';

function Card({ value, label, iconClass }) {
    return (
        <div className="Admin-card-single">
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
