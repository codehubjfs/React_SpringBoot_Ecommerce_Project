import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net-bs4';

function SupportPage() {
  const [queries, setQueries] = useState([]);
  const dataTableRef = useRef(null);

  useEffect(() => {
    fetchQueriesFromDatabase();
  }, []);

  const fetchQueriesFromDatabase = () => {
    const fetchedQueries = [
      { id: 1, customerId: 123, customerEmail: 'kavyapalani59@gmail.com', query: 'Refund', status: 'pending' },
      { id: 2, customerId: 321, customerEmail: 'sriprasanna2k2@gmail.com', query: 'Product not received', status: 'pending' },
    //   { id: 2, supplierId: 456, supplierEmail: '2k20ece034@kiot.ac.in', query: 'Damage', status: 'pending' },
    ];
    setQueries(fetchedQueries);
  };

  useEffect(() => {
    if (queries.length > 0) {
      $(dataTableRef.current).DataTable();
    }
  }, [queries]);

  const handleSendEmail = (queryId, recipientType, recipientEmail) => {
    const query = queries.find((query) => query.id === queryId);

    if (!recipientEmail) {
      alert('Recipient email not found!');
      return;
    }

    const subject = encodeURIComponent('reply to customer');
    const body = encodeURIComponent(`Hiii:\n\n${query.query}`);
    const mailtoLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${recipientEmail}&su=${subject}&body=${body}`;

    window.open(mailtoLink, '_blank');

    const updatedQueries = queries.map((q) =>
      q.id === queryId ? { ...q, status: 'resolved' } : q
    );
    setQueries(updatedQueries);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Customer Support</h1>
      <table ref={dataTableRef} className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Recipient Type</th>
            <th>Query</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {queries.map((query) => (
            <tr key={query.id}>
              <td>{query.id}</td>
              <td>{query.customerId ? 'Customer' : 'Supplier'}</td>
              <td>{query.query}</td>
              <td>{query.status}</td>
              <td>
                {query.status === 'pending' && (
                  <button className="btn btn-primary" onClick={() => handleSendEmail(query.id, query.customerId ? 'customer' : 'supplier', query.customerId ? query.customerEmail : query.supplierEmail)}>
                    Send Email
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SupportPage;
