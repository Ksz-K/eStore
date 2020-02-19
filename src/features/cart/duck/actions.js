import { ADD, REMOVE, REMOVE_ALL } from "./types";

const cartWithoutItem = (cart, item) =>
  cart.filter(cartItem => cartItem.id !== item.id);

const itemInCart = (cart, item) =>
  cart.filter(cartItem => cartItem.id === item.id)[0];

export const addToCart = (cart, item) => dispatch => {
  const cartItem = itemInCart(cart, item);
  console.log(cart);
  let payload;
  if (cartItem === undefined) {
    payload = [...cartWithoutItem(cart, item), { ...item, quantity: 1 }];
  } else {
    payload = [
      ...cartWithoutItem(cart, item),
      { ...cartItem, quantity: cartItem.quantity + 1 }
    ];
  }

  dispatch({
    type: ADD,
    payload
  });
};

export const removeFromCart = (cart, item) => dispatch => {
  let payload;
  if (item.quantity === 1) {
    payload = [...cartWithoutItem(cart, item)];
  } else {
    payload = [
      ...cartWithoutItem(cart, item),
      { ...item, quantity: item.quantity - 1 }
    ];
  }
  dispatch({
    type: REMOVE,
    payload
  });
};

export const removeAllFromCart = (cart, item) => dispatch => {
  const payload = [...cartWithoutItem(cart, item)];
  dispatch({
    type: REMOVE_ALL,
    payload
  });
};