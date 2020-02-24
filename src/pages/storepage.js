import React from "react";
import ProductListing from "../features/product-listing";

const StorePage = props => {
  return (
    <div style={{ backgroundColor: "skyBlue" }}>
      <ProductListing productsLoadStart={0} productsLoadEntries={Infinity} />
    </div>
  );
};

export default StorePage;
