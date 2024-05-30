import React from "react";
import { Link } from "react-router-dom";
import { GeneralProductCard } from "./Productdatas";
import "../Producte.css";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../AuthContext";
import {
  fetchWishlist,
  addItemToWishlist,
  removeItemFromWishlist,
} from "../slices/WishlistSlice";

function Product() {
  return (
    <div className="container mt-5">
      <h3 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        PRODUCTS
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
  const dispatch = useDispatch();
  const items = useSelector((state) => state.wishlist.items);
  const customer = useSelector((state) => state.customers.customers);
  const { isLoggedIn, login, logout } = useAuth();

  const handleLikeButtonClick = (
    productId,
    imageSrc,
    title,
    description,
    price,
    ratings
  ) => {
    console.log(items);
    const isItemInWishlist = items.some(
      (wishlistItem) => wishlistItem.id === productId
    );
    const storedCustomerData = sessionStorage.getItem("customerData");
    const parsedCustomer = JSON.parse(storedCustomerData);

    if (isItemInWishlist) {
      dispatch(
        removeItemFromWishlist({
          id: productId,
          customerId: parsedCustomer.id,
        })
      );
    } else {
      console.log(items);
      dispatch(
        addItemToWishlist({
          ProductCard: {
            productId,
            imageSrc,
            title,
            description,
            price,
            ratings,
          },
          customerId: parsedCustomer.id,
        })
      );
    }
  };
  const handleCartButtonClick = () => {};
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
          <button
            type="button"
            className="btn btn-custom-orange shadow-0"
            onClick={() => {
              if (isLoggedIn) {
                handleCartButtonClick(
                  productId,
                  imageSrc,
                  title,
                  description,
                  price,
                  ratings
                );
              } else {
                window.location.href = "/signin";
              }
            }}
          >
            <i className="fas fa-cart-plus"></i>
          </button>
          <button
            type="button"
            className="like-btn"
            onClick={() => {
              if (isLoggedIn) {
                handleLikeButtonClick(
                  productId,
                  imageSrc,
                  title,
                  description,
                  price,
                  ratings
                );
              } else {
                window.location.href = "/signin";
              }
            }}
          >
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
