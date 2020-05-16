import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';

export const Todo = lazy(() => import('./containers/Todo'));

const Routes = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Route path="/" component={Todo} />
      </Suspense>
    </Router>
  </Provider>
);

Routes.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line
  history: PropTypes.object.isRequired, // eslint-disable-line
};

export default hot(Routes);
