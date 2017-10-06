import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Task = props => (
  <li className={classNames('list-group-item justify-content-between flex-nowrap', { 'bg-faded': props.isDone })}>
    <label className="custom-control custom-checkbox" htmlFor={`Toggle${props.id}`}>
      <input
        type="checkbox"
        id={`Toggle${props.id}`}
        className="js-toggle custom-control-input"
        onClick={() => props.onToggle(props.id)}
      />
      <span className="custom-control-indicator" />
      <span className="js-description custom-control-description">
        {!props.isDone ? props.description : <del>{props.description}</del>}
      </span>
    </label>
    <button
      onClick={() => props.onDelete(props.id)}
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
