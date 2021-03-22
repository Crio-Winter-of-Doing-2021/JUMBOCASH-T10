import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "./store/index";
import { Provider } from "react-redux";
import { login } from "./actions/index.js";

const store = configureStore();
console.log(store.getState());

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
