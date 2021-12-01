/** @format */

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { allReducers } from "../store/event/allReducer";

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allReducers, dispatch);
};
