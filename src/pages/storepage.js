import React from "react";
import StoreDashboard from "../features/product-listing/dashboard";
import ProductListing from "../features/product-listing";

const StorePage = props => {
  return (
    <div>
      <StoreDashboard />
      <ProductListing productsLoadStart={0} productsLoadEntries={Infinity} />
    </div>
  );
};

export default StorePage;
