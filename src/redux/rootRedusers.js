import { combineReducers } from "redux";
import headerReduser from "./headerReduser";
import shopReduser from "./shopReduser";

const rootReduser = combineReducers({
  shop: shopReduser,
  header: headerReduser,
});
export default rootReduser;
