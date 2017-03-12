import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from '../reducers';

const configureStoreProd = initialState => createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk)),
);

const configureStoreDev = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk, createLogger())),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default (process.env.NODE_ENV === 'production') ? configureStoreProd : configureStoreDev;
