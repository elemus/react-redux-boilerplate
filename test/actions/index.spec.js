import { expect } from 'chai';
import * as actions from '../../src/actions';

describe('Actions | Tasks', () => {
  it('should create an add action', () => {
    const payload = { description: 'Test' };
    const expectedAction = {
      type: actions.ADD_TASK,
      payload
    };

    expect(actions.addTask(payload)).to.eql(expectedAction);
  });

  it('should create a toggle action', () => {
    const id = 123;

    const expectedAction = {
      type: actions.TOGGLE_TASK,
      id,
    };

    expect(actions.toggleTask(id)).to.eql(expectedAction);
  });

  it('should create a delete action', () => {
    const id = 321;

    const expectedAction = {
      type: actions.DELETE_TASK,
      id,
    };

    expect(actions.deleteTask(id)).to.eql(expectedAction);
  });
});
