import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Form from '../../../src/components/Todo/Form';

const setup = (props = { onTaskAdd() {}}) => {
  const { onTaskAdd } = props;

  const componentProps = {
    onTaskAdd,
  };

  return shallow(<Form {...componentProps} />);
};

describe('Component | ToDo | Form', () => {
  it('renders', () => {
    const form = setup();

    expect(form.find('form')).to.have.lengthOf(1);
    expect(form.find('input')).to.have.lengthOf(1);
    expect(form.find('button').text()).to.equal('Add');
  });

  it('should change state on input event', () => {
    const form = setup();
    const description = 'test task';

    form.find('input').simulate('input', { target: { value: description } });

    expect(form.state().description).to.equal(description);
  });

  it('should call onTaskAdd() on form submit', () => {
    const onTaskAdd = sinon.spy();
    const form = setup({ onTaskAdd });

    form.find('form').simulate('submit', { preventDefault() {} });

    expect(onTaskAdd.calledOnce).to.equal(true);
    expect(form.state().description).to.equal('');
  });
});
