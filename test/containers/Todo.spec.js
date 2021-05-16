import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import TodoComponent from '../../src/components/Todo';
import { TodoContainer } from '../../src/containers/Todo';

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
    const wrapper = setup();

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
