import { SEARCH_VISIBLE, SEARCH_HIDDEN } from "./types";

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
