import React from 'react';
import './adddoctor.css';

const AddDoctor = () => {
  const doctor = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="add-doctor-page">
      <h3>Add A New Doctor</h3>
    </div>
  );
};

export default AddDoctor;
