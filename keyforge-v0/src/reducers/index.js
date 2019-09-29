import { combineReducers } from "redux";
import readiness from "./readiness";
import counter from "./counter";

export default combineReducers({
  counter,
  readiness
});
