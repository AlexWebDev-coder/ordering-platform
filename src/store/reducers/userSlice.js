/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.user = state.user.filter((el, index) => index !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
