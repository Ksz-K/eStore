import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "../features/cart/reducer";
import productsReducer from "../features/product-listing/reducer";
import { reducer as formReducer } from "redux-form";

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.log(err);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

const recentVisitState = loadFromLocalStorage();

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  form: formReducer
});

const store = createStore(rootReducer, recentVisitState, composeWithDevTools());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
