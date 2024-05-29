import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import primeimage from "./images/prime.png";
import GetPrimeModal from "./primemodal";
import { useSelector } from "react-redux";

function PrimeHeroModule() {
  const [showModal, setShowModal] = useState(false);
  const customer = useSelector((state) => state.customers.customer);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <Card className="prime-hero-module">
            <Card.Body>
              <div className="prime-hero-module-logo">
                <img src={primeimage} alt="Prime logo" />
              </div>
              <Card.Title className="prime-hero-module-headline">
                We're giving you an Exciting Combo
              </Card.Title>
              <Card.Subtitle className="prime-hero-module-subheadline">
                Free delivery, award-winning TV, exclusive deals, and more
              </Card.Subtitle>
              <div className="prime-hero-module-pricingText">
                <p className="paragraph">Only Rs.399/month</p>
              </div>
              <div className="prime-header-CTA">
                {customer && customer.membership === "Basic" ? (
                  <Button
                    id="primebutton"
                    variant="primary"
                    size="lg"
                    onClick={handleButtonClick}
                  >
                    Get Prime Now
                  </Button>
                ) : (
                  <></>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {showModal && <GetPrimeModal onHide={() => setShowModal(false)} />}
    </Container>
  );
}

export default PrimeHeroModule;