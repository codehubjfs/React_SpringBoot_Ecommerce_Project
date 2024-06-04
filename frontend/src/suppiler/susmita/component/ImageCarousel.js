// ImageCarousel.js
import React from "react";
import { Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; 

const ImageCarousel = ({ images = [] }) => {
  return (
    <Carousel className="ui-ImageCarousel">
    {images.map((image, index) => (
      <Carousel.Item key={index}>
        <Card>
          <Card.Img 
            variant="top" 
            src={image} 
            alt={`Slide ${index}`} 
            style={{height:'400px',width:'100%',marginTop:'40px'}} 
          />
        </Card>
      </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
