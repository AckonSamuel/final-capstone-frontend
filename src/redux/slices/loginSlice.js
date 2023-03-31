import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../common";

const initialState = {
    user: [],
    loading: false,
    error: "",
};

export const userLogin = createAsyncThunk("users/usersLogin", async (user) => {
  const res = await axios.get(`${BASE_URL}/auth/users/login`, { user });
  res.data.accessToken && localStorage.setItem("user", JSON.stringify(res.data))
  return res.data;
});

const userLoginSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.user = {};
        state.error = "";
      });
      builder.addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.loading = false;
        state.error = "";
      });
      builder.addCase(userLogin.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
        state.user = {};
      });
    },
  });
  

export default userLoginSlice;
