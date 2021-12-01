/** @format */

import { configureStore } from "@reduxjs/toolkit";

import useReducer from "./reducers/userSlice";
import menuReducer from "./reducers/menuSlice";

export const store = configureStore({
  reducer: {
    user: useReducer,
    menu: menuReducer,
  },
});
