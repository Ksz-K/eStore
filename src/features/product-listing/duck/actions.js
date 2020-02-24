import { LOAD, LOAD_PART } from "./types";
import axios from "axios";

export const loadProducts = () => async dispatch => {
  try {
    const res = await axios.get("https://kszk-api.herokuapp.com/api/estore");
    dispatch({
      type: LOAD,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const loadSomeProducts = (
  startPosition = 0,
  howMany = 3
) => async dispatch => {
  try {
    const res = await axios.get(
      `https://kszk-api.herokuapp.com/api/estore/${startPosition}/${howMany}`
    );
    dispatch({
      type: LOAD_PART,
      payload: res.data.productsOnShelf
    });
  } catch (err) {
    console.log(err);
  }
};
