import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  // field.input contains bunch of event handler such as onBlur, onFocus
  // ... to show that I want the object properties of field.input communicate with input as props
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>

        <input
          className="form-control"
          type = "text"
          {...field.input}
        />

      {field.meta.touched ? field.meta.error : ''}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    // handlesubmit function is a property that is passed on behave of reduxForm
    // since we wire up PostsNew component with reduxForm
    // reduxForm only responsible to handle state and value validate
    const { handleSubmit } = this.props;

    return (
      <div>
        <h1>Create New Post</h1>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label = "Title for Post"
            name = "title"
            component = {this.renderField}
          />

          <Field
            label = "Categories"
            name = "categories"
            component = {this.renderField}
          />

          <Field
            label = "Post content"
            name = "content"
            component = {this.renderField}
          />

        <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    )
  }
};

function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = "Enter a title please";
  }

  if(!values.categories) {
    errors.categories = "Enter at least one category please";
  }


  if(!values.content) {
    errors.content = "Enter post content please";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
