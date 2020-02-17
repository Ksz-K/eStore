import React from "react";
import { connect } from "react-redux";

const Checkout = props => {
  return <div></div>;
};

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
