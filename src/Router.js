import React from "react";
import HomePage from "./pages/homepage";
import CartPage from "./pages/cartpage";
import CheckoutPage from "./pages/checkoutpage";
import OrdersPage from "./pages/orderspage";
import NotFound from "./pages/notfound";
import TermsOfUse from "./pages/termsofuse";
import Contact from "./pages/contact";
import { Switch, Route } from "react-router-dom";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/cart" component={CartPage} />
      <Route exact path="/checkout" component={CheckoutPage} />
      <Route path="/orders/:id" component={OrdersPage} />
      <Route path="/termsofuse" component={TermsOfUse} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Router;
