import React from "react";
import "../Offer.css";
import { Link } from "react-router-dom";
import { Electroniccards } from "./Productdatas";
import { DiscountProductCard } from "./Productdatas";
function Offer() {
  return (
    <div className="container mt-5">
      <h3 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        OFFER OF THE DAY
      </h3>
      <br />
      <div className="row">
        {DiscountProductCard.map((product, index) => (
          <OfferCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

const OfferCard = ({
  productId,
  categoryId,
  imageSrc,
  title,
  description,
  price,
  discount,
  dic,
}) => {
  return (
    <div className="col-sm-3 mb-5">
      <div className="card-off" style={{ maxWidth: "200px" }}>
        <Link
          to={`/product/${categoryId}/${productId}`}
          style={{ textDecoration: "none", color: "black" }}
          className="product-link"
        >
          <img
            src={imageSrc}
            className="card-img-top"
            alt={title}
            style={{ width: "200px", height: "200px" }}
          />
        </Link>
        <div className="card-body">
          <Link
            to={`/product/${categoryId}/${productId}`}
            style={{ textDecoration: "none", color: "black" }}
            className="product-link"
          >
            <h5 className="card-title">{title}</h5>
          </Link>
          <p>
            <span
              className="card-discount"
              style={{
                backgroundColor: "#CC0C39",
                color: "white",
                width: "70px",
                padding: "3px",
                marginRight: "6px",
              }}
            >
              {discount}
            </span>
            <span style={{ color: "#CC0C39", fontWeight: "bold" }}>{dic}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
