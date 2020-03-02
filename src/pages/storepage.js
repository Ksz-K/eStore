import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchVisible, cartVisible } from "../pages/navigation/duck/actions";
import StoreDashboard from "../features/product-listing/dashboard";
import ProductListing from "../features/product-listing";

const StorePage = ({ searchVisible, cartVisible }) => {
  useEffect(() => {
    cartVisible();
    searchVisible();
  }, []);

  return (
    <div>
      <StoreDashboard />
      <ProductListing productsLoadStart={0} productsLoadEntries={Infinity} />
    </div>
  );
};

export default connect(null, { searchVisible, cartVisible })(StorePage);
