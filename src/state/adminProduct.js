import { createAction, createReducer } from "@reduxjs/toolkit";

export const setBooleano = createAction("SET_BOOLEANO");

const reducer = createReducer(true, {
  [setBooleano]: (state, action) => !state,
});

export default reducer;
