import React from 'react';
import { Route } from 'react-router';
import { browserHistory } from 'react-router';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Routes from '../src/Routes';
import Todo from '../src/containers/ToDo';

describe('Configure Store', () => {
  it('renders correct routes', () => {
    const wrapper = shallow(<Routes history={browserHistory}/>);

    const pathMap = wrapper.find(Route).reduce((routesMap, route) => {
      const routeProps = route.props();

      routesMap[routeProps.path] = routeProps.component;

      return routesMap;
    }, {});

    expect(pathMap['/']).to.equal(Todo);
  });
});
