import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Task = ({ id, description, isDone, onToggle, onDelete }) => (
  <li className={classNames('list-group-item', { 'bg-faded': isDone })} >
    <span>{!isDone ? description : <del>{description}</del>}</span>

    <div className="ml-auto">
      <button
        type="button"
        onClick={() => onToggle(id)}
        className={classNames('btn btn-secondary btn-sm', {
          'btn-success': !isDone,
        })}
      >
        {!isDone ? 'Done' : 'Todo'}
      </button>
      <button
        type="button"
        onClick={() => onDelete(id)}
        className="btn btn-secondary btn-sm btn-danger ml-1"
      >
        Delete
      </button>
    </div>
  </li>
);

Task.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
