import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Task from '../../../src/components/Todo/Task';
import TaskList from '../../../src/components/Todo/TaskList';

const setup = props => shallow(<TaskList {...props} />);

describe('Component | Todo | TaskList', () => {
  it('renders', () => {
    const tasks = [
      {
        id: 1,
        description: 'test 1',
        isDone: false,
      },
      {
        id: 2,
        description: 'test 2',
        isDone: true,
      },
    ];

    const wrapper = setup({
      tasks,
      onTaskToggle() {},
      onTaskDelete() {},
    });

    expect(wrapper.find('ul')).to.have.lengthOf(1);
    expect(wrapper.find(Task)).to.have.lengthOf(tasks.length);
  });
});
