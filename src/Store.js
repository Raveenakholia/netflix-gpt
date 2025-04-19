/** @format */

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSllice';

const UserStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default UserStore;
