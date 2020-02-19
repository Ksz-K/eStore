import { ADD, REMOVE, REMOVE_ALL } from "./types";

const cartWithoutItem = (cart, item) =>
  cart.filter(cartItem => cartItem.id !== item.id);

const itemInCart = (cart, item) =>
  cart.filter(cartItem => cartItem.id === item.id)[0];

export const addToCart = (cart, item) => dispatch => {
  const cartItem = itemInCart(cart, item);
  return cartItem === undefined
    ? [...cartWithoutItem(cart, item), { ...item, quantity: 1 }]
    : [
        ...cartWithoutItem(cart, item),
        { ...cartItem, quantity: cartItem.quantity + 1 }
      ];
};

export const removeFromCart = (cart, item) => {
  return item.quantity === 1
    ? [...cartWithoutItem(cart, item)]
    : [
        ...cartWithoutItem(cart, item),
        { ...item, quantity: item.quantity - 1 }
      ];
};

export const removeAllFromCart = (cart, item) => {
  return [...cartWithoutItem(cart, item)];
};
