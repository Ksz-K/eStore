import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../pages/spinner";

const Order = ({ id }) => {
  const [orderNow, setOrderNow] = useState(null);
  const [stripe, setStripe] = useState(null);
  let stripeToken = "pk_test_jGqc0sLP1RHqR9fGWxQfWzx500EQw4g1w2";

  useEffect(() => {
    if (window.Stripe) setStripe(window.Stripe(stripeToken));
  }, [stripeToken]);

  const confirmedCart = (async () => {
    try {
      const orderSavedInDB = await axios.get(
        `https://kszk-api.herokuapp.com/api/products/${id}`
      );
      setOrderNow(orderSavedInDB);
    } catch (err) {
      console.log(err);
      setOrderNow({ name: "Wystąpił problem z dostępem do sieci..." });
    }
  })();

  const checkout = () => {
    stripe.redirectToCheckout({
      items: theCart.map(item => ({
        quantity: item.qty * 1,
        sku: `sku_${item.product_id}`
      })),
      successUrl: "https://okrzeszyn.waw.pl/",
      cancelUrl: "https://okrzeszyn.waw.pl/"
    });
  };

  if (!orderNow) return <Spinner />;

  const { name, email, theCart } = orderNow.data;
  return (
    <div>
      <h3>Order info</h3>
      <div>Name: {name}</div>
      <div>e-mail: {email} </div>
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
      <button onClick={checkout}>Do Kasy</button>
    </div>
  );
};

export default Order;
