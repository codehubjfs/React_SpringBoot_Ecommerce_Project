import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  fetchWishlist,
  addItemToWishlist,
  removeItemFromWishlist,
} from "../slices/WishlistSlice";
// import "./wishliststyle.css";
import "../NewArrival.css";
function WishProduct() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.wishlist.items);
  const status = useSelector((state) => state.wishlist.status);
  const customer = useSelector((state) => state.customers.customer);

  useEffect(() => {
    // Retrieve customer data from session storage
    const storedCustomerData = sessionStorage.getItem("customerData");
    if (storedCustomerData) {
      const parsedCustomer = JSON.parse(storedCustomerData);
      // Check if customer ID is available
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
  console.log("Status:", status);
  console.log("Cus:", customer);
  console.log("item:", items);

  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <h1 className="mt-5 mb-4">My Wishlist</h1>
      <div className="container mt-5" style={{ marginBottom: "40px" }}>
        <Row>
          {items && items.length > 0 ? (
            items.map((item, index) => (
              <Col md={4} key={index}>
                <Card className="mb-4">
                  <Card.Img
                    variant="top"
                    src={item.productImageUrl}
                    alt={`Product ${index + 1}`}
                  />
                  <Card.Body>
                    <Card.Title>{item.productName}</Card.Title>
                    <Card.Text>{item.productDescription}</Card.Text>
                    <div className="review-stars mb-2">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                    <Card.Text>
                      <small className="text-muted">
                        Price: {item.productPrice}
                      </small>
                    </Card.Text>
                    <Button
                      className="like-btn"
                      style={{
                        background: "none",
                        border: "none",
                        position: "absolute",
                        bottom: "10px",
                        right: "-10px",
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
                        style={{ color: "red" }}
                      ></i>
                      {items.some((wishlistItem) => wishlistItem.id === item.id)
                        ? "Ul"
                        : "L"}
                    </Button>
                    <button
                      type="button"
                      className="btn btn-custom-orange shadow-0"
                    >
                      <i className="fas fa-cart-plus"></i>
                    </button>
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
