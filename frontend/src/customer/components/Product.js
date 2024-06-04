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
import { addItemToCart } from "../slices/CartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { generalProducts } from "../slices/ProductSlice";
import { useEffect } from "react";
function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(generalProducts());
    console.log(products);
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <ToastContainer position="bottom-right" />
      <h3 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        PRODUCTS
      </h3>
      <br />
      <div className="row">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

const ProductCard = ({
  productId,
  category,
  mainImage,
  model,
  productTitle,
  price,
  rating,
}) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.wishlist.items);
  const { isLoggedIn } = useAuth();
  console.log(items);

  const handleLikeButtonClick = (
    productId,
    mainImage,
    productmodel,
    productTitle,
    price,
    rating
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
      toast.success("Product removed from wishlist!", {
        position: "bottom-right",
      });
    } else {
      console.log(items);
      dispatch(
        addItemToWishlist({
          ProductCard: {
            productId,
            mainImage,
            productmodel,
            productTitle,
            price,
            rating,
            category,
          },
          customerId: parsedCustomer.id,
        })
      );
      toast.success("Product added to wishlist!", {
        position: "bottom-right",
      });
    }
  };

  const handleCartButtonClick = (
    productId,
    mainImage,
    productmodel,
    productTitle,
    price,
    rating,
    category
  ) => {
    const storedCustomerData = sessionStorage.getItem("customerData");
    const parsedCustomer = JSON.parse(storedCustomerData);
    const quantity = 1;

    dispatch(
      addItemToCart({
        productCard: {
          productId,
          mainImage,
          productmodel,
          productTitle,
          price,
          quantity,
          category,
        },
        customerId: parsedCustomer.id,
      })
    );

    toast.success("Product added to cart!", {
      position: "bottom-right",
    });
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card-p">
        <Link
          to={`/product/${category}/${productId}`}
          style={{ textDecoration: "none", color: "black" }}
          className="product-link"
        >
          <img src={mainImage} className="card-img-top" alt="Product Image" />
        </Link>
        <div className="card-body">
          <Link
            to={`/product/${category}/${productId}`}
            style={{ textDecoration: "none", color: "black" }}
            className="product-link"
          >
            <h5 className="card-p-title">{model}</h5>
          </Link>
          <p className="card-p-text">{productTitle}</p>
          <div className="review-stars">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={index < rating ? "fas fa-star" : "far fa-star"}
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
                  mainImage,
                  model,
                  productTitle,
                  price,
                  rating,
                  category
                );
                console.log(
                  productId,
                  mainImage,
                  model,
                  productTitle,
                  price,
                  rating,
                  category
                );
                console.log("cart clicked");
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
                  mainImage,
                  model,
                  productTitle,
                  price,
                  rating,
                  category
                );
              } else {
                window.location.href = "/signin";
              }
            }}
          >
            <i className="fas fa-heart"></i>
          </button>
          <Link
            to={`/product/${category}/${productId}`}
            style={{ textDecoration: "none" }}
          >
            <button
              className="btn btn-custom-yellow shadow-0"
              style={{ marginLeft: "6px" }}
            >
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
