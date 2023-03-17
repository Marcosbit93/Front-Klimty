import { createAction, createReducer } from "@reduxjs/toolkit";

export const setMenu = createAction("SET_MENU");

const reducer = createReducer("general", {
  [setMenu]: (state, action) => {
    return action.payload;
  },
});

export default reducer;
