import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import CutText from "../cuttext";
import {
  addToCart,
  removeFromCart,
  removeAllFromCart
} from "../cart/duck/actions";

const Cart = ({
  cart,
  addToCart,
  removeFromCart,
  removeAllFromCart,
  buttonSeen
}) => {
  return (
    <table class="table-responsive">
      <thead>
        <tr>
          <th class="text-center mx-4 width-7rem">Produkt</th>
          <th class="text-center mx-4 width-7rem">Ilość</th>
          <th class="text-center mx-4 width-7rem d-none d-md-table-cell">
            Cena
          </th>
          <th class="text-center mx-4 width-7rem">Wartość</th>
          <th class="text-center mx-4 width-7rem"></th>
          <th class="text-center mx-4 width-7rem"></th>
        </tr>
      </thead>
      <tbody>
        {cart
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(item => (
            <tr key={item.id}>
              <td class="font-weight-bold">
                {item.name}
                <br />
                <small>{CutText(item.description, 50)}</small>
              </td>
              <td class="text-center">{item.quantity}</td>
              <td class="text-center d-none d-md-table-cell">
                {item.price} zł
              </td>
              <td class="text-center">
                {(item.quantity * item.price).toFixed(2)} zł
              </td>
              <td>
                <button
                  class="btn btn-success btn-sm"
                  onClick={() => addToCart(cart, item)}
                >
                  <i className="fa fa-plus-square-o"></i>
                </button>
                <button
                  class="btn btn-warning btn-sm"
                  onClick={() => removeFromCart(cart, item)}
                >
                  <i className="fa fa-minus-square-o"></i>
                </button>
              </td>
              <td>
                <button
                  class="btn btn-danger btn-sm"
                  onClick={() => removeAllFromCart(cart, item)}
                >
                  Usuń
                </button>
              </td>
            </tr>
          ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={6} class="py-2"></td>
        </tr>
        <tr>
          <td colSpan={4} class="text-right">
            {buttonSeen ? (
              <button className="btn btn-primary btn-lg">
                <NavLink
                  to="/checkout"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  &nbsp;Do kasy&nbsp;
                  <span className="badge badge-success">
                    {cart
                      .reduce((acc, item) => {
                        return acc + item.quantity * item.price;
                      }, 0)
                      .toFixed(2)}
                    &nbsp;zł
                  </span>{" "}
                  &nbsp;
                </NavLink>
              </button>
            ) : (
              <span className="badge badge-primary mr-4">
                {cart
                  .reduce((acc, item) => {
                    return acc + item.quantity * item.price;
                  }, 0)
                  .toFixed(2)}
                &nbsp;zł&nbsp;
              </span>
            )}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

Cart.defaultProps = {
  buttonSeen: true
};
const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps, {
  addToCart,
  removeFromCart,
  removeAllFromCart
})(Cart);
