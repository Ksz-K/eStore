import React, { Fragment } from "react";
import { connect } from "react-redux";
import AddBtn from "./add-btn";
import ToyDetails from "../modal";
import { toy2modal } from "../modal/duck/actions";

const ProductListItem = ({ product, cartItem, home, toy2modal }) => {
  return (
    <Fragment>
      <div className="card my-2 shadow-sm">
        <div
          onClick={() => toy2modal(product)}
          className="card-header"
          data-toggle="modal"
          data-target="#toydetails"
        >
          <h4 className="my-0 font-weight-normal">{product.name}</h4>
        </div>
        <div className="card-body">
          {" "}
          <div
            onClick={() => toy2modal(product)}
            data-toggle="modal"
            data-target="#toydetails"
          >
            <img
              className="img-thumbnail"
              title={product.name}
              src={`img/${product.image}.jpg`}
              alt={product.name}
            />
            <p className="mt-3 mb-4 fiveLines">{product.description}</p>
            <h5>Kategoria wiekowa:</h5>
            <img
              className="img-fluid"
              src={
                product.age.charAt(0) !== "0"
                  ? "https://kszk.vot.pl/kid.png"
                  : "https://kszk.vot.pl/baby.png"
              }
              alt="AgeIcon"
            />
            <h2
              className="card-title pricing-card-title"
              style={{ fontFamily: "Economica" }}
            >
              {product.price} <small>zł</small>
              {home === undefined ? (
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
            <AddBtn product={product} cartItem={cartItem} />
          </div>{" "}
        </div>
      </div>
      <ToyDetails />
    </Fragment>
  );
};

export default connect(null, { toy2modal })(ProductListItem);
