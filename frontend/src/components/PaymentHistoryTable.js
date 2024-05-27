import React, { useState, useEffect } from 'react';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import $ from 'jquery';

function PaymentHistoryTable({ paymentData }) {
    const [filteredData, setFilteredData] = useState(paymentData);

    useEffect(() => {
        // Initialize DataTable
        const table = $('#paymentTable').DataTable();

        // Destroy and re-initialize DataTable on data change
        return () => {
            table.destroy();
        };
    }, [filteredData]);

    return (
        <div className="container mt-4" style={{ width: '100%' }}>
            <h4 className="mb-3">Payment history</h4>
            <div className="table-responsive">
                <table className="table table-hover" id="paymentTable">
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Mode of Payment</th>
                            <th>Date</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((payment, index) => (
                            <tr key={index}>
                                <td>{payment.customer}</td>
                                <td>{payment.product}</td>
                                <td>{payment.category}</td>
                                <td>{payment.amount}</td>
                                <td>{payment.modeOfPayment}</td>
                                <td>{payment.date}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PaymentHistoryTable;
