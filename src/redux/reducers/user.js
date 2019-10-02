import { 
    ITEM_CREATED } from "../actions/user.js";

export const message = (state={}, action={}) => {
    switch (action.type){
        case ITEM_CREATED:
            return action.message
        default: return state
    }
}
