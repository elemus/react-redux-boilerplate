import React from 'react';
import { Route } from 'react-router';
import { createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import rootReducer from '../src/reducers';
import Routes, { Todo } from '../src/Routes';

const configureStore = initialState => createStore(
  rootReducer,
  initialState,
);

const pathMap = () => {
  const wrapper = shallow(
    <Routes history={createBrowserHistory()} store={configureStore()}/>,
    { suspenseFallback: false }
  );

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
