export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const addTask = (description) => ({
  type: ADD_TASK,
  description,
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  id,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  id,
});
