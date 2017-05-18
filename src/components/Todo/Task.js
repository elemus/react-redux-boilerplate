import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Task = ({ id, description, isDone, onToggle, onDelete }) => (
  <li className={classNames('list-group-item justify-content-between flex-nowrap', { 'bg-faded': isDone })}>
    <label className="custom-control custom-checkbox" htmlFor={`Toggle${id}`}>
      <input
        type="checkbox"
        id={`Toggle${id}`}
        className="js-toggle custom-control-input"
        onClick={() => onToggle(id)}
      />
      <span className="custom-control-indicator" />
      <span className="js-description custom-control-description">
        {!isDone ? description : <del>{description}</del>}
      </span>
    </label>
    <button
      onClick={() => onDelete(id)}
      className="js-delete btn btn-secondary btn-sm btn-danger"
    >
      X
    </button>
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
