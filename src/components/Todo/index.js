import React, { PropTypes } from 'react';
import TaskList from './TaskList';
import Form from './Form';

const Todo = props => (
  <div className="mt-3 col-xs-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
    <h1>ToDo list</h1>
    <Form
      onTaskAdd={props.onTaskAdd}
    />
    <TaskList
      tasks={props.tasks}
      onTaskToggle={props.onTaskToggle}
      onTaskDelete={props.onTaskDelete}
    />
  </div>
);

Todo.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    isDone: PropTypes.bool,
  })).isRequired,
  onTaskAdd: PropTypes.func.isRequired,
  onTaskToggle: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};

export default Todo;
