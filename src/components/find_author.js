import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { findAuthor } from '../actions';
import _ from 'lodash';

class FindAuthor extends Component {
  renderAuthor(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
      </div>
    );
  }

  onSubmit(values) {
    this.props.findAuthor(values, () => {
      this.props.history.push('/show');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Find By Author"
            name="author"
            component={this.renderAuthor}
          />
          <button type="submit" className="btn btn-primary">
            Find Author
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.author) {
    errors.author = 'Enter author name';
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'FindAuthor'
})(connect(null, { findAuthor })(FindAuthor));
