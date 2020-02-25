import { SEARCH_VISIBLE, SEARCH_HIDDEN } from "./types";

const initialState = { searchSeen: false };

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

    default:
      return state;
  }
};

export default navReducer;
