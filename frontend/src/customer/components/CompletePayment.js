import React from "react";

const CompletePayment = ({
  product,
  selectedAddress,
  selectedPaymentMethod,
  handlePaymentMethodChange,
  prevStep,
}) => {
  const handlePayment = () => {
    if (!selectedAddress || selectedPaymentMethod === "") {
      alert("Please complete all the previous steps.");
      return;
    }

    if (selectedPaymentMethod === "cod") {
      completePayment();
    } else {
      const options = {
        key: "rzp_test_s9a7uBWwg11rpX",
        amount: product.price * 10,
        currency: "INR",
        name: "Horizon",
        description: "Product Purchase",
        handler: function (response) {
          alert(
            "Payment successful! Payment ID: " + response.razorpay_payment_id
          );
          completePayment();
        },
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
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    }
  };

  const completePayment = () => {
    const newOrder = {
      categoryId: product.categoryId,
      productId: product.productId,
      Color: product.Color,
      Storage: product.Storage,
      Content: product.Content,
      Size: product.Size,
      imageSrc: product.imageSrc,
      productName: product.productName,
      price: product.price,
    };
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    window.location.href = "/your-orders";
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">Complete Payment</h2>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="paymentMethod"
            id="cardPayment"
            value="card"
            checked={selectedPaymentMethod === "card"}
            onChange={handlePaymentMethodChange}
          />
          <label className="form-check-label" htmlFor="cardPayment">
            Card/Online Payment
          </label>
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="paymentMethod"
            id="codPayment"
            value="cod"
            checked={selectedPaymentMethod === "cod"}
            onChange={handlePaymentMethodChange}
          />
          <label className="form-check-label" htmlFor="codPayment">
            Cash on Delivery
          </label>
        </div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-secondary" onClick={prevStep}>
            Back
          </button>
          <button className="btn btn-primary" onClick={handlePayment}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletePayment;
