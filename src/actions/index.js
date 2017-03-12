export const CREATE_TASK = 'CREATE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const createTask = payload => ({
  type: CREATE_TASK,
  payload,
});

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  id,
});

export const deleteTask = id => ({
  type: DELETE_TASK,
  id,
});
