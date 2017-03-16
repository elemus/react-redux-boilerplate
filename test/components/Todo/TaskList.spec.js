import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TaskList from '../../../src/components/Todo/TaskList';

const setup = (props = {
  tasks: [],
  onTaskToggle() {},
  onTaskDelete() {},
}) => shallow(<TaskList {...props} />);

describe('Component | ToDo | TaskList', () => {
  it('renders', () => {
    const wrapper = setup();

    expect(wrapper.find('ul').length).to.equal(1);
  });
});
