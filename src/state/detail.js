import { createAction, createReducer } from "@reduxjs/toolkit";

export const setDetail = createAction("SET_DETAIL");

const reducer = createReducer(
  {},
  {
    [setDetail]: (state, action) => {
      if (action.payload.id === state.id) return {};
      else return action.payload;
    },
  }
);

export default reducer;
