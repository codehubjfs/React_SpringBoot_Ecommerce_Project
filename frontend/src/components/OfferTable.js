import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOffersFromJson, deleteOfferInJson } from '../slices/OfferSlice';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import $ from 'jquery';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import { EditOffer } from './EditOffer';
import { DeleteOffer } from './DeleteOffer';

export function OfferTable() {
  const dispatch = useDispatch();
  const { offerList, loading } = useSelector((state) => state.offers);

  useEffect(() => {
    dispatch(getOffersFromJson());
  }, [dispatch]);

  useEffect(() => {
    if (offerList.length > 0) {
      const table = $('#OfferTable').DataTable({
        responsive: true
      });
      return () => {
        table.destroy();
      };
    }
  }, [offerList]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editOfferData, setEditOfferData] = useState(null);
  const [deleteOfferId, setDeleteOfferId] = useState(null); 

  const handleEdit = (index) => {
    const offerData = offerList[index];
    console.log(offerData);
    setEditOfferData(offerData);
    setShowEditModal(true);
  };

  const handleDelete = (index) => {
    console.log(index);
    if (offerList && offerList.length > index) {
      const offerToDelete = offerList[index];
      console.log(offerToDelete);
      if (offerToDelete && offerToDelete.offerId) {
        setDeleteOfferId(offerToDelete.offerId); 
        setShowDeleteModal(true);
      } else {
        console.error("Offer or its ID is undefined.");
      }
    } else {
      console.error("Invalid index or empty offerList.");
    }
  };

  const handleEditClose = () => {
    setEditOfferData(null);
    setShowEditModal(false);
  };

  const handleDeleteClose = () => {
    setDeleteOfferId(null);
    setShowDeleteModal(false);
  };

  const confirmDelete = () => {
    dispatch(deleteOfferInJson(deleteOfferId))
      .then(() => {
        handleDeleteClose();
      })
      .catch((error) => {
        console.error("Failed to delete offer:", error);
      });
  };

  if (loading === 'pending') {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid">
      <div className="table-responsive">
        <table id="OfferTable" className="table table-striped table-bordered table-hover mt-5">
          <thead>
            <tr>
              <th style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>S.No</th>
              <th style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>Offer Id</th>
              <th style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>Offer Name</th>
              <th style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>Product ID</th>
              <th style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>Discount (%)</th>
              <th style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>Start Date</th>
              <th style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>End Date</th>
              <th style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {offerList.map((offer, index) => (
              <tr key={index}>
                <td style={{ textAlign: 'center' }}>{index + 1}</td>
                <td style={{ textAlign: 'left' }}>{offer.offerId}</td>
                <td style={{ textAlign: 'left' }}>{offer.offerName}</td>
                <td style={{ textAlign: 'center' }}>{offer.productId}</td>
                <td style={{ textAlign: 'center' }}>{offer.discount}</td>
                <td style={{ textAlign: 'center' }}>{offer.startDate}</td>
                <td style={{ textAlign: 'center' }}>{offer.endDate}</td>
                <td style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                  <button className='btn'>
                  <i className="bi bi-pencil-square" onClick={() => handleEdit(index)}></i>
                  </button>
                  <button className='btn'>
                  <i className="bi bi-trash" onClick={() => handleDelete(index)}></i>
                  </button>               
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <EditOffer show={showEditModal} handleClose={handleEditClose} editOfferData={editOfferData} />
      <DeleteOffer show={showDeleteModal} handleClose={handleDeleteClose} handleDelete={confirmDelete} />
    </div>
  );
}

export default OfferTable;

