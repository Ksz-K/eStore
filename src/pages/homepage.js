import React from "react";
import ProductListing from "../features/product-listing";
import CurrentDay from "../features/currentday";

const Homepage = props => {
  return (
    <div style={{ backgroundColor: "skyBlue" }}>
      <CurrentDay />
      <ProductListing />
    </div>
  );
};

export default Homepage;
