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
    addTaskAction() {},
    toggleTaskAction() {},
    deleteTaskAction() {},
  };

  return shallow(<TodoContainer {...Object.assign({}, defaultProps, props)} />);
};

describe('Container | Todo', () => {
  it('renders', () => {
    const props = {
      store: configureStore()
    };

    const wrapper = mount(<TodoConnected {...props}/>);

    expect(wrapper.find(TodoComponent)).to.have.lengthOf(1);
  });

  it('should trigger addTask() prop func when handleTaskAdd() invoked', () => {
    const addTaskAction = sinon.spy();

    const wrapper = setup({ addTaskAction });

    const description = 'New task';

    wrapper.instance().handleTaskAdd(description);

    expect(addTaskAction.calledOnce).to.equal(true);
    expect(addTaskAction.calledWith(description)).to.equal(true);
  });

  it('should trigger toggleTask() prop func when handleTaskToggle() invoked', () => {
    const toggleTaskAction = sinon.spy();

    const wrapper = setup({ toggleTaskAction });

    const id = 1;

    wrapper.instance().handleTaskToggle(id);

    expect(toggleTaskAction.calledOnce).to.equal(true);
    expect(toggleTaskAction.calledWith(id)).to.equal(true);
  });

  it('should trigger deleteTask() prop func when handleTaskDelete() invoked', () => {
    const deleteTaskAction = sinon.spy();

    const wrapper = setup({ deleteTaskAction });

    const id = 2;

    wrapper.instance().handleTaskDelete(id);

    expect(deleteTaskAction.calledOnce).to.equal(true);
    expect(deleteTaskAction.calledWith(id)).to.equal(true);
  });
});
