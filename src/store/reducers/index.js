/** @format */

import { addUser, deleteUser } from "./userSlice";
import {
  addMenuForUser,
  addProductInMenu,
  deleteMenuUser,
  deleteItemFood,
} from "./menuSlice";

export const reducers = {
  addUser,
  deleteUser,
  addMenuForUser,
  addProductInMenu,
  deleteItemFood,
  deleteMenuUser,
};
