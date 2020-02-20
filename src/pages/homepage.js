import React from "react";
import ProductListing from "../features/product-listing";

const Homepage = props => {
  return (
    <div style={{ backgroundColor: "skyBlue" }}>
      <h1>Home Page</h1>
      <ProductListing />
    </div>
  );
};

export default Homepage;
