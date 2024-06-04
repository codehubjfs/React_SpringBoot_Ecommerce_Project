import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  fetchWishlist,
  addItemToWishlist,
  removeItemFromWishlist,
} from "../slices/WishlistSlice";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { addItemToCart } from "../slices/CartSlice";
import { toast, ToastContainer } from "react-toastify";
function WishProduct() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.wishlist.items);
  const status = useSelector((state) => state.wishlist.status);
  const customer = useSelector((state) => state.customers.customer);

  useEffect(() => {
    const storedCustomerData = sessionStorage.getItem("customerData");
    if (storedCustomerData) {
      const parsedCustomer = JSON.parse(storedCustomerData);
      if (parsedCustomer && parsedCustomer.id) {
        console.log(
          "Customer ID retrieved from session storage: ",
          parsedCustomer.id
        );
        dispatch(fetchWishlist(parsedCustomer.id));
      }
    }
  }, [dispatch]);

  const handleLikeButtonClick = (item) => {
    const isItemInWishlist = items.some(
      (wishlistItem) => wishlistItem.id === item.id
    );
    const storedCustomerData = sessionStorage.getItem("customerData");
    const parsedCustomer = JSON.parse(storedCustomerData);

    if (isItemInWishlist) {
      dispatch(
        removeItemFromWishlist({
          id: item.productId,
          customerId: parsedCustomer.id,
        })
      );
    } else {
      dispatch(addItemToWishlist(item));
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
    <div className="container" style={{ marginTop: "70px" }}>
      <h1 className="mt-5 mb-4">My Wishlist</h1>
      <div className="container mt-5" style={{ marginBottom: "40px" }}>
        <Row>
          {items && items.length > 0 ? (
            items.map((item, index) => (
              <Col md={4} key={index}>
                <Card
                  className="mb-4"
                  style={{
                    position: "relative",
                    width: "300px",
                    height: "500px",
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    overflow: "hidden",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)";
                    e.currentTarget.style.boxShadow = "0 1px 5px rgba(86, 81, 81, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Link
                    to={`/product/${item.category}/${item.productId}`}
                    style={{ textDecoration: "none", color: "black" }}
                    className="product-link"
                  >
                    <Card.Img
                      variant="top"
                      src={item.mainImage}
                      alt={`Product ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "200px",
                        borderBottom: "1px solid #ddd",
                      }}
                    />
                  </Link>
                  <Card.Body style={{ padding: "15px" }}>
                    <Card.Title style={{ marginBottom: "10px" }}>
                      {item.model}
                    </Card.Title>
                    <Card.Text style={{ marginBottom: "10px" }}>
                      {item.productTitle}
                    </Card.Text>
                    <div
                      className="review-stars mb-2"
                      style={{ marginBottom: "10px" }}
                    >
                      <span className="fa fa-star checked" style={{ marginRight: "2px" }}></span>
                      <span className="fa fa-star checked" style={{ marginRight: "2px" }}></span>
                      <span className="fa fa-star checked" style={{ marginRight: "2px" }}></span>
                      <span className="fa fa-star" style={{ marginRight: "2px" }}></span>
                      <span className="fa fa-star" style={{ marginRight: "2px" }}></span>
                    </div>
                    <Card.Text style={{ marginBottom: "10px" }}>
                      <small className="text-muted">Price: {item.price}</small>
                    </Card.Text>
                    <div className="buttons-container" style={{ position: "absolute", bottom: "10px", left: "10px", width: "100%", display: "flex", justifyContent: "space-between" }}>
                      <Button
                        className="like-btn"
                        style={{
                          background: "none",
                          border: "none",
                          fontSize: "1.2em",
                          transition: "transform 0.3s ease",
                        }}
                        onClick={() => handleLikeButtonClick(item)}
                      >
                        <i
                          className={`fas fa-heart ${
                            items.some(
                              (wishlistItem) => wishlistItem.id === item.id
                            )
                              ? "text-danger"
                              : ""
                          }`}
                          style={{
                            color: items.some(
                              (wishlistItem) => wishlistItem.id === item.id
                            )
                              ? "red"
                              : "rgb(47, 43, 43)",
                            transform: items.some(
                              (wishlistItem) => wishlistItem.id === item.id
                            )
                              ? "scale(1.2)"
                              : "scale(1.03)",
                          }}
                        ></i>
                      </Button>
                      <button
                        type="button"
                        className="btn btn-custom-orange shadow-0"
                        style={{
                          backgroundColor: "rgb(255, 164, 28)",
                          borderColor: "rgb(255, 164, 28)",
                          color: "#fff",
                        }}
                        onClick={() => {
                       
                            handleCartButtonClick(
                              item.productId,
                              item.mainImage,
                              item.model,
                              item.productTitle,
                              item.price,
                              item.rating,
                              item.category
                            );
                            
                        }}
                      >
                        <i className="fas fa-cart-plus"></i>
                      </button>
                      <Link
                        to={`/product/${item.category}/${item.productId}`}
                        style={{ textDecoration: "none" }}
                      >
                        <button
                          className="btn btn-custom-yellow shadow-0"
                          style={{
                            backgroundColor: "rgb(255, 216, 20)",
                            borderColor: "rgb(255, 216, 20)",
                            color: "#000",
                            marginRight:"105px"
                          }}
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No items in wishlist</p>
          )}
        </Row>
      </div>
    </div>
  );
}

export default WishProduct;
