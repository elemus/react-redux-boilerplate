import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import Routes from '../Routes';

const App = ({ store, history }) => (
  <Provider store={store}>
    <Routes history={history} />
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line
  history: PropTypes.object.isRequired, // eslint-disable-line
};

export default App;
