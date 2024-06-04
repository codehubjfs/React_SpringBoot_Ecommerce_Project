// ParentComponent.js
import React from "react";
import ImageCarousel from "./ImageCarousel";
import '../App.css'; 
import homeimage from '../assets/images/homeimage.jpg';

function ImageComponent() {
  const images = [
    homeimage,
  ];

  return (
    <div className="ui-container mb-5">
     
      <ImageCarousel images={images} />
     
    </div>
  );
}

export default ImageComponent;
