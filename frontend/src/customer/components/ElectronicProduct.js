import React from "react";

function ElectronicProduct() {
  const products = [
    {
      imgSrc: "https://m.media-amazon.com/images/I/712C5J3O5uL.SL1500.jpg",
      title: "Green Soul®",
      description:
        "Monster Ultimate Series T | Multi-Functional Ergonomic Gaming & Office Chair",
      price: "₹30,999",
      buyNowLink: "../baba/E-commerce/html/chair1.html",
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
      imgSrc: "https://m.media-amazon.com/images/I/71LZ9d0NQXL.SL1500.jpg",
      title: "Ergonomic Video Game Chair",
      description:
        "ergonomic furniture or equipment is designed in a way that makes it comfortable and effective for people ",
      price: "₹40,999",
      buyNowLink: "../baba/E-commerce/html/chair2.html",
    },
    {
      imgSrc:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346853438",
      title: "I phone 15 plus 5G",
      description:
        "riple-lens rear camera system with 48MP main camera, 12MP wide camera, 12MP ultra-wide camera, and 12MP  camera",
      price: "₹77,499",
      buyNowLink: "../baba/E-commerce/html/i phone 15 plus.html",
    },
    {
      imgSrc:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346853438",
      title: "I phone 15 plus ",
      description:
        "Apple iPhone 15 5G 6.7-inch Super Retina XDR display Triple-lens rear camera system with 48MP main camera",
      price: "₹69,999",
      buyNowLink: "../baba/E-commerce/html/i phone 15 plus.html",
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
      imgSrc:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346853438",
      title: "I phone 15",
      description:
        "Apple iPhone 15 5G 6.7-inch Super Retina XDR display Triple-lens rear camera system with 48MP main camera",
      price: "₹69,999",
      buyNowLink: "../baba/E-commerce/html/i phone 15.html",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}
const ProductCard = ({ imgSrc, title, description, price, buyNowLink }) => (
  <div className="col-md-4 mb-4">
    <div className="card">
      <img src={imgSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <button
          type="button"
          className="like-btn"
          style={{
            background: "none",
            border: "none",
            position: "absolute",
            bottom: "10px",
            right: "5px",
          }}
        >
          <i className="fas fa-heart"></i>
        </button>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="review-stars">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <p className="card-text">
            <small className="text-muted">Price: {price}</small>
          </p>
        </div>
        <button type="button" className="btn btn-custom-orange shadow-0">
          <i className="fas fa-cart-plus"></i>
        </button>
        <a
          href={buyNowLink}
          className="btn btn-custom-yellow shadow-0"
          style={{ marginLeft: "6px" }}
        >
          Buy Now
        </a>
      </div>
    </div>
  </div>
);

export default ElectronicProduct;
