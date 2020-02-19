import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../cart/duck/actions";

const RemoveButton = ({ cart, cartItem, removeFromCart }) => {
  return <button onClick={() => removeFromCart(cart, cartItem)}>Remove</button>;
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps, { removeFromCart })(RemoveButton);
