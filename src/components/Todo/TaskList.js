import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TaskList = ({ tasks, onTaskToggle, onTaskDelete }) => {
  const taskNodes = tasks.map(task => (
    <Task
      key={task.id}
      id={task.id}
      description={task.description}
      isDone={task.isDone}
      onToggle={onTaskToggle}
      onDelete={onTaskDelete}
    />
  ));

  return (
    <ul className="list-group">
      {taskNodes}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  })).isRequired,
  onTaskToggle: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};

export default TaskList;
