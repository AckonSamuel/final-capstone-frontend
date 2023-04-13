import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appointments: [],
  status: {},
};

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    getAppointments(state, action) {
      return {
        ...state,
        appointments: action.payload,
      };
    },
    updateStatus(state, action) {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
});

export const appointmentsActions = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
