import React from 'react';
import { createStore } from 'redux';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import rootReducer from '../../src/reducers';
import TodoComponent from '../../src/components/Todo';
import TodoConnected, { TodoContainer } from '../../src/containers/Todo';

const configureStore = initialState => createStore(
  rootReducer,
  initialState,
);

const setup = (props) => {
  const defaultProps = {
    tasks: [],
    addTask() {},
    toggleTask() {},
    deleteTask() {},
  };

  return shallow(<TodoContainer {...Object.assign({}, defaultProps, props)} />);
};

describe('Container | TodoConnected', () => {
  it('renders', () => {
    const props = {
      store: configureStore()
    };

    const wrapper = mount(<TodoConnected {...props}/>);

    expect(wrapper.find(TodoComponent)).to.have.lengthOf(1);
  });

  it('should trigger addTask() prop func when handleTaskAdd() invoked', () => {
    const addTask = sinon.spy();

    const wrapper = setup({ addTask });

    const description = 'New task';

    wrapper.instance().handleTaskAdd(description);

    expect(addTask.calledOnce).to.equal(true);
    expect(addTask.calledWith(description)).to.equal(true);
  });

  it('should trigger toggleTask() prop func when handleTaskToggle() invoked', () => {
    const toggleTask = sinon.spy();

    const wrapper = setup({ toggleTask });

    const id = 1;

    wrapper.instance().handleTaskToggle(id);

    expect(toggleTask.calledOnce).to.equal(true);
    expect(toggleTask.calledWith(id)).to.equal(true);
  });

  it('should trigger deleteTask() prop func when handleTaskDelete() invoked', () => {
    const deleteTask = sinon.spy();

    const wrapper = setup({ deleteTask });

    const id = 2;

    wrapper.instance().handleTaskDelete(id);

    expect(deleteTask.calledOnce).to.equal(true);
    expect(deleteTask.calledWith(id)).to.equal(true);
  });
});
