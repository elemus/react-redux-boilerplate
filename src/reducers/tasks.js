import {
  ADD_TASK,
  TOGGLE_TASK,
  DELETE_TASK,
} from '../actions/tasks';

export const initialState = { tasks: [] };

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        tasks: [
          ...state.tasks,
          {
            id: state.tasks.reduce((maxId, task) => Math.max(task.id, maxId), 0) + 1,
            description: action.description,
            isDone: false,
          },
        ],
      };

    case TOGGLE_TASK:
      return {
        tasks: state.tasks.map((task) => (
          task.id !== action.id ? task : { ...task, ...{ isDone: !task.isDone } }
        )),
      };

    case DELETE_TASK:
      return {
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };

    default:
      return state;
  }
}
