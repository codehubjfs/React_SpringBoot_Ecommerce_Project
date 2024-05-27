import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { EditSliderModal } from './EditSlider';
import { DeleteSliderModal } from './DeleteSlider';
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

  // const handleEdit = (slider) => {
  //   setSelectedSlider(slider);
  //   setShowEditModal(true);
  // };

  // const handleDelete = (slider) => {
  //   setSelectedSlider(slider);
  //   setShowDeleteModal(true);
  // };

  const handleEditModalClose = () => setShowEditModal(false);

  const handleDeleteModalClose = () => setShowDeleteModal(false);

  const handleEditSubmit = (name, image) => {

  };

  const handleDeleteConfirm = () => {
  };

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
                      <div>
                        <i className="fas fa-edit text-primary" onClick={() => onEdit(slider)}></i>
                        <i className="fas fa-trash-alt ms-4 text-danger" onClick={() => onDelete(slider)}></i>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <EditSliderModal
        show={showEditModal}
        handleClose={handleEditModalClose}
        handleSubmit={handleEditSubmit}
        slider={selectedSlider}
      /> */}
      {/* <DeleteSliderModal
        show={showDeleteModal}
        handleClose={handleDeleteModalClose}
        handleDelete={handleDeleteConfirm}
        sliderId={selectedSlider ? selectedSlider.id : null}
      /> */}
    </div>
  );
};

export default SliderTable;