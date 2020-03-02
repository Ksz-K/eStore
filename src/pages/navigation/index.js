import React, { Fragment } from "react";
import CatalogSearch from "../../features/product-listing/catalogsearch";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Navigation = ({ cart, searchSeen, cartSeen }) => (
  <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light">
    <NavLink to="/" className="navbar-brand">
      <small>
        <strong className="border pb-1">&nbsp;Toys4Us&nbsp;</strong>
      </small>{" "}
      <img src="https://kszk.vot.pl/d4us.jpg" alt="logo" />
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
          <NavLink to="/" className="nav-link">
            Start
          </NavLink>
        </li>
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
        {cartSeen ? (
          <Fragment>
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
                {""}&nbsp;
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
          </Fragment>
        ) : (
          <Fragment></Fragment>
        )}
      </ul>
      {searchSeen ? (
        <CatalogSearch />
      ) : (
        <div className="nav-item">
          <NavLink className="nav-link" to="/store">
            Do Sklepu
          </NavLink>
        </div>
      )}
      <div className="form-inline my-2 my-lg-0">
        <NavLink to="/login">
          <button className="btn btn-outline-info my-2 my-sm-0">Zaloguj</button>
        </NavLink>
      </div>
    </div>
  </nav>
);

const mapStateToProps = state => ({
  searchSeen: state.nav.searchSeen,
  cartSeen: state.nav.cartSeen
});
export default connect(mapStateToProps)(Navigation);
