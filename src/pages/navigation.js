import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ cart }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink to="/" className="navbar-brand">
      <img src="https://kszk.vot.pl/kszk.png" alt="logo" />
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <NavLink to="/" className="nav-link">
            Start
            <span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/termsofuse" className="nav-link">
            Regulamin
          </NavLink>
        </li>
        <li className="nav-item d-lg-none">
          <NavLink className="nav-link" to="/cart">
            Koszyk (
            {cart.reduce((acc, item) => {
              return acc + item.quantity;
            }, 0)}
            )
          </NavLink>
        </li>
        <li className="nav-item d-none d-lg-block shopping-item">
          <NavLink to="/cart">
            &nbsp;Koszyk
            <i className="fa fa-shopping-cart"></i>
            {""}
            <span className="product-count">
              {cart.reduce((acc, item) => {
                return acc + item.quantity;
              }, 0)}
            </span>
          </NavLink>
        </li>
        <li className="nav-item d-lg-none">
          <NavLink className="nav-link" to="/checkout">
            Do kasy
          </NavLink>
        </li>
        <li className="nav-item d-none d-lg-block shopping-item amount">
          <NavLink to="/checkout">
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
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
);

export default Navigation;
//  <nav>
//     <ul classNameName="top-menu">
//       <li>
//         <NavLink to="/">Home</NavLink>
//       </li>
//       <li>

//       </li>
//       <li>
//         <NavLink to="/checkout">Check out</NavLink>
//       </li>
//     </ul>
//   </nav>
