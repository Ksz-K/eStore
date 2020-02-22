import React, { Fragment } from "react";
import AddBtn from "./add-btn";
import CutText from "../../features/cuttext/cuttext";

const ProductListItem = props => {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{props.product.name}</h4>
      </div>
      <div className="card-body">
        <img
          className="img-thumbnail"
          title={props.product.name}
          src={`img/${props.product.image}.jpg`}
          alt={props.product.name}
        />
        <p className="mt-3 mb-4">{CutText(props.product.description, 100)}</p>
        <h5>Kategoria wiekowa:</h5>
        <img
          className="img-thumbnail"
          src={
            props.product.age.charAt(0) != "0"
              ? "https://kszk.vot.pl/kid.png"
              : "https://kszk.vot.pl/baby.png"
          }
          alt="ssss"
        />
        <h1 className="card-title pricing-card-title">
          {props.product.price} zł{" "}
          <small className="text-muted"> Promocja </small>
        </h1>
        <div className="btn btn-lg btn-block btn-outline-primary">
          <AddBtn product={props.product} cartItem={props.cartItem} />
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
{
  /* <div className="product-list-item">
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
    </div> */
}
