import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";
import { userLoggedIn } from './redux/actions/user';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  if (localStorage.JWT) {
    const user = { 
      access_token: localStorage.JWT,
      username: localStorage.username
     };
    store.dispatch(userLoggedIn(user));
  }

ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
