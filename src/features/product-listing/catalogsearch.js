import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { filterText, loadPrev } from "./duck/actions";

const CatalogSearch = ({ filterText, loadPrev, toysSeen }) => {
  const text4search = useRef("");
  const [toysSeenHistory, setToysSeenHistory] = useState([]);

  const onChange = () => {
    filterText(text4search.current.value);
  };

  const onKeyPressed = e => {
    if (e.keyCode === 8 && text4search.current.value.length > 0) {
      loadPrev(toysSeenHistory[text4search.current.value.length - 1]);
    } else if (e.keyCode === 37 && text4search.current.value.length > 0) {
      loadPrev(toysSeenHistory[0]);
      text4search.current.value = "";
    } else {
      setToysSeenHistory([...toysSeenHistory, toysSeen]);
    }
  };
  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="text"
        ref={text4search}
        onKeyDown={onKeyPressed}
        onChange={onChange}
        placeholder="Szukaj..."
      />
    </form>
  );
};
const mapStateToProps = state => ({
  toysSeen: state.products
});
export default connect(mapStateToProps, { filterText, loadPrev })(
  CatalogSearch
);
