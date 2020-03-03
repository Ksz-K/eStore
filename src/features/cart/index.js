import React, { Fragment } from "react";
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
  cartFromOrder,
  addToCart,
  removeFromCart,
  removeAllFromCart,
  buttonSeen,
  buttonSeen2
}) => {
  if (cartFromOrder !== undefined) {
    cart = [...cartFromOrder];
  }
  return (
    <table className="table-responsive">
      <thead>
        <tr>
          <th className="text-center mx-4 width-7rem">Produkt</th>
          <th className="text-center mx-4 width-7rem">Ilość</th>
          <th className="text-center mx-4 width-7rem d-none d-md-table-cell">
            Cena
          </th>
          <th className="text-center mx-4 width-7rem">Wartość</th>
          <th className="text-center mx-4 width-7rem"></th>
          <th className="text-center mx-4 width-7rem"></th>
        </tr>
      </thead>
      <tbody>
        {cart
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(item => (
            <tr key={item.name}>
              <td className="font-weight-bold">
                {item.name}
                <br />
                {buttonSeen2 ? (
                  <small>{CutText(item.description, 50)}</small>
                ) : (
                  ""
                )}
              </td>
              <td className="text-center">{item.quantity}</td>
              <td className="text-center d-none d-md-table-cell">
                {item.price} zł
              </td>
              <td className="text-center">
                {(item.quantity * item.price).toFixed(2)} zł
              </td>
              {buttonSeen2 ? (
                <Fragment>
                  <td>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => addToCart(cart, item)}
                    >
                      <i className="fa fa-plus-square-o"></i>
                    </button>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => removeFromCart(cart, item)}
                    >
                      <i className="fa fa-minus-square-o"></i>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeAllFromCart(cart, item)}
                    >
                      Usuń
                    </button>{" "}
                  </td>
                </Fragment>
              ) : (
                <Fragment>
                  <td></td>
                  <td></td>
                </Fragment>
              )}
            </tr>
          ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={6} className="py-2"></td>
        </tr>
        <tr>
          <td colSpan={4} className="text-right">
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
  buttonSeen: true,
  buttonSeen2: true
};
const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps, {
  addToCart,
  removeFromCart,
  removeAllFromCart
})(Cart);
