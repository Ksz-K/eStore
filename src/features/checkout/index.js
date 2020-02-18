import React from "react";
import { connect } from "react-redux";
import Cart from "../cart";
import CheckoutForm from "./form";
import axios from "axios";

const submitOrder = async (values, cart) => {
  const { email, name } = values.order;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const arrayCart = cart.map(item => ({
      product_id: item.id,
      qty: item.quantity
    }));
    const formData = {
      name,
      email,
      theCart: arrayCart
    };

    const res = await axios.post(
      "https://kszk-api.herokuapp.com/api/products",
      formData,
      config
    );
    document.location.href = `/orders/${res.data._id}`;
  } catch (err) {
    console.log(err);
  }
};

const Checkout = props => {
  const { cart } = props;

  return (
    <div>
      <div style={{ border: "1px solid #000" }}>
        <Cart />
      </div>
      <CheckoutForm onSubmit={values => submitOrder(values, cart)} />
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
