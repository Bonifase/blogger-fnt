import { 
    USER_CREATED, USER_LOGGED_IN } from "../actions/user.js";

export const registerMessage = (state={}, action={}) => {
    switch (action.type){
        case USER_CREATED:
            return action.message
        default: return state
    }
}

export const loginDetails = (state={}, action={}) => {
    switch (action.type){
        case USER_LOGGED_IN:
            return action.payload
        default: return state
    }
}
