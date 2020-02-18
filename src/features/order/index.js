import React from "react";
import axios from "axios";

class Order extends React.Component {
  state = {
    order: null
  };

  async componentDidMount() {
    try {
      const order = await axios.get(
        `https://kszk-api.herokuapp.com/api/products/${this.props.id}`
      );
      this.setState({
        order: order.data
      });
    } catch (err) {
      console.log(err);
    }
  }
  renderOrder() {
    const { name, email, theCart } = this.state.order;
    return (
      <div>
        <h3>Order info</h3>
        <div>Name: {name}</div>
        <div>e-mail: {email}</div>

        <h4>Items:</h4>
        <ul>
          {theCart &&
            theCart.map(item => {
              const { product_id, qty } = item;
              return (
                <div key={product_id}>
                  <li>Product: {product_id}</li>
                  <li>Quantity: {qty}</li>
                </div>
              );
            })}
        </ul>
      </div>
    );
  }

  render() {
    const { order } = this.state;

    return <div>{order ? this.renderOrder() : "Loading..."}</div>;
  }
}

export default Order;
