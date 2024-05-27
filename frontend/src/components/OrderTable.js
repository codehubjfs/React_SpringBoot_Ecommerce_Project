import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import "datatables.net-bs4/js/dataTables.bootstrap4.min.js";
import $ from "jquery";
import "./Order.css";

export const OrderTable = ({ orders }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    $(document).ready(() => {
      $("#OrderTable").DataTable();
    });
  }, []);

  const toggleModal = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setShowModal(false);
  };

  return (
    <div className="container-fluid mt-3">
      <div className="table-responsive">
        <table
          id="OrderTable"
          className="table table-striped table-bordered table-hover mt-5"
        >
          <thead>
            <tr>
              <th style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>S.No</th>
              <th style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>Order ID</th>
              <th style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>Customer Name</th>
              <th style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>Status</th>
              <th style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>Total Amount</th>
              <th style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>Payment Method</th>
              <th style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td className="text-center">{order.sno}</td>
                <td className="text-center">{order.id}</td>
                <td className="text-center">{order.customer}</td>
                <td className="text-center">{order.status}</td>
                <td className="text-center">{order.amount}</td>
                <td className="text-center">{order.method}</td>
                <td className="text-center" style={{ cursor: "pointer" }}>
                  <i
                    className="fas fa-eye text-dark"
                    onClick={() => toggleModal(order)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && selectedOrder && (
        <Modal show={showModal} onHide={closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Order Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-6 font-weight-bold">Order ID</div>
                <div className="col-6">{selectedOrder.id}</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 font-weight-bold">Customer Name</div>
                <div className="col-6">{selectedOrder.customer}</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 font-weight-bold">Status</div>
                <div className="col-6">{selectedOrder.status}</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 font-weight-bold">Total Amount</div>
                <div className="col-6">{selectedOrder.amount}</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 font-weight-bold">Payment Method</div>
                <div className="col-6">{selectedOrder.method}</div>
              </div>
              {selectedOrder.products.map((product, index) => (
                <div key={index} className="row mb-2">
                  <div className="col-6 font-weight-bold">Product Name</div>
                  <div className="col-6">{product.name}</div>
                  <div className="col-6 font-weight-bold">Quantity</div>
                  <div className="col-6">{product.quantity}</div>
                </div>
              ))}
              <div className="row mb-2">
                <div className="col-6 font-weight-bold">Delivery Date</div>
                <div className="col-6">{selectedOrder.deliveryDate}</div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};
