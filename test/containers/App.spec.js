import React from 'react';
import { createStore } from 'redux';
import { browserHistory } from 'react-router';
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
    const wrapper = shallow(<App history={browserHistory} store={configureStore()}/>);

    expect(wrapper.find(Routes)).to.have.lengthOf(1);
  });
});
