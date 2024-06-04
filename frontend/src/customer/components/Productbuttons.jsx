import React from 'react';
import { Link } from "react-router-dom";
import './productbuttons.css';
import {
    fetchWishlist,
    addItemToWishlist,
    removeItemFromWishlist,
  } from "../slices/WishlistSlice";
  import { addItemToCart } from "../slices/CartSlice";
  import { toast, ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import { useSelector,useDispatch } from 'react-redux';
  import { useAuth } from '../AuthContext';
const ProductButtons = ({ id ,selectedColor,selectedStorage,selectedSize,selectedContent, productId,
    category,
    mainImage,
    model,
    productTitle,
    price,
    rating,}) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.wishlist.items);
    const { isLoggedIn } = useAuth();
    console.log(items)
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
  
    }; return (
        <div className="row mt-3">
            <div className="col-12">
                <div className="btn-group" role="group" aria-label="ProductLayout Buttons">
                    <Link to={`/checkout/${category}/${id}`}>

                    <button className="btn btn-custom-orange shadow-0">Buy now</button>
                    </Link>
                    <button  className="btn btn-custom-yellow shadow-0"  onClick={() => {
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
            }}><i className="me-1 fas fa-shopping-basket"></i>Add to cart</button>
                    <button  className="btn btn-outline-secondary py-2 icon-hover px-3"  onClick={() => {
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
            }}><i
                        className="me-1 fas fa-heart fa-lg"></i>Save</button>
                </div>
            </div>
        </div>
    );
};

export default ProductButtons;