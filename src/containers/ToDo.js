import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

import TodoComponent from '../components/Todo';

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.handleTaskAdd = this.handleTaskAdd.bind(this);
    this.handleTaskToggle = this.handleTaskToggle.bind(this);
    this.handleTaskDelete = this.handleTaskDelete.bind(this);
  }

  handleTaskAdd(task) {
    this.props.addTask(task);
  }

  handleTaskToggle(id) {
    this.props.toggleTask(id);
  }

  handleTaskDelete(id) {
    this.props.deleteTask(id);
  }

  render() {
    return (
      <TodoComponent
        tasks={this.props.tasks}
        onTaskAdd={this.handleTaskAdd}
        onTaskToggle={this.handleTaskToggle}
        onTaskDelete={this.handleTaskDelete}
      />
    );
  }
}

ToDo.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    isDone: PropTypes.bool,
  })).isRequired,
  addTask: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
