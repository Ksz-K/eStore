import { ADD_ORDER } from "./types";

const initialState = [];

const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ORDER:
      return [payload, ...state];

    default:
      return state;
  }
};

export default orderReducer;
