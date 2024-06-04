import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import orderimage from "./images/order.png";
import profileimage from "./images/login.png";
import primeimage from "./images/prime.png";
import addressimage from "./images/address.png";
import customer from "./images/customer1.jpg";
import business from "./images/business.jpg";
import { Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";

import "../Account.css";

function Account() {
  const cardsData = [
    {
      title: "Your Orders",
      description:
        "Track, return, cancel an order, download invoice or buy again",
      imageSrc: orderimage,
      link: "/your-orders",
    },
    {
      title: "Login & Security",
      description:
        "Edit login, name, mobile number and other profile informations",
      imageSrc: profileimage,
      link: "/editprofile",
    },
    {
      title: "Prime",
      description:
        "Manage your membership, view benefits, and payment settings",
      imageSrc: primeimage,
      link: "/prime",
    },
    {
      title: "Your Addresses",
      description: "Edit, remove or set default address",
      imageSrc: addressimage,
      link: "/AddressPage",
    },
    {
      title: "Customer Care",
      description: "Contact customer support for assistance",
      imageSrc: customer,
      link: "/SupportPage",
    },
    {
      title: "Business Account",
      description: "Manage your business account settings",
      imageSrc: business,
      link: "",
    },
  ];

  return (
    <Container id="content">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Profile</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        {cardsData.map((card, index) => (
          <Col md={4} key={index}>
            <Link to={card.link} className="nav-link active">
              {" "}
              {/* Changed class to className */}
              <Card className="card-account">
                {" "}
                {/* Changed class to className */}
                <div className="image-container">
                  <Card.Img
                    variant="top"
                    src={card.imageSrc}
                    alt={card.title}
                    className="card-account-img-top"
                  />
                </div>
                <Card.Body className="card-account-body">
                  <div className="text-container">
                    <Card.Title className="card-account-title">
                      {card.title}
                    </Card.Title>
                    <Card.Text className="card-account-text">
                      {card.description}
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Account;
