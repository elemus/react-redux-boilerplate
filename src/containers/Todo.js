import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTask, toggleTask, deleteTask } from '../actions/tasks';

import TodoComponent from '../components/Todo';

export class TodoContainer extends Component {
  constructor(props) {
    super(props);

    this.handleTaskAdd = this.handleTaskAdd.bind(this);
    this.handleTaskToggle = this.handleTaskToggle.bind(this);
    this.handleTaskDelete = this.handleTaskDelete.bind(this);
  }

  handleTaskAdd(task) {
    const { addTaskAction } = this.props;
    addTaskAction(task);
  }

  handleTaskToggle(id) {
    const { toggleTaskAction } = this.props;
    toggleTaskAction(id);
  }

  handleTaskDelete(id) {
    const { deleteTaskAction } = this.props;
    deleteTaskAction(id);
  }

  render() {
    const { tasks } = this.props;
    return (
      <TodoComponent
        tasks={tasks}
        onTaskAdd={this.handleTaskAdd}
        onTaskToggle={this.handleTaskToggle}
        onTaskDelete={this.handleTaskDelete}
      />
    );
  }
}

TodoContainer.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  })).isRequired,
  addTaskAction: PropTypes.func.isRequired,
  toggleTaskAction: PropTypes.func.isRequired,
  deleteTaskAction: PropTypes.func.isRequired,
};

function mapStateToProps({ tasks }) {
  return tasks;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTaskAction: addTask,
    toggleTaskAction: toggleTask,
    deleteTaskAction: deleteTask,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
