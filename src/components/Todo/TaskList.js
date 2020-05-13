import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

export const Task = lazy(() => import('./Task'));

const TaskList = ({ tasks, onTaskToggle, onTaskDelete }) => {
  const taskNodes = tasks.map(({ id, description, isDone }) => (
    <Suspense key={id} fallback={<div>Loading...</div>}>
      <Task
        key={id}
        id={id}
        description={description}
        isDone={isDone}
        onToggle={onTaskToggle}
        onDelete={onTaskDelete}
      />
    </Suspense>
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
