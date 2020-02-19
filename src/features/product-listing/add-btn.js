import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../cart/duck/actions";

const AddButton = ({ addToCart, cart, cartItem }) => {
  return (
    <button onClick={() => addToCart(cart, cartItem)}>
      Add to cart ({(cartItem && cartItem.quantity) || 0})
    </button>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});
export default connect(mapStateToProps, { addToCart })(AddButton);
