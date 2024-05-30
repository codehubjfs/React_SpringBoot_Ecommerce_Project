import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SliderTable from '../components/SliderTable';
import { SliderModal } from '../components/SliderModal';
import { EditSliderModal } from '../components/EditSlider';
import { DeleteSliderModal } from '../components/DeleteSlider';
import { getSliderImagesFromJson, updateSliderImageInJson, deleteSliderImageInJson } from '../slices/SliderSlice';
import DescriptionCard from '../components/DescriptionCard ';

const HomeSlider = () => {
  const dispatch = useDispatch();
  const sliderImages = useSelector(state => state.sliderImages.sliderImagesList);
  console.log(sliderImages);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedSlider, setSelectedSlider] = useState(null);

  useEffect(() => {
    dispatch(getSliderImagesFromJson());
  }, [dispatch]);

  const handleEditSlider = (slider) => {
    console.log(slider,"home slider")
    setSelectedSlider(slider);
    setShowEditModal(true);
  };

  const handleDeleteSlider = (slider) => {
    setSelectedSlider(slider);
    setShowDeleteModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedSlider(null);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedSlider(null);
  };

  const handleDeleteConfirmed = () => {
    dispatch(deleteSliderImageInJson(selectedSlider.sliderImageId))
      .then(() => {
        console.log('Slider deleted successfully');
        handleCloseDeleteModal();
      })
      .catch((error) => {
        console.error('Failed to delete slider:', error);
      });
  };

  const handleSubmit = (formData) => {
    console.log(formData,"hiii");
    dispatch(updateSliderImageInJson(formData))
      .then(() => {
        console.log('Record updated successfully');
        handleCloseEditModal();
      })
      .catch((error) => {
        console.error('Failed to update record:', error);
      });
  };

  return (
    <div className="col-md-12 ml-sm-auto col-lg-12 px-4">
                <br></br>
                <br></br>
      <h1 className='text-center mt-2'>Home Slider Images</h1>
      <hr />
      <DescriptionCard title="Explore Dynamic Home Slider Images">
        <p>Enhance your homepage with eye-catching slider images. Elevate user engagement and showcase your products or promotions effectively.</p>
      </DescriptionCard>
      <div className="table-responsive">
        <SliderModal />
        <SliderTable data={sliderImages} onEdit={handleEditSlider} onDelete={handleDeleteSlider} />
        <EditSliderModal show={showEditModal} handleClose={handleCloseEditModal} handleSubmit={handleSubmit} slider={selectedSlider} />
        <DeleteSliderModal offerName={selectedSlider ? selectedSlider.name : ''} show={showDeleteModal} handleClose={handleCloseDeleteModal} handleDelete={handleDeleteConfirmed} />
      </div>
    </div>
  );
};

export default HomeSlider;
