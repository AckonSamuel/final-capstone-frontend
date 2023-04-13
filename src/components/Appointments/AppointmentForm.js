import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import BASE_URL from '../../common';
import { makeAppointment } from '../../redux/actionThunk';
import classes from './AppointmentForm.module.css';

const AppointmentForm = () => {
  const dispatch = useDispatch();
  const DOCTOR_URL = `${BASE_URL}/api/v1/doctors`;
  const [apTimes, setApTimes] = useState([]);
  const [docApTime, setDocApTime] = useState({});
  const [description, setDescription] = useState({});
  const doctors = useSelector((state) => state.doctors.doctors);
  const status = useSelector((state) => state.appointments.status);

  const getDocApTimes = async (id) => {
    const response = await axios.get(`${DOCTOR_URL}/${id}`);
    const data = await response;
    const result = data.data;

    return result;
  };

  useEffect(() => {
    const { id } = doctors[0];
    const sendRequest = async () => {
      const res = await getDocApTimes(id);
      setApTimes(res.doctor_appointment_times);
    };
    sendRequest();
  }, [doctors, dispatch]);

  const doctorSelectHandler = (e) => {
    const sendRequest = async () => {
      const res = await getDocApTimes(e.target.value);
      setApTimes(res.doctor_appointment_times);
    };
    sendRequest();
  };

  const docTimesSelectHandler = (e) => {
    setDocApTime(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const objData = {
      description,
      doctor_appointment_time_id: docApTime,
    };
    dispatch(makeAppointment(objData));
  };

  return (
    <form className={classes.form}>
      <p>{status && status.status}</p>
      <textarea
        name="description"
        placeholder="Description"
        onChange={descriptionHandler}
      />

      <label htmlFor="doctors">
        Select a doctor:
        <select
          name="doctors"
          onChange={doctorSelectHandler}
          defaultValue={doctors[0].id}
        >
          {doctors.map((doctor) => (
            <option value={doctor.id} id={doctor.id} key={doctor.id}>
              Name:
              {`${doctor.first_name} ${doctor.last_name}`}
              , Expertise:
              {' '}
              {doctor.major}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="doctor_appointment">
        Select an appointment:
        <select name="doctor_appointment" onClick={docTimesSelectHandler}>
          {apTimes ? (
            apTimes.map((time) => {
              if (time.available) {
                return (
                  <option value={time.id} id={time.id} key={time.id}>
                    Date:
                    {' '}
                    {time.date}
                    , From:
                    {' '}
                    {time.time_from}
                    , To:
                    {' '}
                    {time.time_to}
                  </option>
                );
              }
              return '';
            })
          ) : (
            <option value="no appointment">NO value</option>
          )}
        </select>
      </label>

      <button type="submit" onClick={submitFormHandler}>
        Create Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
