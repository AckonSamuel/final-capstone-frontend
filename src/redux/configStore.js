import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import userLoginSlice from './slices/loginSlice';
import userLogoutSlice from './slices/logoutSlice';
import userRegisterSlice from './slices/registerSlice';

const MyMiddlewares = [logger, thunk];

const store = configureStore({
    reducer: {
        userLogin: userLoginSlice.reducer,
        userLogout: userLogoutSlice.reducer,
        userRegister: userRegisterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(MyMiddlewares),
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;