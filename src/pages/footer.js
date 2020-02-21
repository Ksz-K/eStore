import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <nav className="fixed-bottom navbar navbar-expand-lg navbar-light bg-green">
    <NavLink to="/" className="navbar-brand">
      <img src="https://kszk.vot.pl/kszk.png" alt="logo" />
    </NavLink>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item onfoot">
          <NavLink to="/termsofuse" className="nav-link">
            Regulamin
          </NavLink>
        </li>
        <li className="nav-item onfoot">
          <NavLink to="/contact" className="nav-link">
            Kontakt
          </NavLink>
        </li>
        <li className="nav-item onfoot">
          <NavLink className="nav-link" to="/cart">
            Koszyk
          </NavLink>
        </li>
        <li className="nav-item onfoot">
          <NavLink className="nav-link" to="/checkout">
            Do kasy
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Footer;
