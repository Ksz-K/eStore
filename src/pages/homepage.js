import React from "react";
import ProductListing from "../features/product-listing";
import CurrentDay from "../features/currentday";

const Homepage = props => {
  return (
    <div style={{ backgroundColor: "skyBlue" }}>
      <CurrentDay />
      <ProductListing productsLoadStart={undefined} productsLoadEntries={3} />
      <div
        className="btn btn-primary btn-lg btn-block"
        onClick={() => props.history.push("/store")}
      >
        <span>
          {" "}
          Do Sklepu &nbsp;<i className="fa fa-shopping-basket"></i>
        </span>
      </div>
    </div>
  );
};

export default Homepage;
