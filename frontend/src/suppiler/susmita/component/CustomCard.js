import React from 'react';
import Card from 'react-bootstrap/Card';
import '../card.css';

function CustomCard({ title, text, buttonText, image }) {
  return (
    <div className="ui-row">
      <div className="ui-col">
     <Card style={{ width: '20rem' }}>
        {/* Image or video */}
        <Card.Img variant="top" src={image} />
  
        <Card.Body>
          {/* Description */}
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          
       
        </Card.Body>
      </Card>
      </div>
    </div>
  );
}

export default CustomCard;
