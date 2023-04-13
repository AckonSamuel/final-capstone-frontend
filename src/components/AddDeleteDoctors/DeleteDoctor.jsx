import React from 'react';
import './deletedoctor.css';

const DeleteDoctor = () => {
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
    <div className="delete-doctor-page">
      <h3>Delete A Doctor</h3>
    </div>
  );
};

export default DeleteDoctor;
