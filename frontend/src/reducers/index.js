import { combineReducers } from "redux";
import auth from "./auth";
import entity from "./entity";

export default combineReducers({
  auth,
  entity,
});
