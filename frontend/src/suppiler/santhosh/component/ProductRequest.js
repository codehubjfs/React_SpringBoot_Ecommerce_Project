import React, { useState } from "react";
import ApproveModal from "../../../components/ApproveSellerModal";
import RejectModal from "./RejectModal";
import styles from "../SellerRequest.module.css";

function ProductRequest({ sellerRequests, onApprove, onReject }) {
  const [approveModalShow, setApproveModalShow] = useState(false);
  const [rejectModalShow, setRejectModalShow] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState(null);

  const handleApprove = (sellerId) => {
    setApproveModalShow(true);
    setSelectedRequestId(sellerId);
    onApprove(sellerId);
  };

  const handleReject = (sellerId) => {
    setRejectModalShow(true);
    setSelectedRequestId(sellerId);
    onReject(sellerId);
  };

  const handleApprovalConfirmation = () => {
    setApproveModalShow(false);
  };

  const handleRejectionConfirmation = () => {
    setRejectModalShow(false);
  };

  const handleSubmitReason = (reason) => {
    setRejectModalShow(false);
  };

  return (
    <div className="row">
      {sellerRequests.map((request) => (
        <div key={request.id} className="col-md-4 mb-3">
          <div className={styles.sellerRequest}>
            <div className={styles.sellerRequestBody}>
              <p className={styles.sellerRequestTitle}><strong>Seller:</strong> {request.seller}</p>
              <p className={styles.sellerRequestText}><strong>Product Name:</strong> {request.productName}</p>
              <p className={styles.sellerRequestText}><strong>Product Description:</strong> {request.productDescription}</p>
              <p className={styles.sellerRequestText}><strong>Price:</strong> ${request.price}</p>
              <p className={styles.sellerRequestText}><strong>Quantity:</strong> {request.quantity}</p>
              <p className={styles.sellerRequestText}><strong>Category:</strong> {request.category}</p>
              <div className={styles.sellerRequestButtons}>
             
                <button
                  className={`${styles.button} ${styles.rejectButton}`}
                  onClick={() => handleReject(request.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
     
      <RejectModal
        show={rejectModalShow}
        onHide={() => setRejectModalShow(false)}
        onSubmit={handleSubmitReason}
        onConfirm={handleRejectionConfirmation}
      />
    </div>
  );
}

export default ProductRequest;