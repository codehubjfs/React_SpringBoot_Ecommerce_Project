import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Table, Button } from "react-bootstrap";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
  fetchCarts,
} from "../slices/CartSlice";

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.carts.items) ?? [];
  const status = useSelector((state) => state.carts.status);
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCarts());
    }
  }, [status, dispatch]);

  const calculateTotal = () => {
    return items
      .reduce((acc, item) => {
        const price = parseFloat(item.productPrice);
        const quantity = parseFloat(item.quantity);
        const subtotal = price * quantity;
        return acc + subtotal;
      }, 0)
      .toFixed(2); // Ensure total is a string with 2 decimal places
  };

  const handleDecrease = (productId) => {
    console.log("Decreasing quantity for product ID:", productId);
    dispatch(decreaseQuantity({ customerId: 1, productId }));
  };

  const handleIncrease = (productId) => {
    console.log("Increasing quantity for product ID:", productId);
    dispatch(increaseQuantity({ customerId: 1, productId }));
  };

  const handleRemove = (productId) => {
    console.log("Removing product ID:", productId);
    dispatch(removeItem({ customerId: 1, productId }));
  };

  const completePayment = async () => {
    // Add your logic here for what happens after a successful payment
    console.log("Payment complete!");
    // For example, you could dispatch an action to clear the cart, show a success message, etc.
  };

  const handlePayment = async () => {
    const totalAmount = calculateTotal() * 100; // Convert to paise (1 INR = 100 paise)
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
          // Handle success
          alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
          await completePayment();
        },
        modal: {
          ondismiss: () => {
            // Handle payment dismissal
            alert("Payment dismissed!");
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Error processing payment. Please try again later.");
    } finally {
      setPaymentProcessing(false);
    }
  };

  return (
    <Container>
      <h1 className="mb-4">Shopping Cart</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.productImageUrl} alt="Item" />
              </td>
              <td>
                <a href="#" className="text-decoration-none">
                  {item.productName}
                </a>
              </td>
              <td>₹{parseFloat(item.productPrice).toFixed(2)}</td>
              <td>
                <Button
                  variant="outline-primary"
                  className="quantity-btn"
                  style={{ marginRight: "10px" }}
                  onClick={() => handleDecrease(item.productId)}
                >
                  <i className="fas fa-minus"></i>
                </Button>
                {item.quantity}
                <Button
                  variant="outline-primary"
                  className="quantity-btn"
                  style={{ marginLeft: "10px" }}
                  onClick={() => handleIncrease(item.productId)}
                >
                  <i className="fas fa-plus"></i>
                </Button>
              </td>
              <td>
                ₹{(parseFloat(item.productPrice) * item.quantity).toFixed(2)}
              </td>
              <td>
                <Button
                  variant="outline-danger"
                  onClick={() => handleRemove(item.productId)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4"></td>
            <td>
              <strong style={{ fontSize: "25px" }}>
                Total: ₹{calculateTotal()}
              </strong>
            </td>
            <td></td>
          </tr>
        </tfoot>
      </Table>
      <div style={{ marginLeft: "88%" }}>
        <Button
          variant="primary"
          className="mt-4 place-order-btn"
          onClick={handlePayment}
          disabled={paymentProcessing}
        >
          Place Order
        </Button>
      </div>
    </Container>
  );
}

export default Cart;
