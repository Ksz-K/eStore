import React from "react";
import ProductListing from "../features/product-listing";
import CurrentDay from "../features/currentday";
import { NavLink } from "react-router-dom";

const Homepage = props => {
  return (
    <div style={{ backgroundColor: "skyBlue" }}>
      <CurrentDay />
      <ProductListing
        productsLoadStart={undefined}
        productsLoadEntries={undefined}
      />
      <button type="button" className="btn btn-primary btn-lg btn-block">
        <NavLink style={{ color: "#fff", textDecoration: "none" }} to="/store">
          {" "}
          Do Sklepu{" "}
        </NavLink>
      </button>
    </div>
  );
};

export default Homepage;
