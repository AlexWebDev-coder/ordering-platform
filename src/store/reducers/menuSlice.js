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
    deleteMenuUser: (state, action) => {
      state.menu.splice(action.payload.id, 1);
    },
    addProductInMenu: (state, action) => {
      state.menu.forEach((element) => {
        if (element.id === action.payload.id) {
          element.food.push(action.payload.food);
        }
      });
    },
    deleteItemFood: (state, action) => {
      state.menu.forEach((element) => {
        // if (action.payload) {
        //   element.food.splice(action.payload.id, 1);
        // }
      });
    },
  },
});

export const {
  addMenuForUser,
  addProductInMenu,
  deleteMenuUser,
  deleteItemFood,
} = menuSlice.actions;
export default menuSlice.reducer;
