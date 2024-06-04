import React, { useEffect, useState } from 'react';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import $ from 'jquery';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const SliderTable = ({ data, onEdit, onDelete }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedSlider, setSelectedSlider] = useState(null);

  useEffect(() => {
    if (data.length > 0) {
      $('#SliderTable').DataTable();
    }

    return () => {
      if ($.fn.dataTable.isDataTable('#SliderTable')) {
        $('#SliderTable').DataTable().destroy();
      }
    };
  }, [data]);

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(sliderImagesList);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sliders");
    XLSX.writeFile(wb, 'SliderTable.xlsx');
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

      pdf.save('SliderTable.pdf');
    });
  };

  const handleEditModalClose = () => setShowEditModal(false);
  const handleDeleteModalClose = () => setShowDeleteModal(false);
  const handleEditSubmit = (name, image) => {};
  const handleDeleteConfirm = () => {};

  return (
    <div className="container-fluid mt-5">
      <div className="d-flex justify-content-end mb-3">
        <Button variant="primary" className="me-2" onClick={exportToExcel}>
          Export as Excel
        </Button>
        <Button variant="danger" className='pdfbtn' onClick={downloadPDF}>
          Download as PDF
        </Button>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <table id="SliderTable" className="table table-striped table-bordered table-hover mt-5">
              <thead>
                <tr>
                  <th className="text-center bg-dark text-white">S.No</th>
                  <th className="text-center bg-dark text-white">Slider Id</th>
                  <th className="text-center bg-dark text-white">Slider Name</th>
                  <th className="text-center bg-dark text-white">Slider Url</th>
                  <th className="text-center bg-dark text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((slider, index) => (
                  <tr key={index}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{slider.sliderImageId}</td>
                    <td className="text-center">{slider.sliderImageName}</td>
                    <td className="text-center">{slider.sliderImageUrl}</td>
                    <td className="text-center">
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                        <button onClick={() => onEdit(slider)}>
                          <i className="bi bi-pencil-square"></i>
                        </button>
                        <button onClick={() => onDelete(slider)}>
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderTable;
