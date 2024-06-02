import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
  fetchCarts,
  addItemToCart,
  setItemsFromSession,
} from "../slices/CartSlice";

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.carts.items) ?? [];
  const status = useSelector((state) => state.carts.status);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const customerData = useSelector((state) => state.customers.customer);

  useEffect(() => {
    const storedCustomerData = sessionStorage.getItem("customerData");
    if (storedCustomerData) {
      const parsedCustomer = JSON.parse(storedCustomerData);
      if (parsedCustomer && parsedCustomer.id) {
        console.log(
          "Customer ID retrieved from session storage: ",
          parsedCustomer.id
        );
        dispatch(fetchCarts(parsedCustomer.id));
      }
    }
  }, [dispatch]);

  const handleAddToCart = (product) => {
    const storedCustomerData = sessionStorage.getItem("customerData");
    const parsedCustomer = JSON.parse(storedCustomerData);
    dispatch(addItemToCart({ product, customerId: parsedCustomer.id }));
  };

  const calculateTotal = () => {
    return items
      .reduce((acc, item) => {
        const price = parseInt(item.price);
        const quantity = parseInt(item.quantity);
        const subtotal = price * quantity;
        return acc + subtotal;
      }, 0);
  };

  const handleDecrease = (productId) => {
    console.log("Decreasing quantity for product ID:", productId);
    const storedCustomerData = sessionStorage.getItem("customerData");
    const parsedCustomer = JSON.parse(storedCustomerData);

    // Find the item with the given productId
    const item = items.find((item) => item.productId === productId);

    if (item.quantity > 1) { // Check if quantity is greater than 1
      dispatch(decreaseQuantity({ customerId: parsedCustomer.id, productId }));
    }
  };

  const handleIncrease = (productId) => {
    console.log("Increasing quantity for product ID:", productId);
    const storedCustomerData = sessionStorage.getItem("customerData");
    const parsedCustomer = JSON.parse(storedCustomerData);

    // Find the item with the given productId
    const item = items.find((item) => item.productId === productId);

    if (item.quantity < 10) { // Check if quantity is less than 10
      dispatch(increaseQuantity({ customerId: parsedCustomer.id, productId }));
    }
  };

  const handleRemove = (productId) => {
    console.log("Removing product ID:", productId);
    const storedCustomerData = sessionStorage.getItem("customerData");
    const parsedCustomer = JSON.parse(storedCustomerData);
    dispatch(removeItem({ customerId: parsedCustomer.id, productId }));
  };

  const completePayment = async () => {
    console.log("Payment complete!");
    dispatch(setItemsFromSession([])); // Assuming setItemsFromSession sets items to an empty array
    setModalMessage("Payment successful!");
    setShowModal(true);
  };

  const handlePayment = async () => {
    const totalAmount = calculateTotal() * 100;
    try {
      setPaymentProcessing(true);
      const options = {
        key: "rzp_test_s9a7uBWwg11rpX",
        amount: totalAmount,
        currency: "INR",
        name: "Horizon",
        description: "Product Purchase",
        prefill: {
          name: "Sivasankar",
          email: "2k20eee34@kiot.ac.in",
          contact: "8248452359",
        },
        notes: {
          address: "kumaran street",
        },
        theme: {
          color: "#3399cc",
        },
        handler: async (response) => {
          await completePayment();
        },
        modal: {
          ondismiss: () => {
            setModalMessage("Payment dismissed!");
            setShowModal(true);
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error processing payment:", error);
      setModalMessage("Error processing payment. Please try again later.");
      setShowModal(true);
    } finally {
      setPaymentProcessing(false);
    }
  };

  return (
    <Container>
      <h1 className="mb-4">Shopping Cart</h1>
      {items.length > 0 ? (
        <Row>
          {items.map((item) => (
            <Col md={4} key={item.id} className="mb-4">
              <Card className="h-100">
              <Card.Img
                  variant="top"
                  src={item.mainImage}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{item.productTitle}</Card.Title>
                  <Card.Text>Price: ₹{parseInt(item.price)}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button
                      variant="outline-primary"
                      onClick={() => handleDecrease(item.productId)}
                    >
                      <i className="fas fa-minus"></i>
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      variant="outline-primary"
                      onClick={() => handleIncrease(item.productId)}
                    >
                      <i className="fas fa-plus"></i>
                    </Button>
                  </div>
                  <Card.Text className="mt-2">
                    Total: ₹{(parseInt(item.price) * item.quantity)}
                  </Card.Text>
                  <Button
                    variant="outline-danger"
                    onClick={() => handleRemove(item.productId)}
                    className="mt-auto"
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div className="text-center">
          <p>No items in cart</p>
        </div>
      )}
      {items.length > 0 && (
        <div className="text-right mt-4">
          <h3>Total: ₹{calculateTotal()}</h3>
          <Button
            variant="primary"
            onClick={handlePayment}
            disabled={paymentProcessing}
          >
            Place Order
          </Button>
        </div>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Cart;
