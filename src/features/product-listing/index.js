import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductListItem from "./product-list-item";
import { loadProducts } from "../product-listing/duck/actions";

const ProductListing = ({ addToCart, removeFromCart, products, cart }) => {
  // const compDidMount = (async () => {
  //   try {
  //     const { loadProducts } = props;
  //     const res = await axios.get("https://kszk-api.herokuapp.com/api/estore");
  //     loadProducts(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // })();

  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <div className="product-listing">
      {products.map(product => (
        <ProductListItem
          key={product.id}
          product={product}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          cartItem={cart.filter(cartItem => cartItem.id === product.id)[0]}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
  products: state.products
});

const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => dispatch({ type: "ADD", payload: item }),
    removeFromCart: item => dispatch({ type: "REMOVE", payload: item })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
