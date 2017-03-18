import React from 'react';
import { Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Routes from '../src/Routes';
import Todo from '../src/containers/Todo';

describe('Routes', () => {
  it('renders correct containers for each route', () => {
    const wrapper = shallow(<Routes history={createBrowserHistory()}/>);

    const pathMap = wrapper.find(Route).reduce((routesMap, route) => {
      const routeProps = route.props();

      routesMap[routeProps.path] = routeProps.component;

      return routesMap;
    }, {});

    expect(pathMap['/']).to.equal(Todo);
  });
});
