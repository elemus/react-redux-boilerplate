import React from 'react';
import { browserHistory } from 'react-router';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Routes from '../../src/Routes';
import configureStore from '../../src/store/configureStore';
import App from '../../src/containers/App';

describe('Container | App', () => {
  it('renders Routes component', () => {
    const wrapper = shallow(<App history={browserHistory} store={configureStore()}/>);

    expect(wrapper.find(Routes)).to.have.lengthOf(1);
  });
});
