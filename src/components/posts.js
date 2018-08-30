import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPost;
  }

  render() {
    return (
      <div>
        <h1>Create New Post</h1>
      </div>
    )
  }
}

export default connect(null, { fetchPost })(Posts);
