import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../slices/ProductSlice';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { useSelector } from 'react-redux';
import {
  fetchWishlist,
  addItemToWishlist,
  removeItemFromWishlist,
} from "../slices/WishlistSlice";
import { addItemToCart } from "../slices/CartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductCard = ({
    productId, productTitle, model, price, rating, mainImage, category,supplierId,description
}) => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchProducts({ category, id: productId }));
    }, [dispatch, category, productId]);
    console.log(category)
    console.log(supplierId);
    const items = useSelector((state) => state.wishlist.items);
    const handleProductLink = () => {
     
        navigate(`/product/${category}/${productId}`);
      
    };
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
              rating,category
            },
            customerId: parsedCustomer.id,
          })
        );
      }
    };
  
    const handleCartButtonClick = (
      productId,
      mainImage,
      productmodel,
      productTitle,
      price,
      rating,category
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
            quantity,category
          },
          customerId: parsedCustomer.id,
        })
      );
  
      // Show toast message when item is added to cart
      // Inside handleCartButtonClick function
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
          <button type="button" className="btn btn-custom-orange shadow-0" onClick={() => {
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
                  rating,category
                );
                console.log("cart clicked");
              } else {
                window.location.href = "/signin";
              }
            }}>
            <i className="fas fa-cart-plus"></i>
          </button>
          <button type="button" className="like-btn" onClick={() => {
              if (isLoggedIn) {
                handleLikeButtonClick(
                  productId,
                  mainImage,
                  model,
                  productTitle,
                  price,
                  rating,category
                );
              } else {
                window.location.href = "/signin";
              }
            }}>
            <i className="fas fa-heart"></i>
          </button>
         
            <button
              className="btn btn-custom-yellow shadow-0"
              style={{ marginLeft: "6px" }}
              onClick={handleProductLink}
            >
              Buy Now
            </button>
          
        </div>
      </div>
    </div>
    );
};

export default ProductCard;