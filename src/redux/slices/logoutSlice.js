/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../../common';

const initialState = {
  user: {},
  error: '',
  loading: false,
};

export const userLogout = createAsyncThunk('user/userLogout', async () => {
  const token = JSON.parse(localStorage.getItem('user')).accessToken;
  const res = await axios.delete(`${BASE_URL}/auth/users/logout`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (res.data.status === 200) { localStorage.removeItem('user'); }

  return res;
});

const userLogoutSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogout.pending, (state) => {
      state.loading = true;
      state.user = {};
      state.error = '';
    });
    builder.addCase(userLogout.fulfilled, (state, action) => {
      state.user = action.payload.data;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(userLogout.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.user = {};
    });
  },
});

export default userLogoutSlice;
