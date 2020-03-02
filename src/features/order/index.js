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

  useEffect(() => {
    cartHidden();
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
    clearCart();
    stripe.redirectToCheckout({
      items: theCart.map(item => ({
        quantity: item.quantity * 1,
        sku: `sku_${item.id}`
      })),
      successUrl: "https://okrzeszyn.waw.pl/",
      cancelUrl: "https://okrzeszyn.waw.pl/"
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

      <button className="btn btn-success" onClick={checkout}>
        Płacę
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  id: state.order[0]
});
export default connect(mapStateToProps, { cartHidden, clearCart })(Order);
