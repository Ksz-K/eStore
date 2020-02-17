import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "../features/cart/reducer";

const rootReducer = combineReducers({ cart: cartReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
