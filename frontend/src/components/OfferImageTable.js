import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOfferImageInJson } from '../slices/OfferImageSlice'
import DeleteOfferImage from './DeleteOfferImage';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import $ from 'jquery';

function OfferImageTable({ offerImages }) {
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedOfferImageId, setSelectedOfferImageId] = useState(null);
  const [selectedOfferImageName, setSelectedOfferImageName] = useState('');

  useEffect(() => {
    if (offerImages.length > 0) {
      const table = $('#OfferImageTable').DataTable({
        responsive: true
      });
      return () => {
        table.destroy();
      };
    }
  }, [offerImages]);

  const openDeleteModal = (id, name) => {
    setSelectedOfferImageId(id);
    setSelectedOfferImageName(name);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedOfferImageId(null);
    setSelectedOfferImageName('');
  };

  const handleDeleteConfirm = () => {
    dispatch(deleteOfferImageInJson(selectedOfferImageId))
      .then(() => {
        closeDeleteModal();
      })
      .catch((error) => {
        console.error("Failed to delete offer image:", error);
      });
  };

  return (
    <div className="offer-images">
      <div className="table-responsive mt-4">
        <table id="OfferImageTable" className="table table-striped table-bordered table-hover mt-5">
          <thead>
            <tr>
              <th className="text-center bg-dark text-white">S.No</th>
              <th className="text-center bg-dark text-white">Offer Image Id</th>
              <th className="text-center bg-dark text-white">Offer Image Url</th>
              <th className="text-center bg-dark text-white">Offer Image Name</th>
              <th className="text-center bg-dark text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {offerImages.map((offer, index) => (
              <tr key={index}>
                <td style={{ textAlign: 'center' }}>{index + 1}</td>
                <td style={{ textAlign: 'center' }}>{offer.offerImageId}</td>
                <td style={{ textAlign: 'center' }}>{offer.offerImageUrl}</td>
                <td style={{ textAlign: 'center' }}>{offer.offerImageName}</td>
                <td style={{ textAlign: 'center' }}>
                  <button className="btn" onClick={() => openDeleteModal(offer.offerImageId, offer.offerImageName)}>
                    <i className="bi bi-trash text-danger"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DeleteOfferImage
        offerName={selectedOfferImageName}
        show={showDeleteModal}
        onClose={closeDeleteModal}
        onDelete={handleDeleteConfirm}
      />
    </div>
  );
}

export default OfferImageTable;
