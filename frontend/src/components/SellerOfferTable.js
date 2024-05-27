import React, { useState, useEffect } from 'react';
import { EditSellerOffer } from './EditSellerOffer';
import { DeleteSellerOffer } from './DeleteSellerOffer';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import $ from 'jquery';

function SellerOfferTable({ offers, onEdit, onDelete }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  useEffect(() => {
    $(document).ready(() => {
      $('#SellerTable').DataTable();
    });
  }, []);

  const handleEdit = (index) => {
    setEditIndex(index);
    setShowEditModal(true);
  };

  const handleDelete = (index) => {
    setDeleteIndex(index);
    setShowDeleteModal(true);
  };

  const handleEditClose = () => {
    setEditIndex(null);
    setShowEditModal(false);
  };

  const handleDeleteClose = () => {
    setDeleteIndex(null);
    setShowDeleteModal(false);
  };

  const confirmDelete = () => {
    onDelete(deleteIndex);
    handleDeleteClose();
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <table id="SellerTable" className="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th className="text-center bg-dark text-white">S.No</th>
                  <th className="text-center bg-dark text-white">Offer Name</th>
                  <th className="text-center bg-dark text-white">Description</th>
                  <th className="text-center bg-dark text-white">Discount (%)</th>
                  <th className="text-center bg-dark text-white">Start Date</th>
                  <th className="text-center bg-dark text-white">End Date</th>
                  <th className="text-center bg-dark text-white">Actions</th>
                </tr>
              </thead>
              <tbody>
                {offers.map((offer, index) => (
                  <tr key={index} className="text-center">
                    <td>{offer.sno}</td>
                    <td>{offer.offerName}</td>
                    <td className="text-left">{offer.description}</td>
                    <td>{offer.discount}</td>
                    <td>{offer.startDate}</td>
                    <td>{offer.endDate}</td>
                    <td className="text-center">
                      <i className="fas fa-edit text-primary" onClick={() => handleEdit(index)}></i>
                      <i className="fas fa-trash-alt ms-4 text-danger" onClick={() => handleDelete(index)}></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <EditSellerOffer
        show={showEditModal}
        handleClose={handleEditClose}
        editIndex={editIndex}
      />
      <DeleteSellerOffer
        show={showDeleteModal}
        handleClose={handleDeleteClose}
        handleDelete={confirmDelete}
        deleteIndex={deleteIndex}
      />
    </div>
  );
}

export default SellerOfferTable;