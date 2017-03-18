import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line
import App from './containers/App';

import './styles/app.scss';

const store = configureStore();
const rootEl = document.getElementById('root');
const browserHistory = createBrowserHistory();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} history={browserHistory} />
    </AppContainer>,
    rootEl,
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => render(App));
}
