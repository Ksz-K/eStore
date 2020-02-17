import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "../features/cart/reducer";
import productsReducer from "../features/product-listing/reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
