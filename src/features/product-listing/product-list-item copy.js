import React from "react";
import AddBtn from "./add-btn";
import RemoveBtn from "./remove-btn";

const ProductListItem = props => {
  return (
    <div className="product-list-item">
      <h3>{props.product.name}</h3>
      <img
        height={100}
        title={props.product.name}
        src={`img/${props.product.image}.jpg`}
        alt={props.product.name}
      />
      <div>{props.product.description}</div>
      <div>${props.product.price}</div>
      <div>
        <AddBtn product={props.product} cartItem={props.cartItem} />
        {props.cartItem ? (
          <RemoveBtn product={props.product} cartItem={props.cartItem} />
        ) : null}
      </div>
    </div>
  );
};

export default ProductListItem;
