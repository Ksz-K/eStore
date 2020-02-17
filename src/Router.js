import React from "react";
import HomePage from "./pages/homepage";
import CartPage from "./pages/cartpage";
import { Switch, Route } from "react-router-dom";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/cart" component={CartPage} />
    </Switch>
  );
};

export default Router;
