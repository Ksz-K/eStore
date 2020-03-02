import {
  SEARCH_VISIBLE,
  SEARCH_HIDDEN,
  CART_VISIBLE,
  CART_HIDDEN
} from "./types";

const initialState = { searchSeen: false, cartSeen: false };

const navReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_VISIBLE:
      return {
        ...state,
        searchSeen: true
      };

    case SEARCH_HIDDEN:
      return {
        ...state,
        searchSeen: false
      };
    case CART_VISIBLE:
      return {
        ...state,
        cartSeen: true
      };

    case CART_HIDDEN:
      return {
        ...state,
        cartSeen: false
      };

    default:
      return state;
  }
};

export default navReducer;
