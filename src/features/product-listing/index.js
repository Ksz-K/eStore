import React from "react";
import { connect } from "react-redux";
import ProductListItem from "./product-list-item";

import fetchApi from "../../modules/fetch-api";
class ProductListing extends React.Component {
  componentDidMount() {
    const { loadProducts } = this.props;
    fetchApi("GET", "http://localhost:5000/api/products").then(json => {
      loadProducts(json);
    });
  }

  render() {
    return (
      <div className="product-listing">
        {this.props.products.map(product => (
          <ProductListItem
            key={product.id}
            product={product}
            addToCart={this.props.addToCart}
            removeFromCart={this.props.removeFromCart}
            cartItem={
              this.props.cart.filter(cartItem => cartItem.id === product.id)[0]
            }
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => dispatch({ type: "ADD", payload: item }),
    removeFromCart: item => dispatch({ type: "REMOVE", payload: item })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
