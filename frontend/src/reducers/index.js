import { combineReducers } from "redux";
import megaFormReducer from "./megaForm";

export default combineReducers({
  allProducts: megaFormReducer
});