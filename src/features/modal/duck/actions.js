import { TOY2MODAL } from "./types";

export const toy2modal = toy => dispatch => {
  dispatch({
    type: TOY2MODAL,
    payload: toy
  });
};
