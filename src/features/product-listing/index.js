import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import ProductListItem from "./product-list-item";
import { loadProducts } from "../product-listing/duck/actions";

const ProductListing = ({
  productsLoadStart,
  productsLoadEntries,
  products,
  cart,
  loadProducts
}) => {
  useEffect(() => {
    loadProducts(productsLoadStart, productsLoadEntries);
  }, []);

  const productsOnShelf = 5;
  const shelfLevels = Math.ceil(products.length / productsOnShelf);

  let arrayOfProductListItem = products.map((product, index) => (
    <Fragment key={index}>
      <ProductListItem
        home={productsLoadStart}
        key={product.id}
        product={product}
        cartItem={cart.filter(cartItem => cartItem.id === product.id)[0]}
      />
      {index === 1 || (index - 1) % 5 === 0 ? (
        <div className="w-100 d-none d-sm-block d-md-none"></div>
      ) : null}
      {index === 2 || (index - 2) % 5 === 0 ? (
        <div className="w-100 d-none d-md-block d-lg-none"></div>
      ) : null}
      {index === 3 || (index - 3) % 5 === 0 ? (
        <Fragment>
          <div className="w-100 d-none d-sm-block d-md-none"></div>
          <div className="w-100 d-none d-lg-block d-xl-none"></div>
        </Fragment>
      ) : null}
      {index === 4 || (index - 4) % 5 === 0 ? (
        <div className="w-100 d-none d-xl-block"></div>
      ) : null}
    </Fragment>
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

export default connect(mapStateToProps, { loadProducts })(ProductListing);
