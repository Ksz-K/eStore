import { LOAD, TOYS_FILTER, TOYS_PRICE, TOYS_NAME } from "./types";
import axios from "axios";

export const loadProducts = (
  startPosition = 0,
  howMany = 3
) => async dispatch => {
  try {
    const res = await axios.get(
      `https://kszk-api.herokuapp.com/api/estore/${startPosition}/${howMany}`
    );
    dispatch({
      type: LOAD,
      payload: res.data.productsOnShelf
    });
  } catch (err) {
    console.log(err);
  }
};

export const sortName = (direction = null) => dispatch => {
  dispatch({
    type: TOYS_NAME,
    payload: direction
  });
};

export const sortPrice = (direction = null) => dispatch => {
  dispatch({
    type: TOYS_PRICE,
    payload: direction
  });
};
export const filterText = (text = "") => dispatch => {
  dispatch({
    type: TOYS_FILTER,
    payload: text
  });
};
