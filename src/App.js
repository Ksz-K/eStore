import React from "react";
import { withRouter } from "react-router-dom";
import Router from "./Router";
import { connect } from "react-redux";
import Navigation from "./pages/navigation";
import Footer from "./pages/footer";

const App = ({ cart }) => {
  return (
    <div className="container-fluid" style={{ padding: 0 }}>
      <Navigation cart={cart} />
      <div className="container">
        <Router />
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});
export default withRouter(connect(mapStateToProps)(App));
