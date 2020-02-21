import React from "react";
import { NavLink } from "react-router-dom";

const Footer = ({ cart }) => (
  <div className="bg-dark">
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
        <li className="nav-item">
          <NavLink to="/termsofuse" className="nav-link">
            Regulamin
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link">
            Kontakt
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/cart">
            Koszyk
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/checkout">
            Do kasy
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;
