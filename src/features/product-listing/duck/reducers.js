import { LOAD } from "./types";

const initialState = [];
const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD:
      return {
        state: payload
      };

    default:
      return state;
  }
};

export default productsReducer;
