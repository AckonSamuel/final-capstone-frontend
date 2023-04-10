/* eslint-disable no-underscore-dangle */

import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import userLoginSlice from './slices/loginSlice';
import userLogoutSlice from './slices/logoutSlice';
import userRegisterSlice from './slices/registerSlice';
import doctorsSlice from './slices/doctorsSlice';

const MyMiddlewares = [logger, thunk];

const store = configureStore({
  reducer: {
    userLogin: userLoginSlice.reducer,
    userLogout: userLogoutSlice.reducer,
    userRegister: userRegisterSlice.reducer,
    doctors: doctorsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(MyMiddlewares),
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
