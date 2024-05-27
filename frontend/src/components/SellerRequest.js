import React, { useState,useEffect } from "react";
import ApproveModal from "./ApproveModal";
import RejectModal from "./RejectModal";
import styles from "./SellerRequest.module.css";
import { useDispatch } from "react-redux"; // Import useDispatch hook
import { approveProduct,rejectProduct ,fetchApprovedProducts} from "../slices/productSlice";

function SellerRequest({ sellerRequests, onApprove, onReject }) {
  const [approveModalShow, setApproveModalShow] = useState(false);
  const [rejectModalShow, setRejectModalShow] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  
  const dispatch = useDispatch(); // Initialize useDispatch hook
 
  useEffect(() => {
      dispatch(fetchApprovedProducts());
  }, [dispatch]);

  const handleApprove = (productId) => {
    dispatch(approveProduct(productId))
      .then(() => {
        setApproveModalShow(true);
        setSelectedRequestId(productId);
      })
      .catch((error) =>
        console.error("Error approving product:", error)
      );
  };

  const handleReject = (productId) => {
    dispatch(rejectProduct(productId))
      .then(() => {
        setRejectModalShow(true);
        setSelectedRequestId(productId);
      })
      .catch((error) =>
        console.error("Error rejecting product:", error)
      );
   
  };

  const handleApprovalConfirmation = () => {
    onApprove(selectedRequestId);
    setApproveModalShow(false);
    setSelectedRequestId(null);
  };

  const handleRejectionConfirmation = (reason) => {
    onReject(selectedRequestId, reason);
    setRejectModalShow(false);
    setSelectedRequestId(null);
  };

  return (
    <div className="row">
      {sellerRequests.map((request) => (
        <div key={request.productId} className="col-md-4 mb-3">
          <div className={styles.sellerRequest}>
            <div className={styles.sellerRequestBody}>
              <p className={styles.sellerRequestTitle}>
                <strong>Seller:</strong> {request.supplierId} {/* Change 'seller' to 'supplierId' */}
              </p>
              <p className={styles.sellerRequestText}>
                <strong>Product Name:</strong> {request.productTitle} {/* Change 'productName' to 'productTitle' */}
              </p>
              <p className={styles.sellerRequestText}>
                <strong>Product Description:</strong> {request.description} {/* Change 'productDescription' to 'description' */}
              </p>
              <p className={styles.sellerRequestText}>
                <strong>Price:</strong> ${request.price}
              </p>
              <p className={styles.sellerRequestText}>
                <strong>Quantity:</strong> {request.stock} {/* Change 'quantity' to 'stock' */}
              </p>
              <p className={styles.sellerRequestText}>
                <strong>Category:</strong> {request.category}
              </p>
              <div className={styles.sellerRequestButtons}>
                <button
                  className={`${styles.button} ${styles.approveButton}`}
                  onClick={() => handleApprove(request.productId)}
                >
                  Approve
                </button>
                <button
                  className={`${styles.button} ${styles.rejectButton}`}
                  onClick={() => handleReject(request.productId)}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Approve Modal */}
      {approveModalShow && (
        <ApproveModal
          show={approveModalShow}
          onHide={() => setApproveModalShow(false)}
          onConfirm={handleApprovalConfirmation}
          requestId={selectedRequestId}
        />
      )}
      {/* Reject Modal */}
      {rejectModalShow && (
        <RejectModal
          show={rejectModalShow}
          onHide={() => setRejectModalShow(false)}
          onConfirm={handleRejectionConfirmation}
          requestId={selectedRequestId}
        />
      )}
    </div>
  );
}

export default SellerRequest;
