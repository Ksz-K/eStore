import { ADD, REMOVE, REMOVE_ALL, CLEAR } from "./types";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD:
      return [...payload];

    case REMOVE:
      return [...payload];

    case REMOVE_ALL:
      return [...payload];

    case CLEAR:
      return [];

    default:
      return state;
  }
};

export default cartReducer;
