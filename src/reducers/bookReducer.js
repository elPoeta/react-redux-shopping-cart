import * as types from "../actions/types";

const intialState = {
  books: []
};
export const bookReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.GET_BOOKS_SUCCESS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
};
