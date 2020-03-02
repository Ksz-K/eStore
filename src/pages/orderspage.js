import React from "react";
import Order from "../features/order";

const OrdersPage = props => {
  return (
    <div>
      <Order id={props.location.pathname.substring(8)} />
    </div>
  );
};

export default OrdersPage;
