import React from "react";
import HomePage from "./pages/homepage";
import StorePage from "./pages/storepage";
import CartPage from "./pages/cartpage";
import CheckoutPage from "./pages/checkoutpage";
import OrdersPage from "./pages/orderspage";
import NotFound from "./pages/notfound";
import TermsOfUse from "./pages/termsofuse";
import Contact from "./pages/contact";
import Login from "./pages/login/index";
import { Switch, Route } from "react-router-dom";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/store" component={StorePage} />
      <Route exact path="/cart" component={CartPage} />
      <Route exact path="/checkout" component={CheckoutPage} />
      <Route path="/orders" component={OrdersPage} />
      <Route path="/termsofuse" component={TermsOfUse} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Router;
