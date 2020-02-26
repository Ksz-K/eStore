import { LOAD, LOAD_PREV, TOYS_FILTER, TOYS_PRICE, TOYS_NAME } from "./types";

const initialState = [];
const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD:
      return [...payload];

    case LOAD_PREV:
      return [...payload];

    case TOYS_FILTER:
      if (payload !== "") {
        const name = state.filter(product =>
          product.name.toLowerCase().includes(payload.toLowerCase())
        );
        const description = state.filter(product =>
          product.description.toLowerCase().includes(payload.toLowerCase())
        );
        const keywords = state.filter(product =>
          product.keywords
            .join()
            .toLowerCase()
            .includes(payload.toLowerCase())
        );
        const filtered = [...name, ...description, ...keywords];
        return filtered.filter((obj, pos, arr) => {
          return arr.map(mapObj => mapObj.id).indexOf(obj.id) === pos;
        });
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
