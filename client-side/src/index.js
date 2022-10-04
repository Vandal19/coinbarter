import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productsReducer from "./features/productSlice";
import cartReducer, { sumTotal } from './features/cartSlice';
import favoriteReducer, { sumQuantity } from "./features/favoriteSlice"

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    favorite: favoriteReducer
  },
});

// store.dispatch(productsFetch());
store.dispatch(sumTotal());
store.dispatch(sumQuantity());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
