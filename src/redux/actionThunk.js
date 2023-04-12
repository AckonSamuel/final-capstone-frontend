import axios from "axios";
import { appointmentsActions } from "./slices/appointmentSlice";
import BASE_URL from "../../common";

const Appointment_Url = `${BASE_URL}/api/v1/appointments`;
export const getAppointments = () => async (dispatch) => {
  const sendRequest = async () => {
    const response = await axios.get(Appointment_Url);
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
    const response = await axios.post(Appointment_Url, dataObject);
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

export const cancelAppointment = (id) => async (dispatch) => {
  const sendRequest = async () => {
    const response = await axios.delete(`${Appointment_Url}/${id}`);
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
