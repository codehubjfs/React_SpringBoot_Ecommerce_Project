import React from "react";
// import "../Producte.css";
import "../NewArrival.css";
import { Link } from "react-router-dom";
import { NewProductCard } from "./Productdatas";
function NewArrivals() {
  const products = [
    {
      imgSrc:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-storage-select-202209-6-1inch-purple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=166069164708",
      title: "I Phone 14",
      description:
        "6.7-inch Super Retina XDR display A15 Bionic chip 3,095mAh battery with MagSafe charging",
      price: "₹87,999",
      buyNowLink: "../baba/E-commerce/html/iphone 14.html",
    },
    {
      imgSrc: "https://m.media-amazon.com/images/I/61o+TmqKoSL._SL1080_.jpg",
      title: "UHUD CRAFTS",
      description:
        "A to Z Furniture Classic 4 Seater Footrest Chesterfield Sofa Best Comfortable sofa Affordable Price",
      price: "₹30,999",
      buyNowLink: "../baba/E-commerce/html/sofa1.html",
    },
    {
      imgSrc: "https://m.media-amazon.com/images/I/71LZ9d0NQXL._SL1500_.jpg",
      title: "Ergonomic Video Game Chair",
      description:
        "Gaming chair Most Comfortable Ultimate Gaming Chairs  Elevate Your Gaming Experience",
      price: "₹30,999",
      buyNowLink: "../baba/E-commerce/html/chair2.html",
    },
  ];

  return (
    <div className="container mt-5">
      <h3 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        NEW ARRIVALS{" "}
      </h3>{" "}
      <br />
      <div className="row">
        {NewProductCard.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}
const ProductCard = ({
  productId,
  categoryId,
  imageSrc,
  title,
  description,
  price,
  ratings,
}) => {
  // Define your star rating logic here

  return (
    <div className="col-md-4 mb-4">
      <div className="card-p">
        <Link
          to={`/product/${categoryId}/${productId}`}
          style={{ textDecoration: "none", color: "black" }}
          className="product-link"
        >
          <img src={imageSrc} className="card-img-top" alt="Product Image" />
        </Link>
        <div className="card-body">
          <Link
            to={`/product/${categoryId}/${productId}`}
            style={{ textDecoration: "none", color: "black" }}
            className="product-link"
          >
            <h5 className="card-p-title">{title}</h5>
          </Link>
          <p className="card-p-text">{description}</p>
          <div className="review-stars">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={index < ratings ? "fas fa-star" : "far fa-star"}
              ></span>
            ))}
          </div>
          <p className="card-text">
            <span className="text-muted">Price: ₹{price}</span>
          </p>
        </div>
        <div className="buttons-container">
          <button type="button" className="btn btn-custom-orange shadow-0">
            <i className="fas fa-cart-plus"></i>
          </button>
          <button type="button" className="like-btn">
            <i className="fas fa-heart"></i>
          </button>
          <Link
            to={`/product/${categoryId}/${productId}`}
            style={{ textDecoration: "none" }}
          >
            <a
              className="btn btn-custom-yellow shadow-0"
              style={{ marginLeft: "6px" }}
            >
              Buy Now
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
