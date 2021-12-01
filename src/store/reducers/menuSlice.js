/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: [],
};

export const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {
    addMenuForUser: (state, action) => {
      state.menu.push(action.payload);
    },

    addProductInMenu: (state, action) => {
      state.menu = state.menu.food.push(action.payload);
    },
  },
});

export const { addMenuForUser, addProductInMenu } = menuSlice.actions;
export default menuSlice.reducer;
