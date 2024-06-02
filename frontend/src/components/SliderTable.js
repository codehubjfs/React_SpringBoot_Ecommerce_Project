import React, { useEffect, useState } from 'react';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import $ from 'jquery';

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

  const handleEditModalClose = () => setShowEditModal(false);
  const handleDeleteModalClose = () => setShowDeleteModal(false);
  const handleEditSubmit = (name, image) => {};
  const handleDeleteConfirm = () => {};

  return (
    <div className="container-fluid mt-5">
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
                        <button className='btn' onClick={() => onEdit(slider)}>
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className='btn' onClick={() => onDelete(slider)}>
                          <i className="fas fa-trash-alt"></i>
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
