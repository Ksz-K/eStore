import React from "react";
import Cart from "../features/cart";

const CartPage = props => {
  return (
    <div class="bg-brick pt-3 pl-3">
      <h1 class="font-italic">Aktualnie w koszyku</h1>
      <Cart />
    </div>
  );
};

export default CartPage;
