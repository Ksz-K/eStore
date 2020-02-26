import React, { Fragment } from "react";
import AddBtn from "./add-btn";
import ToyDetails from "./toydetails";

const ProductListItem = props => {
  return (
    <Fragment>
      <div className="card my-2 shadow-sm">
        <div
          className="card-header"
          data-toggle="modal"
          data-target="#toydetails"
        >
          <h4 className="my-0 font-weight-normal">{props.product.name}</h4>
        </div>
        <div className="card-body">
          {" "}
          <div data-toggle="modal" data-target="#toydetails">
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
            <h2
              className="card-title pricing-card-title"
              style={{ fontFamily: "Economica" }}
            >
              {props.product.price} <small>zł</small>
              {props.home === undefined ? (
                <p>
                  <i className="fa fa-bell" style={{ fontSize: "14px" }}></i>
                  <strong style={{ fontFamily: "Butterfly Kids" }}>
                    {" "}
                    Polecamy{" "}
                  </strong>
                </p>
              ) : null}
            </h2>{" "}
          </div>
          <div className="btn btn-lg btn-block btn-outline-primary">
            <AddBtn product={props.product} cartItem={props.cartItem} />
          </div>{" "}
        </div>
      </div>
      <ToyDetails />
    </Fragment>
  );
};

export default ProductListItem;
