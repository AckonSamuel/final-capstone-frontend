import axios from 'axios';
import { appointmentsActions } from './slices/appointmentSlice';
import BASE_URL from '../common';

const APPOINTMENT_URL = `${BASE_URL}/api/v1/appointments`;

const token = JSON.parse(localStorage.getItem('user'));

export const getAppointments = () => async (dispatch) => {
  const sendRequest = async () => {
    const response = await axios.get(APPOINTMENT_URL, {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });
    const data = await response;
    const result = data.data;
    dispatch(appointmentsActions.getAppointments(result));
  };
  try {
    await sendRequest();
  } catch (error) {
    throw new Error(error);
  }
};

export const makeAppointment = (dataObject) => async (dispatch) => {
  const sendRequest = async () => {
    const response = await axios.post(APPOINTMENT_URL, dataObject, {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });
    const data = await response;
    const result = data.data;
    if (result) {
      dispatch(appointmentsActions.updateStatus(result));
      dispatch(getAppointments());
    }
  };
  try {
    await sendRequest();
  } catch (error) {
    throw new Error(error);
  }
};

export const cancelAppointment = (id) => async (dispatch) => {
  const sendRequest = async () => {
    const response = await axios.delete(`${APPOINTMENT_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });
    const data = await response;
    const result = data.data;
    if (result) {
      dispatch(getAppointments());
    }
  };
  try {
    await sendRequest();
  } catch (error) {
    throw new Error(error);
  }
};
