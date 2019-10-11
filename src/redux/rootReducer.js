import { combineReducers } from "redux";
import { articles, message } from "./reducers/articles";
import { registerMessage, loginDetails } from "./reducers/user";

export default combineReducers({
    articles,
    message,
    registerMessage,
    loginDetails
});