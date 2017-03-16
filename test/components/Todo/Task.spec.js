import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Task from '../../../src/components/Todo/Task';

const setup = (props = {
  id: 0,
  description: '',
  isDone: false,
  onToggle() {},
  onDelete() {},
}) => shallow(<Task {...props} />);

describe('Component | ToDo | TaskList', () => {
  it('renders', () => {
    const wrapper = setup();

    expect(wrapper.find('li').length).to.equal(1);
  });
});
