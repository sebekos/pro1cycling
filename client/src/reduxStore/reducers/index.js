import { combineReducers } from "redux";
import auth from "./auth";
import team from "./team";

export default combineReducers({
  auth,
  team,
});
