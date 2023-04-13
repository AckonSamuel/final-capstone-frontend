import React, { useState, useEffect } from 'react';
import './deletedoctor.css';
import axios from 'axios';

const DeleteDoctor = () => {
  const [doctors, setDoctors] = useState({});

  useEffect(() => {
    const setDoctorsFunction = async () => {
      const response = await axios.get('http://localhost:3000/api/v1/doctors');
      setDoctors(response);
    };
    setDoctorsFunction();
  }, []);

  console.log(doctors);
  return (
    <div className="delete-doctor-page">
      <h3>Delete A Doctor</h3>
    </div>
  );
};

export default DeleteDoctor;
