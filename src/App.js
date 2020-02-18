import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import Router from "./Router";
import { connect } from "react-redux";

const Navigation = ({ cart }) => (
  <nav>
    <ul className="top-menu">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/cart">
          Cart (
          {cart.reduce((acc, item) => {
            return acc + item.quantity;
          }, 0)}
          )
        </NavLink>
      </li>
      <li>
        <NavLink to="/checkout">Check out</NavLink>
      </li>
    </ul>
  </nav>
);

const App = ({ cart }) => {
  return (
    <div className="page-container">
      <Navigation cart={cart} />
      <Router />
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});
export default withRouter(connect(mapStateToProps)(App));
