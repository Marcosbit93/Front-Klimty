import { createAction, createReducer } from "@reduxjs/toolkit";

export const setPhoto = createAction("SET_PHOTO");

const reducer = createReducer("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png", {
  [setPhoto]: (state, action) => action.payload,
});

export default reducer;
