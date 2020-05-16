import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleWares = [
  thunk,
];

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger'); // eslint-disable-line

  middleWares.push(logger);
}

export default compose(applyMiddleware(...middleWares))(createStore)(rootReducer);
