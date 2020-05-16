import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import store from './store/configureStore';
import Routes from './Routes';

import('./styles/app.scss'); // eslint-disable-line

const rootEl = document.getElementById('root');
const browserHistory = createBrowserHistory();

ReactDOM.render(
  <Routes store={store} history={browserHistory} />,
  rootEl,
);
