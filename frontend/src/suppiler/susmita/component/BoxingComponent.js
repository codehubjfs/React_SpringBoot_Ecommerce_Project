// BoxingComponent.js
import React from "react";
import '../App.css';
function BoxingComponent({ size, title1, title2 }) {
  return (
    <div className="ui-box">
      <h2 className="ui-boxing-size"><b>{size}</b></h2>
      <p className="ui-boxing-para"><b>{title1}</b></p>
      <p className="ui-boxing-para"><b>{title2}</b></p>
    </div>
  );
}

export default BoxingComponent;
