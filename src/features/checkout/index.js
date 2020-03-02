import React from "react";
import { connect } from "react-redux";
import Cart from "../cart";
import CheckoutForm from "./form";
import { addOrder } from "../order/duck/actions";
import axios from "axios";

const submitOrder = async (values, cart, addOrder) => {
  const { email, name } = values;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const arrayCart = cart.map(item => ({
      id: item.id,
      quantity: item.quantity,
      name: item.name,
      description: item.description,
      price: item.price
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
    addOrder(res.data._id);
  } catch (err) {
    console.log(err);
  }
};

const Checkout = ({ addOrder, cart }) => {
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-xl-8 border">
        <Cart buttonSeen={false} />
      </div>

      <div className="col-12 col-xl-4 border bg-bluesnow">
        <CheckoutForm
          onSubmit={values => submitOrder(values, cart, addOrder)}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps, { addOrder })(Checkout);
