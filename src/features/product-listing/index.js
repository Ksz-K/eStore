import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductListItem from "./product-list-item";
import Spinner from "../../pages/spinner";
import { loadProducts } from "../product-listing/duck/actions";

const ProductListing = ({ products, cart, loadProducts }) => {
  useEffect(() => {
    loadProducts();
  }, []);

  if (!products || products.lenth === 0) return <Spinner />;
  return (
    <div className="product-listing">
      {products.map(product => (
        <ProductListItem
          key={product.id}
          product={product}
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

export default connect(mapStateToProps, { loadProducts })(ProductListing);
