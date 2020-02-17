import React from "react";
import ProductListing from "../features/product-listing";
import data from "../data/products.json";

const Homepage = props => {
  return (
    <div>
      <h1>Home Page</h1>
      <ProductListing products={data.products} />
    </div>
  );
};

export default Homepage;
