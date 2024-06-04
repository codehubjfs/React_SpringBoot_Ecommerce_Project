
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders, setOrdersFromSession } from '../../../slices/OrderSlice';
import $ from 'jquery';
import 'datatables.net-bs4';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';

function Report() {
  const dispatch = useDispatch();
  const sellerDetails = useSelector((state) => state.sellerDetails);
  const orders = useSelector((state) => state.orders.orders);
  const status = useSelector((state) => state.orders.status);
  const dataTableRef = useRef(null);
  const tableInstance = useRef(null);
  const sellerId = sellerDetails ? sellerDetails.sellerId : null;

  useEffect(() => {
    if (sellerId) {
      const storedOrders = JSON.parse(sessionStorage.getItem('orders'));
      if (storedOrders && storedOrders.sellerId === sellerId) {
        dispatch(setOrdersFromSession(storedOrders));
      } else {
        dispatch(fetchOrders(sellerId));
      }
    }
  }, [sellerId, dispatch]);

  useEffect(() => {
    if (!tableInstance.current && orders.length > 0) {
      tableInstance.current = $(dataTableRef.current).DataTable();
    } else if (tableInstance.current) {
      tableInstance.current.clear().rows.add(orders).draw();
    }
    return () => {
      if (tableInstance.current) {
        tableInstance.current.destroy();
        tableInstance.current = null;
      }
    };
  }, [orders]);

  return (
    <div className="report-table-container" style={{ marginLeft: 0 }}>
      <h2 className="mt-5" id="product">Report</h2>
      <table className="table table-striped table-bordered" ref={dataTableRef}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Order ID</th>
            <th>Price</th>
            <th>Status</th>
            <th>Delivery Date</th>
            <th>Order Date</th>
            <th>Product Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? orders.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.orderid}</td>
              <td>{item.price}</td>
              <td>{item.status}</td>
              <td>{new Date(item.deliveryDate).toLocaleDateString()}</td>
              <td>{new Date(item.orderDate).toLocaleDateString()}</td>
              <td>{item.productName}</td>
              <td>
                <span className="report-table-delete-icon">
                  &#128465;
                </span>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="8" style={{ textAlign: 'center' }}>No orders found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Report
