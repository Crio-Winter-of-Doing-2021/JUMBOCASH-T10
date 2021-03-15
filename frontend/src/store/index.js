import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "../reducers/index";

let store;

export const configureStore = () => {
  store = createStore(reducer, applyMiddleware(thunk, logger));
  return store;
};
