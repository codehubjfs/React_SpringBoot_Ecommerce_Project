// BoxingComponent.js
import React from "react";

function BoxingComponent({ image, size, title1, title2 }) {
  const boxStyle = {
    textAlign: 'center',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    width: '300px',
    height: '300px', // Increase the height to accommodate the image
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px 8px 0 0'
  };

  const sizeStyle = {
    fontSize: '17px',
    margin: '10px 0'
  };

  const titleStyle = {
    fontSize: '16px',
    margin: '5px 0'
  };

  return (
    <div style={boxStyle}>
      <img src={image} alt={title1} style={imageStyle} />
      <h2 style={sizeStyle}><b>{size}</b></h2>
      <p style={titleStyle}>{title1}</p>
      <p style={titleStyle}>{title2}</p>
    </div>
  );
}

export default BoxingComponent;
