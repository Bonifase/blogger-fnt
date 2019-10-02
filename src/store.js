import { createStore, applyMiddleWare } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleWare from 'redux-thunk';

// initial state
const initialState = {
    aricles: []
}

// create store
export const store = (initialState) => {
    return createStore(reducer,
        initialState,
        composeWithDevTools(applyMiddleWare(thunkMiddleWare))
    )
}