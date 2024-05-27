// PromotionComponent.js
import React from 'react';
import '../App.css';
function PromotionComponent({ title, description }) {
  const additionalContent = (
    <>
      <h1 className="ui-content">Introduction to Selling on Horizon.in</h1>
      </>
      );
  return (
    <div className="ui-p-container">
      <p><b>{title}</b></p>
      <p><b>{description}</b></p>
    </div>
  );
}

export default PromotionComponent;
