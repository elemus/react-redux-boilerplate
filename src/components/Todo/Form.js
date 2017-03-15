import React, { Component, PropTypes } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = { description: '' };

    this.onInput = this.onInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInput(e) {
    this.setState({ description: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const id = Date.now();
    const description = this.state.description.trim();
    const isDone = false;

    this.props.onTaskAdd({ id, description, isDone });
    this.setState({ description: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="row">
          <div className="form-group col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Do something..."
              value={this.state.description}
              onInput={this.onInput}
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
