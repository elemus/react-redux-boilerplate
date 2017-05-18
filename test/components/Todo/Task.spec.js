import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Task from '../../../src/components/Todo/Task';

const setup = (props) => {
  const defaultProps = {
    id: 0,
    description: '',
    isDone: false,
    onToggle() {},
    onDelete() {},
  };

  return shallow(<Task {...Object.assign({}, defaultProps, props)} />);
};

describe('Component | Todo | Task', () => {
  it('renders', () => {
    const description = 'test';
    const wrapper = setup({ description });

    expect(wrapper.find('li').length).to.equal(1);
    expect(wrapper.find('.js-description').text()).to.equal(description);
  });

  it('should show text in del tag if task is done', () => {
    const description = 'test';
    const wrapper = setup({ description, isDone: true });

    expect(wrapper.find('.js-description > del').length).to.equal(1);
    expect(wrapper.find('.js-description > del').text()).to.equal(description);
  });

  it('should call onToggle() when Done button clicked', () => {
    const id = 1;
    const onToggle = sinon.spy();
    const wrapper = setup({ id, onToggle });

    wrapper.find(`.js-toggle`).simulate('click');

    expect(onToggle.calledOnce).to.equal(true);
    expect(onToggle.calledWith(id)).to.equal(true);
  });

  it('should call onDelete() when Delete button clicked', () => {
    const id = 2;
    const onDelete = sinon.spy();
    const wrapper = setup({ id, onDelete });

    wrapper.find('.js-delete').simulate('click');

    expect(onDelete.calledOnce).to.equal(true);
    expect(onDelete.calledWith(id)).to.equal(true);
  });
});
