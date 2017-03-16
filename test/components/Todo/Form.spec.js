import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Form from '../../../src/components/Todo/Form';

const setup = (props = { onTaskAdd() {}}) => {
  return shallow(<Form {...props} />);
};

describe('Component | ToDo | Form', () => {
  it('renders', () => {
    const wrapper = setup();

    expect(wrapper.find('form')).to.have.lengthOf(1);
    expect(wrapper.find('input')).to.have.lengthOf(1);
    expect(wrapper.find('button').text()).to.equal('Add');
  });

  it('should change state on input event', () => {
    const wrapper = setup();
    const description = 'test task';

    wrapper.find('input').simulate('input', { target: { value: description } });

    expect(wrapper.state().description).to.equal(description);
  });

  it('should call onTaskAdd() on form submit', () => {
    const onTaskAdd = sinon.spy();
    const wrapper = setup({ onTaskAdd });

    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(onTaskAdd.calledOnce).to.equal(true);
    expect(wrapper.state().description).to.equal('');
  });
});
