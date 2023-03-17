import { createAction, createReducer } from "@reduxjs/toolkit";

export const setReviewRound = createAction("SET_REVIEW_ROUND");


const reducer = createReducer(
  {
    reviewRound: 0,
  },
  {
    [setReviewRound]: (state, action) => {
      state.reviewRound = action.payload
    }

  }
);

export default reducer;
