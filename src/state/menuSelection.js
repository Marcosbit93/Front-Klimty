import { createAction, createReducer } from "@reduxjs/toolkit";

export const setMenuSelection = createAction("SET_MENU_SELECTION");

const reducer = createReducer("", {
  [setMenuSelection]: (state, action) => {
    return action.payload;
  },
});

export default reducer;
