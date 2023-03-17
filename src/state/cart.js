import { createAction, createReducer } from "@reduxjs/toolkit";

export const setAxiosCart = createAction("SET_AXIOS_CART");
export const setCart = createAction("SET_CART");
export const dropCart = createAction("DROP_CART");
export const addQuantity = createAction("ADD_QUANTITY");
export const minusQuantity = createAction("MINUS_QUANTITY");


const reducer = createReducer([], {
  [setAxiosCart]: (state, action) => action.payload,
  [setCart]: (state, action) => {
    const result = state.find((item) => {
      return item.product.id === action.payload.product.id;
    });
    if (result === undefined) return [...state, action.payload];
    else return state;
  },
  [dropCart]: (state, action) => {
    const pay = action.payload;
    return state.filter((el) => el.product.name !== pay.product.name);
  },
  [addQuantity]: (state, action) => {
    const newState = state.filter(
      (item) => item.product.id !== action.payload.product.id
    );
    const newQuantity = action.payload.quantity + 1;
    return [
      ...newState,
      { product: action.payload.product, quantity: newQuantity },
    ];
  },
  [minusQuantity]: (state, action) => {
    const newState = state.filter(
      (item) => item.product.id !== action.payload.product.id
    );
    const newQuantity = action.payload.quantity - 1;
    if (newQuantity)
      return [
        ...newState,
        { product: action.payload.product, quantity: newQuantity },
      ];
    else return newState;
  },
});

export default reducer;
