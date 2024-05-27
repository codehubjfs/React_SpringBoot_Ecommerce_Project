import React from "react";

const ReviewOrder = ({ product, nextStep }) => {
  const {
    imageSrc,
    productName,
    orders,
    price,
    originalPrice,
    Storage,
    Color,
    Content,
    Size,
  } = product;
  const discountPercentage = Math.round(
    ((originalPrice - price) / originalPrice) * 100
  );

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">Review Your Order</h2>
        <div className="row">
          <div className="col-md-4">
            <img
              src={imageSrc}
              alt={productName}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-8">
            <h3>{productName}</h3>
            <p>{orders} Orders</p>
            {Storage && <p>Storage: {Storage}</p>}
            {Color && <p>Color: {Color}</p>}
            {Content && <p>Content: {Content}</p>}
            {Size && <p>Size: {Size}</p>}
            <p>
              <strong>Price:</strong> ₹{price}
            </p>
            <p>
              <strong>Discount:</strong> {discountPercentage}% off
            </p>
            <button className="btn btn-primary mt-4" onClick={nextStep}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewOrder;
