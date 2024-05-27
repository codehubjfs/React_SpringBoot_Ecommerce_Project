// Reusable RightContent.js
import React from 'react';

function RightContent({ title, content }) {
    return (
        <div className="right-content">
            <div className="about-meesho">
                <h2 style={{fontSize:"25px"}}>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default RightContent;
