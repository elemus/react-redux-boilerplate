import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Task = ({
  id, description, isDone, onToggle, onDelete,
}) => (
  <li className={classNames('list-group-item justify-content-between flex-nowrap', { 'bg-faded': isDone })}>
    <form className="form-inline">
      <div className="d-flex w-100">
        <div className="custom-control custom-checkbox my-1 mr-sm-2">
          <input
            type="checkbox"
            id={`Toggle${id}`}
            className="js-toggle custom-control-input"
            onClick={() => onToggle(id)}
          />
          <label
            className="js-description custom-control-label"
            htmlFor={`Toggle${id}`}
          >
            {!isDone ? description : <del>{description}</del>}
          </label>
        </div>
        <div className="ml-auto">
          <button
            type="submit"
            className="js-delete btn btn-secondary btn-sm btn-danger"
            onClick={() => onDelete(id)}
          >
            X
          </button>
        </div>
      </div>
    </form>
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
