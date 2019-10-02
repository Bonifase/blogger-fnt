import { combineReducers } from "redux";
import { articles, message } from "./reducers/articles";

export default combineReducers({
    articles,
    message
});