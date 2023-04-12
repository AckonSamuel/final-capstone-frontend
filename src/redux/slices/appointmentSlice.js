import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointments: [],
  appointment: {},
};

const appointmentsSlice = createSlice({
  name: "greetings",
  initialState,
  reducers: {
    getAppointments(state, action) {
      return {
        ...state,
        appointments: action.payload,
      };
    },
    createAppointment(state, action) {
      return {
        ...state,
        appointment: action.payload,
      };
    },
  },
});

export const appointmentsActions = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
