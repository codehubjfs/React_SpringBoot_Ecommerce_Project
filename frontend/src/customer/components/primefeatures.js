// PrimeFeatures.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import primeimage from "./images/prime.png";
import orderimage from "./images/order.png";
import daily from "./images/login.png";

function PrimeFeatures() {
  const features = [
    {
      title: "Convenient options",
      description:
        "Enjoy Same-Day, One-Day, and Two-Day Delivery on millions of items.",
      imageSrc: orderimage,
    },
    {
      title: "Daily and Hourly offers",
      description:
        "Exclusive Prime member discounts !! and Enjoy Exclusive Offers !!",
      imageSrc: daily,
    },
    {
      title: "Prime Day",
      description:
        "Shop throughout the week and receive your orders on a single day.",
      imageSrc: primeimage,
    },
  ];

  return (
    <Container>
      <Row>
        {features.map((feature, index) => (
          <Col md={4} key={index}>
            <Card className="card-prime" style={{ height: "100%" }}>
              <div className="image-container">
                <Card.Img
                  variant="top"
                  src={feature.imageSrc}
                  alt={feature.title}
                />
              </div>
              <Card.Body>
                <div className="text-container">
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PrimeFeatures;
