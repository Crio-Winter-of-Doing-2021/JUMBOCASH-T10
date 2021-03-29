import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "./store/index";
import { Provider } from "react-redux";
import { login, logout } from "./actions/index.js";
import decode from "jwt-decode";

const store = configureStore();
console.log(store.getState());

const token = localStorage.token;
if (token) {
  const decodedToken = decode(token);

  if (decodedToken.exp * 1000 < new Date().getTime()) {
    localStorage.clear();
    store.dispatch(logout());
  }
}

if (localStorage.logged_in_id != null) {
  store.dispatch(login(localStorage.logged_in_id));
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
