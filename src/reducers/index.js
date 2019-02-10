import { combineReducers } from "redux";
import { bookReducer } from "./bookReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
  books: bookReducer,
  cart: cartReducer
});

export default rootReducer;
