import {
  SEARCH_VISIBLE,
  SEARCH_HIDDEN,
  CART_VISIBLE,
  CART_HIDDEN
} from "./types";

export const searchVisible = () => dispatch => {
  dispatch({
    type: SEARCH_VISIBLE
  });
};

export const searchHidden = () => dispatch => {
  dispatch({
    type: SEARCH_HIDDEN
  });
};

export const cartVisible = () => dispatch => {
  dispatch({
    type: CART_VISIBLE
  });
};

export const cartHidden = () => dispatch => {
  dispatch({
    type: CART_HIDDEN
  });
};
