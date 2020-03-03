import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../pages/spinner";
import Cart from "../cart/";
import { connect } from "react-redux";
import { cartHidden } from "../../pages/navigation/duck/actions";
import { clearCart } from "../cart/duck/actions";

const Order = ({ id, cartHidden, clearCart }) => {
  const [orderNow, setOrderNow] = useState(null);
  const [stripe, setStripe] = useState(null);
  let stripeToken = "pk_test_jGqc0sLP1RHqR9fGWxQfWzx500EQw4g1w2";

  console.log(id);
  useEffect(() => {
    confirmedCart();
    cartHidden();
    if (window.Stripe) setStripe(window.Stripe(stripeToken));
  }, [stripeToken]);

  const confirmedCart = async () => {
    try {
      const orderSavedInDB = await axios.get(
        `https://kszk-api.herokuapp.com/api/products/${id}`
      );
      setOrderNow(orderSavedInDB);
    } catch (err) {
      console.log(err);
      setOrderNow({ name: "Wystąpił problem z dostępem do sieci..." });
    }
  };

  const checkout = () => {
    clearCart();
    stripe.redirectToCheckout({
      items: theCart.map(item => ({
        quantity: item.quantity * 1,
        sku: `sku_${item.id}`
      })),
      successUrl: "https://kszk-estore.netlify.com/",
      cancelUrl: "https://kszk-estore.netlify.com/"
    });
  };

  if (!orderNow) return <Spinner />;

  const { name, email, theCart } = orderNow.data;
  return (
    <div>
      <h3>
        Twoje zamówienie <span className="small font-italic">{id}</span>
      </h3>
      <div>
        <span className="font-weight-bold">Name: </span> {name}
      </div>
      <div>
        {" "}
        <span className="font-weight-bold">e-mail: </span>
        {email}
      </div>
      <div className="mb-4">
        <span className="font-weight-bold">Numer zamówienia: </span>
        {id}
        <br />
        <small className="font-italic">
          Prosimy zanotować będzie potrzebny przy sprawdzeniu Statusu Zamówienia
        </small>
      </div>
      <Cart buttonSeen={false} buttonSeen2={false} cartFromOrder={theCart} />
      <h3>
        <svg width="62" height="25">
          <title>Stripe</title>
          <path d="M5 10.1c0-.6.6-.9 1.4-.9 1.2 0 2.8.4 4 1.1V6.5c-1.3-.5-2.7-.8-4-.8C3.2 5.7 1 7.4 1 10.3c0 4.4 6 3.6 6 5.6 0 .7-.6 1-1.5 1-1.3 0-3-.6-4.3-1.3v3.8c1.5.6 2.9.9 4.3.9 3.3 0 5.5-1.6 5.5-4.5.1-4.8-6-3.9-6-5.7zM29.9 20h4V6h-4v14zM16.3 2.7l-3.9.8v12.6c0 2.4 1.8 4.1 4.1 4.1 1.3 0 2.3-.2 2.8-.5v-3.2c-.5.2-3 .9-3-1.4V9.4h3V6h-3V2.7zm8.4 4.5L24.6 6H21v14h4v-9.5c1-1.2 2.7-1 3.2-.8V6c-.5-.2-2.5-.5-3.5 1.2zm5.2-2.3l4-.8V.8l-4 .8v3.3zM61.1 13c0-4.1-2-7.3-5.8-7.3s-6.1 3.2-6.1 7.3c0 4.8 2.7 7.2 6.6 7.2 1.9 0 3.3-.4 4.4-1.1V16c-1.1.6-2.3.9-3.9.9s-2.9-.6-3.1-2.5H61c.1-.2.1-1 .1-1.4zm-7.9-1.5c0-1.8 1.1-2.5 2.1-2.5s2 .7 2 2.5h-4.1zM42.7 5.7c-1.6 0-2.5.7-3.1 1.3l-.1-1h-3.6v18.5l4-.7v-4.5c.6.4 1.4 1 2.8 1 2.9 0 5.5-2.3 5.5-7.4-.1-4.6-2.7-7.2-5.5-7.2zm-1 11c-.9 0-1.5-.3-1.9-.8V10c.4-.5 1-.8 1.9-.8 1.5 0 2.5 1.6 2.5 3.7 0 2.2-1 3.8-2.5 3.8z"></path>
        </svg>
        <button className="ml-2 btn btn-primary" onClick={checkout}>
          Operatorem płatności jest stripe
        </button>
      </h3>
    </div>
  );
};

const mapStateToProps = state => ({
  id: state.order[0]
});
export default connect(mapStateToProps, { cartHidden, clearCart })(Order);
