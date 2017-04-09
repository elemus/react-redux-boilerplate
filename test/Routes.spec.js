import React from 'react';
import { Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Routes from '../src/Routes';
import Todo from '../src/containers/Todo';

const pathMap = () => {
  const wrapper = shallow(<Routes history={createBrowserHistory()}/>);

  return wrapper.find(Route).reduce((routesMap, route) => {
    const routeProps = route.props();

    routesMap[routeProps.path] = routeProps.component;

    return routesMap;
  }, {});
};

describe('Routes', () => {
  it('should render Todo container for "/" route', () => {
    expect(pathMap()['/']).to.equal(Todo);
  });
});
