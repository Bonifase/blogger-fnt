import { 
    USER_CREATED } from "../actions/user.js";

export const signupSuccess = (state={}, action={}) => {
    switch (action.type){
        case USER_CREATED:
            return action.message
        default: return state
    }
}
