import { LOAD, LOAD_PART } from "./types";

const initialState = [];
const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD:
      return [...payload];

    case LOAD_PART:
      return [...payload];

    default:
      return state;
  }
};

export default productsReducer;
