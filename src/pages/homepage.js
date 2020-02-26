import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchHidden } from "../pages/navigation/duck/actions";
import CurrentDay from "../features/currentday";
import ProductListing from "../features/product-listing";
import ToShopBtn from "../pages/navigation/to-shop-btn";

const Homepage = ({ history, searchHidden }) => {
  useEffect(() => {
    searchHidden();
  }, []);
  return (
    <div style={{ backgroundColor: "skyBlue" }}>
      <CurrentDay />
      <ProductListing productsLoadStart={undefined} productsLoadEntries={3} />
      <ToShopBtn history={history} />
    </div>
  );
};

export default connect(null, { searchHidden })(Homepage);
