import { combineReducers } from "redux";
import { increaseValueReducer } from "./increaseValueReducer";

export default combineReducers({
    value: increaseValueReducer
});