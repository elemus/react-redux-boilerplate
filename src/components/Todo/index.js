import React from 'react';
import PropTypes from 'prop-types';
import TaskList from './TaskList';
import Form from './Form';

const Todo = ({
  tasks, onTaskAdd, onTaskToggle, onTaskDelete,
}) => (
  <div className="mt-3 col-xs-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
    <h1>ToDo list</h1>
    <Form
      onTaskAdd={onTaskAdd}
    />
    <TaskList
      tasks={tasks}
      onTaskToggle={onTaskToggle}
      onTaskDelete={onTaskDelete}
    />
  </div>
);

Todo.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  })).isRequired,
  onTaskAdd: PropTypes.func.isRequired,
  onTaskToggle: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};

export default Todo;
