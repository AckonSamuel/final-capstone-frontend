import React, { useState, useEffect } from 'react';
import './deletedoctor.css';
import axios from 'axios';

const DeleteDoctor = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const setDoctorsFunction = async () => {
      const response = await axios.get('http://localhost:3000/api/v1/doctors');
      setDoctors(response.data);
    };
    setDoctorsFunction();
  }, []);

  const deleteDoctor = async (id) => {
    const response = await axios.delete(`http://localhost:3000/doctors/${id}`);
    console.log(response);
  };

  return (
    <div className="delete-doctor-page">
      <h3>Delete A Doctor</h3>
      <ul className="each-doctor-ul">
        {doctors
        && doctors.map((doctor) => (
          <li key={doctor.id}>
            <img src={doctor.profile_picture} alt={doctor.profile_picture} />
            <span>
              Dr
              {' '}
              {doctor.first_name}
              {' '}
              {doctor.last_name}
            </span>
            <span>
              Major:
              {' '}
              {doctor.major}
            </span>
            <span>
              Fees:
              {' '}
              {doctor.fees}
              $
            </span>
            <button type="submit" onClick={() => deleteDoctor(doctor.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteDoctor;
