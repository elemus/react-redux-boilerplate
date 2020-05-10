import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = { description: '' };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ description: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const { onTaskAdd } = this.props;
    const { description } = this.state;

    onTaskAdd(description.trim());

    this.setState({ description: '' });
  }

  render() {
    const { description } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="row">
          <div className="form-group col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Do something..."
              value={description}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-primary w-100">Add</button>
          </div>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  onTaskAdd: PropTypes.func.isRequired,
};

export default Form;
