import React from "react";
import { connect } from "react-redux";
import ProductListItem from "./product-list-item";
import { cartItemsWithQuantities } from "../cart";

const ProductListing = props => {
  return (
    <div className="product-listing">
      {props.products.map(product => (
        <ProductListItem
          key={product.id}
          product={product}
          addToCart={props.addToCart}
          cart={cartItemsWithQuantities(props.cart)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => dispatch({ type: "ADD", payload: item }),
    removeFromCart: item => dispatch({ type: "REMOVE", payload: item })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
