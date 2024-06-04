import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOffersFromJson, deleteOfferInJson } from '../slices/OfferSlice';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import $ from 'jquery';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import { EditOffer } from './EditOffer';
import { DeleteOffer } from './DeleteOffer';
import { Container, Table, Spinner, Alert, Button } from 'react-bootstrap';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export function OfferTable() {
  const dispatch = useDispatch();
  const { offerList, loading, error } = useSelector((state) => state.offers);
  const tableRef = useRef();

  useEffect(() => {
    dispatch(getOffersFromJson());
  }, [dispatch]);

  useEffect(() => {
    if (offerList.length > 0) {
      const table = $('#OfferTable').DataTable({
        responsive: true,
        destroy: true
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
    setEditOfferData(offerData);
    setShowEditModal(true);
  };

  const handleDelete = (index) => {
    const offerToDelete = offerList[index];
    setDeleteOfferId(offerToDelete.offerId);
    setShowDeleteModal(true);
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

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(offerList);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Offers");
    XLSX.writeFile(wb, 'OfferTable.xlsx');
  };

  const downloadPDF = () => {
    const input = tableRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgProps = pdf.getImageProperties(imgData);
      const imgWidth = pdfWidth;
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save('OfferTable.pdf');
    });
  };

  if (loading === 'pending') {
    return <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>;
  }

  if (error) {
    return <Alert variant="danger">Error: {error}</Alert>;
  }

  return (
    <Container fluid>
      <div className="d-flex justify-content-end mb-3">
        <Button variant="primary" className="me-2" onClick={exportToExcel}>
          Export as Excel
        </Button>
        <Button variant="danger" className='pdfbtn' onClick={downloadPDF}>
          Download as PDF
        </Button>
      </div>
      <div className="table-responsive">
        <Table id="OfferTable" className="table-striped table-bordered table-hover mt-5" responsive ref={tableRef}>
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
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{offer.offerId}</td>
                <td className="text-left">{offer.offerName}</td>
                <td className="text-center">{offer.productId}</td>
                <td className="text-center">{offer.discount}</td>
                <td className="text-center">{offer.startDate}</td>
                <td className="text-center">{offer.endDate}</td>
                <td className="text-center">
                  <i className="bi bi-pencil-square" onClick={() => handleEdit(index)}></i>
                  <i className="bi bi-trash ms-4" onClick={() => handleDelete(index)}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <EditOffer show={showEditModal} handleClose={handleEditClose} editOfferData={editOfferData} />
      <DeleteOffer show={showDeleteModal} handleClose={handleDeleteClose} handleDelete={confirmDelete} />
    </Container>
  );
}

export default OfferTable;