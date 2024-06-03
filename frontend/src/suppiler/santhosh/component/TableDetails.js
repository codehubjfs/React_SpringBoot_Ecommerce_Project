import React from 'react';
import Report from './Report';

function TableDetails() {
  const reportData = [
    { orderId: 'OR123', paymentStatus: 'Paid', deliveryStatus: 'Shipped', orderIssue: '5000', resolution: 'Order rescheduled for faster delivery', date: '2024-03-17' },
    { orderId: 'OR124', paymentStatus: 'Pending', deliveryStatus: 'Processing', orderIssue: '0', resolution: 'Customer contacted for payment confirmation', date: '2024-03-18' },
    { orderId: 'OR125', paymentStatus: 'Failed', deliveryStatus: 'Not Shipped', orderIssue: '0', resolution: 'Replacement order initiated', date: '2024-03-19' },
    { orderId: 'OR126', paymentStatus: 'Paid', deliveryStatus: 'Delivered', orderIssue: '9000', resolution: 'Refund processed', date: '2024-03-20' }
  ];

  return (
    <div>
      <Report data={reportData} />
    </div>
  );
}

export default TableDetails;