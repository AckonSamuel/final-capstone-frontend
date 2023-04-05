/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../../common';

const initialState = {
  user: {},
  error: '',
  loading: false,
};

export const userSignUp = createAsyncThunk('user/userSignUP', async (user) => {
  const res = await axios.post(`${BASE_URL}/auth/users/signup`, { user });
  if (res.data.accessToken) { localStorage.setItem('user', JSON.stringify(res.data)); }
  return res.data;
});

const userRegisterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userSignUp.pending, (state) => {
      state.loading = true;
      state.user = {};
      state.error = '';
    });
    builder.addCase(userSignUp.fulfilled, (state, action) => {
      state.user = action.payload.data;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(userSignUp.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.user = {};
    });
  },
});

export default userRegisterSlice;
