import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net-bs4';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';

function Report({ data }) {
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState(null);
  const dataTableRef = useRef(null);

  useEffect(() => {
    if (dataTableRef.current) {
      $(dataTableRef.current).DataTable();
    }
    return () => {
      if ($.fn.dataTable.isDataTable(dataTableRef.current)) {
        $(dataTableRef.current).DataTable().destroy();
      }
    };
  }, [data]);

  const handleEditClick = (item) => {
    setEditedData(item);
    setEditMode(true);
  };

  const handleSaveClick = () => {
    // Handle saving the edited data here, for example, by calling an API
    setEditMode(false);
  };

  const handleDeleteClick = (index) => {
    // Update the data array by removing the item at the given index
    const newData = data.filter((_, i) => i !== index);
    // Update the state or handle data removal logic
  };

  const handleChange = (e, key) => {
    const { value } = e.target;
    setEditedData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <div className="report-table-container" style={{marginLeft:'100px !important'}}>
      <h2 className="mt-5" id="product"  >Report</h2>
      <table className="table table-striped table-bordered" ref={dataTableRef}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Order ID</th>
            <th>Payment status</th>
            <th style={{textAlign:'left'}}>Amount paid</th>
            <th style={{textAlign:'left'}}>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: editMode && editedData && editedData.orderId === item.orderId ? '#db8d8d' : '',
              }}
            >
              <td style={{textAlign:'center'}}>{index + 1}</td>
              <td >
                {editMode && editedData && editedData.orderId === item.orderId ? (
                  <input
                    type="text"
                    className="report-table-input"
                    value={editedData.orderId}
                    // onChange={(e) => handleChange(e, 'orderId')}
                  />
                ) : (
                  item.orderId
                )}
              </td>
              <td>
                {editMode && editedData && editedData.orderId === item.orderId ? (
                  <input
                    type="text"
                    className="report-table-input"
                    value={editedData.paymentStatus}
                    // onChange={(e) => handleChange(e, 'paymentStatus')}
                  />
                ) : (
                  item.paymentStatus
                )}
              </td>
              <td  style={{textAlign:'center'}}>
                {editMode && editedData && editedData.orderId === item.orderId ? (
                  <input
                    type="text"
                    className="report-table-input"
                    value={editedData.orderIssue}
                   
                    // onChange={(e) => handleChange(e, 'orderIssue')}
                  />
                ) : (
                  item.orderIssue
                )}
              </td>
              <td style={{textAlign:'center'}}>
                {editMode && editedData && editedData.orderId === item.orderId ? (
                  <input
                    type="text"
                    className="report-table-input"
                    // value={editedData.date}
                   
                  />
                ) : (
                  item.date
                )}
              </td>
              <td>
                  {editMode && editedData && editedData.orderId === item.orderId ? (
                    <span className="report-table-save-icon" onClick={() => handleSaveClick(item.orderId)}>
                      &#128190;
                    </span>
                  ) : (
                    <span className="report-table-delete-icon" onClick={() => handleDeleteClick(index)}>
                      &#128465;
                    </span>
                  )}
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Report;