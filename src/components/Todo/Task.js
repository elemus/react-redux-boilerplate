import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Task = props => (
  <li className={classNames('list-group-item justify-content-between flex-nowrap', { 'bg-faded': props.isDone })}>
    <form className="form-inline">
      <div className="d-flex w-100">
        <div className="custom-control custom-checkbox my-1 mr-sm-2">
          <input
            type="checkbox"
            id={`Toggle${props.id}`}
            className="custom-control-input"
            onClick={() => props.onToggle(props.id)}
          />
          <label className="custom-control-label" htmlFor={`Toggle${props.id}`}>{!props.isDone ? props.description : <del>{props.description}</del>}</label>
        </div>
        <div className="ml-auto">
          <button
            type="submit"
            className="js-delete btn btn-secondary btn-sm btn-danger"
            onClick={() => props.onDelete(props.id)}
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
