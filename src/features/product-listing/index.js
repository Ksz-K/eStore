import React from "react";
import { connect } from "react-redux";
import ProductListItem from "./product-list-item";
import axios from "axios";

class ProductListing extends React.Component {
  async componentDidMount() {
    try {
      const { loadProducts } = this.props;
      const res = await axios.get("https://kszk-api.herokuapp.com/api/estore");
      loadProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { addToCart, removeFromCart, products, cart } = this.props;
    return (
      <div className="product-listing">
        {products.map(product => (
          <ProductListItem
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            cartItem={cart.filter(cartItem => cartItem.id === product.id)[0]}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  products: state.products
});

const mapDispatchToProps = dispatch => {
  return {
    loadProducts: products => dispatch({ type: "LOAD", payload: products }),
    addToCart: item => dispatch({ type: "ADD", payload: item }),
    removeFromCart: item => dispatch({ type: "REMOVE", payload: item })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
