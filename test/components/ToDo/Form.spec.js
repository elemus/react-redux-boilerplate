const React = require('react');
const expect = require('chai').expect;
const shallow = require('enzyme').shallow;
const Form = require('../../../src/components/Todo/Form').default;

const setup = () => {
  const props = {
    onTaskCreate: () => {},
  };

  return shallow(<Form {...props} />);
};

describe('Component ToDo Form', () => {
  it('renders', () => {
    const form = setup();

    expect(form.find('form').length).to.equal(1);
    expect(form.find('input').length).to.equal(1);
    expect(form.find('button').text()).to.equal('Add');
  });
});

