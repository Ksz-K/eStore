import { LOAD, LOAD_PART, TOYS_FILTER, TOYS_PRICE, TOYS_NAME } from "./types";

const initialState = [];
const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD:
      return [...payload];

    case LOAD_PART:
      return [...payload];

    case TOYS_FILTER:
      if (!payload) {
        return [...state.filter(product => product.price > 0)];
      }
      return state;

    case TOYS_PRICE:
      if (payload !== null) {
        return payload === 1
          ? [...state.sort((low, high) => low.price - high.price)]
          : [...state.sort((high, low) => low.price - high.price)];
      }
      return state;

    case TOYS_NAME:
      if (payload !== null) {
        return payload === 1
          ? [...state.sort((alfa, beta) => alfa.name.localeCompare(beta.name))]
          : [...state.sort((beta, alfa) => alfa.name.localeCompare(beta.name))];
      }
      return state;

    default:
      return state;
  }
};

export default productsReducer;
