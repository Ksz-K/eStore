import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cartReducer from "./features/cart/reducer";
import productsReducer from "./features/product-listing/duck/reducers";
import { reducer as formReducer } from "redux-form";

const saveToLocalStorage = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.log(err);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

const middleware = [thunk];

const recentVisitState = loadFromLocalStorage();

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  form: formReducer
});

const store = createStore(
  rootReducer,
  recentVisitState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
