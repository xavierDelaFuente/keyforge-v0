import { combineReducers } from "redux";
import readiness from "./readiness";
// import counter from "./counter/index";
import { counter } from "./counter";
import { keys } from "./keys";

export default combineReducers({
  counter,
  keys,
  readiness
});
