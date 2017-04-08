import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router';

import Todo from './containers/Todo';

const Routes = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={Todo} />
  </Router>
);

Routes.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line
};

export default Routes;
