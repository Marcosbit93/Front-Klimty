import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUid = createAction("SET_UID");

const reducer = createReducer(null, {
  [setUid]: (state, action) => action.payload,
});

export default reducer;
