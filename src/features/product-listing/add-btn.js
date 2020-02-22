import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../cart/duck/actions";

const AddButton = ({ cart, product, addToCart, cartItem }) => {
  return (
    <div onClick={() => addToCart(cart, product)}>
      Do Koszyka {cartItem ? <span>({cartItem.quantity})</span> : ""}
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});
export default connect(mapStateToProps, { addToCart })(AddButton);
