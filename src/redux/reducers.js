import { combineReducers } from "redux";
import { articles, message } from "./reducers/articles";
import { signupSuccess } from "./reducers/user";

export default combineReducers({
    articles,
    message,
    signupSuccess
});