import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';

import('./styles/app.scss'); // eslint-disable-line

const storeMiddleWares = [
  thunk,
];

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger'); // eslint-disable-line
  storeMiddleWares.push(logger);
}

const store = compose(applyMiddleware(...storeMiddleWares))(createStore)(rootReducer);
const rootEl = document.getElementById('root');
const browserHistory = createBrowserHistory();

ReactDOM.render(
  <Routes store={store} history={browserHistory} />,
  rootEl,
);
