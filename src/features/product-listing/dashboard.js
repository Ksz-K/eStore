import React, { Fragment } from "react";
import { connect } from "react-redux";
import { sortPrice, sortName } from "../product-listing/duck/actions";

const Dashboard = ({ sortPrice, sortName }) => {
  return (
    <Fragment>
      <div className="mt-5"></div>
      <div className="text-center mt-2 position-fixed fixed-top mt-5p5">
        <div className="btn btn-dark dumb" disabled>
          <small>Sortuj</small>
        </div>
        <button
          className="btn btn-primary active"
          role="button"
          aria-pressed="true"
          onClick={() => sortPrice(1)}
        >
          <i className="fa fa-sort"></i>
          &nbsp; Cena &nbsp;
          <i className="fa fa-sort-numeric-asc"></i>
        </button>
        <button
          className="btn btn-outline-primary no-hover"
          role="button"
          aria-pressed="true"
          onClick={() => sortPrice(-1)}
        >
          <i className="fa fa-sort"></i>
          &nbsp; Cena &nbsp;
          <i className="fa fa-sort-numeric-desc"></i>
        </button>
        <button
          className="btn btn-success active"
          role="button"
          aria-pressed="true"
          onClick={() => sortName(1)}
        >
          <i className="fa fa-sort"></i>
          &nbsp; Nazwa &nbsp;
          <i className="fa fa-sort-alpha-asc"></i>
        </button>
        <button
          className="btn btn-outline-success no-hover"
          role="button"
          aria-pressed="true"
          onClick={() => sortName(-1)}
        >
          <i className="fa fa-sort"></i>
          &nbsp; Nazwa &nbsp;
          <i className="fa fa-sort-alpha-desc"></i>
        </button>
      </div>
    </Fragment>
  );
};

export default connect(null, { sortPrice, sortName })(Dashboard);
