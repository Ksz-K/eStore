import React from "react";
import CurrentDay from "../features/currentday";
import ProductListing from "../features/product-listing";
import ToShopBtn from "../pages/navigation/to-shop-btn";

const Homepage = ({ history }) => {
  return (
    <div style={{ backgroundColor: "skyBlue" }}>
      <CurrentDay />
      <ProductListing productsLoadStart={undefined} productsLoadEntries={3} />
      <ToShopBtn history={history} />
    </div>
  );
};

export default Homepage;
