import React from "react";
import { connect } from "react-redux";
import { sortPrice, sortName } from "../product-listing/duck/actions";

const Dashboard = ({ sortPrice, sortName }) => {
  return (
    <div className="text-center">
      <button class="btn btn-dark" disabled>
        <small>Sortuj</small>
      </button>
      <button
        class="btn btn-primary active"
        role="button"
        aria-pressed="true"
        onClick={() => sortPrice(1)}
      >
        <i className="fa fa-sort"></i>
        &nbsp; Cena &nbsp;
        <i className="fa fa-sort-numeric-asc"></i>
      </button>
      <button
        class="btn btn-outline-primary no-hover"
        role="button"
        aria-pressed="true"
        onClick={() => sortPrice(-1)}
      >
        <i className="fa fa-sort"></i>
        &nbsp; Cena &nbsp;
        <i className="fa fa-sort-numeric-desc"></i>
      </button>
      <button
        class="btn btn-success active"
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
  );
};

export default connect(null, { sortPrice, sortName })(Dashboard);
