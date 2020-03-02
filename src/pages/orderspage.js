import React from "react";
import Order from "../features/order";

const OrdersPage = props => {
  return (
    <div>
      <Order id={props.match.params.id} />
    </div>
  );
};

export default OrdersPage;
