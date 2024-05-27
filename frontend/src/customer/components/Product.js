import React from "react";
import { Link } from "react-router-dom";
import { GeneralProductCard } from "./Productdatas";
import "../Producte.css";
function Product() {
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
    {
      imgSrc:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346853438",
      title: "I phone 15 plus 5G",
      description:
        "Apple iPhone 15 5G 6.7-inch Super Retina XDR display Triple-lens rear camera system with 48MP main camera",
      price: "₹69,999",
      buyNowLink: "../baba/E-commerce/html/i phone 15 plus.html",
    },
    {
      imgSrc: "https://m.media-amazon.com/images/I/51fOjAfVLYL._SX569_.jpg",
      title: "Callas Table",
      description:
        "Computer Desk Home/Office Desk 29.52 Inch Height Writing Modern  Desk | Sturdy Small Desks for Small Spaces",
      price: "₹3,000",
      buyNowLink: "../baba/E-commerce/html/table1.html",
    },
    {
      imgSrc: "https://m.media-amazon.com/images/I/71cekUgPFUL._SL1500_.jpg",
      title: "I Phone 15 Pro",
      description:
        "Super Retina XDR display 15.54 cm / 6.1″ (diagonal) all-screen OLED display 2556x1179-pixel resolution at 460 ppi",
      price: "₹1,34,900",
      buyNowLink: "../baba/E-commerce/html/i phone 15 pro.html",
    },
    {
      imgSrc: "https://m.media-amazon.com/images/I/513I7-J-HqL._SL1302_.jpg",
      title: "UHUD CRAFTS",
      description:
        "Beautiful Antique Wooden Fold-able Side Table | Most Elegant Table In the  Segment  Affordable",
      price: "₹1,999",
      buyNowLink: "../baba/E-commerce/html/table2.html",
    },
    {
      imgSrc:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346853438",
      title: "I phone 15",
      description:
        "Apple iPhone 15 5G 6.7-inch Super Retina XDR display Triple-lens rear camera system with 48MP main camera",
      price: "₹69,999",
      buyNowLink: "../baba/E-commerce/html/i phone 15.html",
    },
    {
      imgSrc: "https://m.media-amazon.com/images/I/61o+TmqKoSL._SL1080_.jpg",
      title: "UHUD CRAFTS",
      description:
        "A to Z Furniture Classic 4 Seater Footrest Chesterfield Sofa Best Comfortable sofa Affordable Price",
      price: "₹30,999",
      buyNowLink: "../baba/E-commerce/html/sofa1.html",
    },
  ];

  return (
    <div className="container mt-5">
      <h3 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        PRODUCTS{" "}
      </h3>
      <br />
      <div className="row">
        {GeneralProductCard.map((product, index) => (
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

export default Product;
