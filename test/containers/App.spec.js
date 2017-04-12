import React from 'react';
import { createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import rootReducer from '../../src/reducers';
import Routes from '../../src/Routes';
import App from '../../src/containers/App';

const configureStore = initialState => createStore(
  rootReducer,
  initialState,
);

describe('Container | App', () => {
  it('renders Routes component', () => {
    const wrapper = shallow(<App history={createBrowserHistory()} store={configureStore()}/>);

    expect(wrapper.find(Routes)).to.have.lengthOf(1);
  });
});
