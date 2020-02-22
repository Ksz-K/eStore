import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import ProductListItem from "./product-list-item";
import { loadSomeProducts } from "../product-listing/duck/actions";

const ProductListing = ({ products, cart, loadSomeProducts }) => {
  useEffect(() => {
    loadSomeProducts();
  }, []);

  const productsOnShelf = 4;
  const shelfLevels = Math.ceil(products.length / productsOnShelf);

  let arrayOfProductListItem = products.map((product, index) => (
    <ProductListItem
      key={product.id}
      product={product}
      cartItem={cart.filter(cartItem => cartItem.id === product.id)[0]}
    />
  ));

  const shelfOfProducts = {};
  const productsFormatted = [];

  for (var i = 0; i < shelfLevels; i++) {
    shelfOfProducts[i] = [];
    for (
      var j = 0 + i * productsOnShelf;
      j < productsOnShelf + i * productsOnShelf;
      j++
    ) {
      if (j === products.length) {
        break;
      }
      shelfOfProducts[i] = [...shelfOfProducts[i], arrayOfProductListItem[j]];
    }
    productsFormatted.push(shelfOfProducts[i]);
  }

  return (
    <Fragment>
      {productsFormatted.map((productRow, index) => (
        <div key={index} className="card-deck m-3 text-center">
          {productRow}
        </div>
      ))}{" "}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
  products: state.products
});

export default connect(mapStateToProps, { loadSomeProducts })(ProductListing);
