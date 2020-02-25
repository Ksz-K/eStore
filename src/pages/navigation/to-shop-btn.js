import React from "react";

const toShopBtn = ({ history }) => {
  return (
    <div
      className="btn btn-primary btn-lg btn-block"
      onClick={() => {
        history.push("/store");
      }}
    >
      <span>
        {" "}
        Do Sklepu &nbsp;<i className="fa fa-shopping-basket"></i>
      </span>
    </div>
  );
};

export default toShopBtn;
