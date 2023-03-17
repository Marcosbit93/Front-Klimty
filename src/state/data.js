import { createAction, createReducer } from "@reduxjs/toolkit";

export const setData = createAction("SET_DATA");

const reducer = createReducer([], {
  [setData]: (state, action) => {
    return action.payload;
  },
});

export default reducer;
