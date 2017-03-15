import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Form from '../../../src/components/Todo/Form';

const setup = () => {
  const props = {
    onTaskAdd: () => {},
  };

  return shallow(<Form {...props} />);
};

describe('Component | ToDo | Form', () => {
  it('renders', () => {
    const form = setup();

    expect(form.find('form')).to.have.lengthOf(1);
    expect(form.find('input')).to.have.lengthOf(1);
    expect(form.find('button').text()).to.equal('Add');
  });
});

