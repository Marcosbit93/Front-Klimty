import { createAction, createReducer } from "@reduxjs/toolkit";

export const setCheckout = createAction("SET_CHECKOUT");
export const resetCheckout = createAction("RESET_CHECKOUT");


const initialState = {
  name: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  zip: "",
  country: "",
  region: "",
};

const reducer = createReducer(initialState, {
  [setCheckout]: (state, action) => {
    return { ...state, [action.payload.name]: action.payload.value };
  },
  [resetCheckout]: (state, action) => action.payload

});

export default reducer;
