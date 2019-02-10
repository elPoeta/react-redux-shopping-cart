import * as types from "./types";

export const getCart = () => dispatch => dispatch({ type: types.GET_CART });

export const addBookCart = book => dispatch =>
  dispatch({ type: types.ADD_BOOK_CART, payload: book });

export const updateCart = (id, operator) => dispatch =>
  dispatch({ type: types.UPDATE_CART, payload: { id, operator } });

export const removeBookCart = (id) => dispatch =>
  dispatch({ type: types.REMOVE_BOOK_CART, payload: id });  
