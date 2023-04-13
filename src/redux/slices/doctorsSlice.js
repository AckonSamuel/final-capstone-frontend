import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../../common';

const BASE_URL_DOCTORS = `${BASE_URL}/api/v1/doctors`;

// Actions
const GET_DOCTOR = 'doctor-list/Doctor/GET_DOCTOR';

export const getDoctors = createAsyncThunk(GET_DOCTOR,
  async () => {
    const response = await axios.get(BASE_URL_DOCTORS);
    return response.data;
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
  },
});

export default doctorsSlice.reducer;
