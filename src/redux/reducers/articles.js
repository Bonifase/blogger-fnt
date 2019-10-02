import { 
    ARTICLES, 
    ITEM_ADDED } from "../actions";


export const articles = (state=[], action={}) => {
    switch (action.type){
        case ARTICLES:
            return action.articles
        default: return state
    }
}
export const message = (state={}, action={}) => {
    switch (action.type){
        case ITEM_ADDED:
            return action.message
        default: return state
    }
}
