import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPayments } from '../slices/paymentSlice';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import $ from 'jquery';

function PaymentHistoryTable() {
    const dispatch = useDispatch();
    const payments = useSelector(state => state.payments.payments);

    useEffect(() => {
        dispatch(fetchAllPayments());
    }, [dispatch]);

    useEffect(() => {
        let table;
        if (payments.length > 0) {
            table = $('#paymentTable').DataTable();

            // Clean up the DataTable on component unmount
            return () => {
                if (table) {
                    table.destroy();
                }
            };
        }
    }, [payments]);

    return (
        <div className="container mt-4" style={{ width: '100%' }}>
            <h4 className="card-title">Payment History</h4>
            <p className="card-description">All payment details of customers</p>
            <div className="table-responsive">
                <table className="table table-hover" id="paymentTable">
                    <thead>
                        <tr>
                            <th>Payment ID</th>
                            <th>Customer ID</th>
                            <th>Order ID</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Mode of Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={index}>
                                <td>{payment.paymentId}</td>
                                <td>{payment.customeId}</td>
                                <td>{payment.orderId}</td>
                                <td>{payment.amount}</td>
                                <td>{payment.dateOfAddition}</td>
                                <td>{payment.modeOfPayment}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PaymentHistoryTable;
