import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ToDo from '../../../src/components/Todo';

const setup = (props = {
  tasks: [],
  onTaskAdd() {},
  onTaskToggle() {},
  onTaskDelete() {},
}) => shallow(<ToDo {...props} />);

describe('Component | ToDo', () => {
  it('renders', () => {
    const wrapper = setup();

    expect(wrapper.find('h1').text()).to.equal('ToDo list');
  });
});
