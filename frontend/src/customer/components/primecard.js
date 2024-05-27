import React from "react";
import { Col } from "react-bootstrap";

function FeatureCard() {
  const features = [
    {
      title: "Try Prime",
      description: "Prime offers exclusive Deals!!",
      imageSrc:
        "https://m.media-amazon.com/images/G/01/prime/marketing/slashPrime/Prime_Wardrobe2x._CB655600387_.png",
    },
    {
      title: "Exclusive Deals",
      description: "Prime Members save on thousands of items.",
      imageSrc:
        "https://m.media-amazon.com/images/G/01/prime/marketing/slashPrime/Prime_Deals2x._CB655600387_.png",
    },
    {
      title: "Savings",
      description:
        "Unlock exclusive offers, coupons, and discounts available only for Prime members.",
      imageSrc:
        "https://m.media-amazon.com/images/G/01/prime/marketing/slashPrime/Prime_Pharmacy2x._CB655600387_.png",
    },
  ];

  return (
    <div className="row">
      {features.map((feature, index) => (
        <Col key={index} md={4}>
          <div className="feature-container d-flex flex-column justify-content-center align-items-center">
            <img
              className="feature-image"
              src={feature.imageSrc}
              alt={feature.title}
            />
            <div className="feature-text text-center">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        </Col>
      ))}
    </div>
  );
}

export default FeatureCard;
