import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function PrimeOptions() {
  const primeOptions = [
    {
      title: "Prime Monthly",
      price: "Rs399/mo.",
      description: "Enjoy Exclusive offers",
    },
    {
      title: "Prime Annual",
      price: "Rs1599/yr.",
      description: "Enjoy Exclusive offers",
    },
    {
      title: "Prime Access",
      price: "Rs599/mo.",
      description: "Enjoy Exclusive offers",
    },
  ];

  return (
    <Row>
      {primeOptions.map((option, index) => (
        <Col md={4} key={index}>
          <Card className="card-prime">
            <Card.Body>
              <Card.Title>{option.title}</Card.Title>
              <Card.Text style={{ fontWeight: "bold" }}>
                {option.price}
              </Card.Text>
              <Card.Text>{option.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default PrimeOptions;
