import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import primeimage from "./images/prime.png";
import GetPrimeModal from "./primemodal";
import { useSelector } from "react-redux";

function PrimeBenefit() {
  const [showModal, setShowModal] = useState(false);
  const customer = useSelector((state) => state.customers.customer);
  const handleButtonClick = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <img
            src={primeimage}
            className="img-fluid"
            alt="Prime Logo"
            style={{ width: "200px", height: "auto" }}
          />
          <p id="prime-benefit" className="mt-3">
            Look for the Prime check mark as you shop. It means fast, free
            delivery!
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center">
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
      </Row>
      {showModal && <GetPrimeModal onHide={() => setShowModal(false)} />}
    </Container>
  );
}

export default PrimeBenefit;
