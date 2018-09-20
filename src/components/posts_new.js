import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  // field.input contains bunch of event handler such as onBlur, onFocus
  // ... to show that I want the object properties of field.input communicate with input as props
  renderField(field) {
    const className = `form-control ${field.meta.touched && field.meta.error ? 'is-invalid' : ''}`;

    return (
      <div>
        <div className="form-group">
          <label>{field.label}</label>

          <input
            className="form-control"
            type = "text"
            {...field.input}
          />

        <div className="form-text text-danger">
            {field.meta.touched ? field.meta.error : ''}
          </div>
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/posts"); 
    });
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
        <Link className="btn btn-danger ml-2" to="/posts">Cancel</Link>
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
})(connect(null, { createPost })(PostsNew));
