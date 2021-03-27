import { combineReducers } from "redux";
import auth from "./auth";
import entity from "./entity";
import transactions from "./transactions";

export default combineReducers({
  auth,
  entity,
  transactions,
});
