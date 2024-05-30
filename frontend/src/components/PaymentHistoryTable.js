import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPayments } from '../slices/paymentSlice';

function PaymentHistoryTable() {
    const dispatch = useDispatch();
    const { payments, status, error } = useSelector(state => state.payments);

    useEffect(() => {
        dispatch(fetchAllPayments());
    }, [dispatch]);

    return (
        <div className="container mt-4" style={{ width: '100%' }}>

                                <h4 className="card-title">Payment History</h4>
                                <p className="card-description">All payment details of customers</p>
                                <div className="table-responsive">
                                    {status === 'loading' && <p>Loading...</p>}
                                    {status === 'failed' && <p>{error}</p>}
                                    <table className="table table-hover" id="example">
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
