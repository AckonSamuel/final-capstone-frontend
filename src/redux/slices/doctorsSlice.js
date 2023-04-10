import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../../common';

const BASE_URL_DOCTORS = `${BASE_URL}/doctors`;
// Actions
const ADD_DOCTOR = 'doctor-list/Doctor/ADD_DOCTOR';
const REMOVE_DOCTOR = 'doctor-list/Doctor/REMOVE_DOCTOR';
const GET_DOCTOR = 'doctor-list/Doctor/GET_DOCTOR';
// const UPDATE_DOCTOR = 'doctor-list/Doctor/UPDATE_DOCTOR';

// delete book function
const deleteDoctor = (state, doctorID) => state.filter((doctor) => doctor.id !== doctorID.payload);

export const addDoctor = createAsyncThunk(
  ADD_DOCTOR,
  async (payload) => {
    const {
      // eslint-disable-next-line camelcase
      id, first_name, last_name, major, profile_picture, fees,
    } = payload;
    await axios.post(BASE_URL_DOCTORS, {
      id, first_name, last_name, major, profile_picture, fees,
    });
    return payload;
  },
);

export const removeDoctor = createAsyncThunk(REMOVE_DOCTOR,
  async (id) => {
    await axios.delete(`${BASE_URL_DOCTORS}/${id}`);
    return id;
  });

export const getDoctors = createAsyncThunk(GET_DOCTOR,
  async () => {
    const response = await axios.get(BASE_URL_DOCTORS);
    return response;
  });

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState: {
    doctors: [],
    status: 'idle',
  },
  extraReducers: (builder) => {
    builder.addCase(getDoctors.fulfilled, (state, action) => {
      const states = state;
      states.status = 'success';
      states.doctors = action.payload;
    });
    builder.addCase(removeDoctor.fulfilled, (state, action) => {
      const states = state;
      states.status = 'success';
      states.doctors = deleteDoctor(states.doctors, action);
    });
    builder.addCase(addDoctor.fulfilled, (state, action) => {
      const states = state;
      states.status = 'success';
      states.doctors = [
        ...states.doctors,
        action.payload,
      ];
    });
  },
});

export default doctorsSlice.reducer;