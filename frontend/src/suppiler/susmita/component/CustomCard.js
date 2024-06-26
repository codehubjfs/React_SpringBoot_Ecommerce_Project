import React from 'react';
import Card from 'react-bootstrap/Card';
import '../card.css';

function CustomCard({ title, text, buttonText, image }) {
  return (
    <div className="ui-row">
      <div className="ui-col">
        <Card style={{ width: '25rem' }}> {/* Increased width */}
          {/* Image */}
          <Card.Img variant="top" src={image} />

          <Card.Body>
            {/* Description */}
            <Card.Title>{title}</Card.Title>
            <Card.Text style={{ textAlign: 'justify' }}> {/* Justified text */}
              {text}
            </Card.Text>
            {/* Optional Button */}
            {/* {buttonText && (
              <Card.Link href="#">{buttonText}</Card.Link>
            )} */}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CustomCard;
