import React from "react";
import { withRouter } from "react-router-dom";
import Router from "./Router";
import { connect } from "react-redux";
import Navigation from "./pages/navigation";

const App = ({ cart }) => {
  return (
    <div className="container-fluid" style={{ padding: 0 }}>
      <Navigation cart={cart} />
      <div className="container">
        <Router />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});
export default withRouter(connect(mapStateToProps)(App));
