import React from "react";
import { connect } from "react-redux";
import AddBtn from "../product-listing/add-btn";

const ToyDetails = ({ toy, cart }) => {
  const cartItem = cart.filter(cartItem => cartItem.id === toy.id)[0];

  return (
    <div
      className="modal fade"
      id="toydetails"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="toydetails"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="toysdetailsLabel">
              {toy.name}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="fa fa-window-close-o"></i>
              </span>
            </button>
          </div>
          <div className="modal-body">
            <img
              class="modal-img"
              title={toy.name}
              src={`img/${toy.image}.jpg`}
              alt={toy.name}
            />
            <p className="mt-3 mb-4">{toy.description}</p>
            <h5>Kategoria wiekowa:</h5>
            <h3>
              {" "}
              <img
                className="img-fluid"
                src={
                  toy.age.charAt(0) !== "0"
                    ? "https://kszk.vot.pl/kid.png"
                    : "https://kszk.vot.pl/baby.png"
                }
                alt="AgeIcon"
              />{" "}
              {toy.age}{" "}
            </h3>
            <h2
              className="card-title pricing-card-title"
              style={{ fontFamily: "Economica" }}
            >
              cena: {toy.price} <small>zł</small>
              {toy.price > 150 ? (
                <p className="pt-3">
                  <i className="fa fa-bell" style={{ fontSize: "14px" }}></i>
                  <strong style={{ fontFamily: "Butterfly Kids" }}>
                    {" "}
                    Polecamy{" "}
                  </strong>
                </p>
              ) : null}
            </h2>{" "}
          </div>
          <div className="modal-footer">
            <div className="btn btn-lg btn-primary">
              <AddBtn product={toy} cartItem={cartItem} />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  toy: state.modal[0],
  cart: state.cart
});
export default connect(mapStateToProps)(ToyDetails);
