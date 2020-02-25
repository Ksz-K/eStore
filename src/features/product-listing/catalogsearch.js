import React, { useRef } from "react";
import { connect } from "react-redux";
import { filterText } from "./duck/actions";

const CatalogSearch = ({ filterText }) => {
  const text4search = useRef("");

  const onChange = () => {
    filterText(text4search.current.value);
  };
  return (
    <form className="form-inline my-2 my-lg-0">
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        <span>
          <i className="fa fa-search-plus"></i>
        </span>
      </button>
      <input
        className="form-control mr-sm-2"
        type="text"
        ref={text4search}
        onChange={onChange}
        placeholder="Szukaj..."
      />
    </form>
  );
};
export default connect(null, { filterText })(CatalogSearch);
