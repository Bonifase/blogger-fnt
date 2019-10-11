import { 
    ARTICLES, 
    ITEM_ADDED, ARTICLE_DELETED } from "../actions/article";


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
        case ARTICLE_DELETED:
            return action.message
        default: return state
    }
}
