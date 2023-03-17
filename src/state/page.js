import { createAction, createReducer } from "@reduxjs/toolkit";

export const setPage = createAction("SET_PAGE");

const reducer = createReducer(1, {
  [setPage]: (state, action) => action.payload,
});

export default reducer;