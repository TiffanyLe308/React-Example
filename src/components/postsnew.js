import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  render() {
    return (
      <div>
        <h1>Create New Post</h1>
        <form>
          <Field
            name = "title"
            component = {}
          />
        </form>
      </div>
    )
  }
};

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
