import React, { useEffect } from "react";
import { Electroniccards } from "./Productdatas";

function WishProduct() {
  const wishlistItems = [
    {
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-storage-select-202209-6-1inch-purple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=166069164708",
      title: "I Phone 14",
      description:
        "6.7-inch Super Retina XDR display A15 Bionic chip 3,095mAh battery with MagSafe charging",
      price: "₹87,999",
    },
    {
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346853438",
      title: "I phone 15 plus 5G",
      description:
        "Apple iPhone 15 5G 6.7-inch Super Retina XDR display Triple-lens rear camera system with 48MP main camera",
      price: "₹67,999",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/61o+TmqKoSL._SL1080_.jpg",
      title: "UHUD CRAFTS",
      description:
        "A to Z Furniture Classic 4 Seater Footrest Chesterfield Sofa Best Comfortable sofa Affordable Price",
      price: "₹30,999",
    },
  ];

  useEffect(() => {
    document.querySelectorAll(".like-btn").forEach((button) => {
      button.addEventListener("click", () => deleteItem(button));
    });

    return () => {
      document.querySelectorAll(".like-btn").forEach((button) => {
        button.removeEventListener("click", () => deleteItem(button));
      });
    };
  }, []);

  function deleteItem(button) {
    const card = button.closest(".card");
    card.remove();
  }

  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <h1 className="mt-5 mb-4">My Wishlist</h1>
      <div className="container mt-5" style={{ marginBottom: "40px" }}>
        <div className="row">
          {Electroniccards.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card-p" style={{ marginBottom: 20 }}>
                <img
                  src={item.imageSrc}
                  className="card-img-top"
                  alt={`Product ${index + 1}`}
                />
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
                    <i className="fas fa-heart" style={{ color: "red" }}></i>
                  </button>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <div className="review-stars">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <p className="card-text">
                      <small className="text-muted">Price: {item.price}</small>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-custom-orange shadow-0"
                  >
                    <i className="fas fa-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WishProduct;
