import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Table, Container, Spinner, Alert, Form } from 'react-bootstrap';
import { getOrderById, setSelectedOrder, updateOrderStatus } from '../slices/OrderSlice';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import $ from 'jquery';
import '../components/Order.css';

const OrderTable = ({ orders }) => {
  const [showModal, setShowModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState('');
  const dispatch = useDispatch();
  const selectedOrder = useSelector((state) => state.orders.selectedOrder);
  const loading = useSelector((state) => state.orders.loading);
  const error = useSelector((state) => state.orders.error);

  useEffect(() => {
    if (orders.length > 0) {
      const table = $('#OrderTable').DataTable({
        responsive: true
      });
  
      return () => {
        if ($.fn.DataTable.isDataTable('#OrderTable')) {
          table.destroy();
        }
      };
    }
  }, [orders]);
  
  const handleViewOrder = (orderId) => {
    dispatch(getOrderById(orderId));
    setShowModal(true);
  };

  const closeModal = () => {
    dispatch(setSelectedOrder(null));
    setShowModal(false);
  };

  const handleStatusChange = (orderId, newStatus) => {
    dispatch(updateOrderStatus({ id: orderId, status: newStatus }));
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const filteredOrders = filterStatus
    ? orders.filter(order => order.status === filterStatus)
    : orders;

  if (loading === 'pending') {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  if (error) {
    return <Alert variant="danger">Error: {error}</Alert>;
  }

  return (
    <Container fluid className="mt-3">
      {/* <Form.Group controlId="statusFilter">
        <Form.Label>Filter by Status</Form.Label>
        <Form.Control as="select" value={filterStatus} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </Form.Control>
      </Form.Group> */}
      <div className="table-responsive">
        <Table id="OrderTable" className="table-striped table-bordered table-hover mt-5" responsive>
          <thead>
            <tr>
              <th className="text-center bg-dark text-white">S.No</th>
              <th className="text-center bg-dark text-white">Order ID</th>
              <th className="text-center bg-dark text-white">Customer Id</th>
              <th className="text-center bg-dark text-white">Status</th>
              <th className="text-center bg-dark text-white">Total Amount</th>
              <th className="text-center bg-dark text-white">Payment Method</th>
              <th className="text-center bg-dark text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders && filteredOrders.map((order, index) => (
              <tr key={index}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{order.id}</td>
                <td className="text-center">{order.customerId}</td>
                <td className="text-center">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    className="form-control"
                  >
                    <option value="Pending">Pending</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="text-center">{order.amount}</td>
                <td className="text-center">{order.paymentMethod}</td>
                <td className="text-center" style={{ cursor: 'pointer' }}>
                  <button className='btn'>
                  <i className="bi bi-eye" onClick={() => handleViewOrder(order.id)}></i>
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {showModal && selectedOrder && (
        <Modal show={showModal} onHide={closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Order Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container fluid>
              <div className="row mb-2">
                <div className="col-6 font-weight-bold">Order ID</div>
                <div className="col-6">{selectedOrder.id}</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 font-weight-bold">Customer ID</div>
                <div className="col-6">{selectedOrder.customerId}</div>
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
                <div className="col-6">{selectedOrder.paymentMethod}</div>
              </div>
              <div className="row mb-2">
              <div className="col-6 font-weight-bold">Delivery Date</div>
                <div className="col-6">{selectedOrder.deliveryDate}</div>
              </div>
              <div className="row mb-2">
              <div className="col-6 font-weight-bold">Order Date</div>
                <div className="col-6">{selectedOrder.orderDate}</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 font-weight-bold">Product (ID)</div>
                <div className="col-6">
                      {selectedOrder.productId}
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-6 font-weight-bold">Quantity</div>
                <div className="col-6">
                {selectedOrder.quantity}
                </div>
              </div>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default OrderTable;