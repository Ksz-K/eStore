import React from "react";
import AddBtn from "./add-btn";

const ProductListItem = props => {
  return (
    <div className="card my-2 shadow-sm">
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
        <p className="mt-3 mb-4 fiveLines">{props.product.description}</p>
        <h5>Kategoria wiekowa:</h5>
        <img
          className="img-fluid"
          src={
            props.product.age.charAt(0) != "0"
              ? "https://kszk.vot.pl/kid.png"
              : "https://kszk.vot.pl/baby.png"
          }
          alt="AgeIcon"
        />
        <h2 className="card-title pricing-card-title">
          {props.product.price} zł{" "}
          {props.home === undefined ? (
            <p>
              <i className="fa fa-bell" style={{ fontSize: "14px" }}></i>
              <small className="text-muted"> Polecamy </small>
            </p>
          ) : null}
        </h2>
        <div className="btn btn-lg btn-block btn-outline-primary">
          <AddBtn product={props.product} cartItem={props.cartItem} />
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
