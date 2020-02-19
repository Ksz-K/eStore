import { ADD, REMOVE, REMOVE_ALL } from "./types";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD:
      return addToCart(state, action.payload);

    case REMOVE:
      return removeFromCart(state, action.payload);

    case REMOVE_ALL:
      return removeAllFromCart(state, action.payload);

    default:
      return state;
  }
};

export default cartReducer;
