import { expect } from 'chai';
import * as actions from '../../src/actions';
import reducer from '../../src/reducers';

describe('Reducer | Tasks', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.eql({ tasks: [] });
  });

  it('should add task when addTask() action invoked', () => {
    const initialState = {
      tasks: [
        {
          id: 1,
          description: 'test',
          isDone: false,
        },
      ]
    };

    const description = 'Test task';

    const action = actions.addTask(description);

    const nextState = reducer(initialState, action);

    expect(nextState.tasks).to.eql([
      ...initialState.tasks,
      {
        id: 2,
        description,
        isDone: false,
      },
    ]);
  });

  it('should toggle status of the task when toggleTask() action invoked', () => {
    const initialState = {
      tasks: [
        {
          id: 1,
          description: 'Test task 1',
          isDone: false,
        },
        {
          id: 2,
          description: 'Test task 2',
          isDone: true,
        },
      ]
    };

    const action1 = actions.toggleTask(1);
    const action2 = actions.toggleTask(2);

    let nextState = reducer(initialState, action1);
    nextState = reducer(nextState, action2);

    expect(nextState.tasks.find(task => task.id === 1).isDone).to.equal(true);
    expect(nextState.tasks.find(task => task.id === 2).isDone).to.equal(false);
  });

  it('should delete task when deleteTask() action invoked', () => {
    const initialState = {
      tasks: [
        {
          id: 1,
          description: 'Test task 1',
          isDone: false,
        },
        {
          id: 2,
          description: 'Test task 2',
          isDone: true,
        },
      ]
    };

    const action = actions.deleteTask(1);

    const nextState = reducer(initialState, action);

    expect(nextState.tasks).to.have.lengthOf(1);
    expect(nextState.tasks.find(task => task.id === 1)).to.be.a('undefined');
    expect(nextState.tasks.find(task => task.id === 2)).to.be.a('object');
  });
});
