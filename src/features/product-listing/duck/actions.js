import { LOAD } from "./types";
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
