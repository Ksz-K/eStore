import React from "react";
import { connect } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeAllFromCart
} from "../cart/duck/actions";

const Cart = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.cart
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => addToCart(props.cart, item)}>+</button>
                <button onClick={() => removeFromCart(props.cart, item)}>
                  -
                </button>
              </td>
              <td>
                <button onClick={() => removeAllFromCart(props.cart, item)}>
                  Remove from cart
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(Cart);
