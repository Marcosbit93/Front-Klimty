import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSearch = createAction("SET_SEARCH");

const reducer = createReducer("", {
  [setSearch]: (state, action) => {
    return action.payload;
  },
});

export default reducer;
