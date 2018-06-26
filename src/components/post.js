import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class Post extends Component {
  componentDidMount() {
    this.props.fetchPost;
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
      </div>
    )
  }
}

export default connect(null, { fetchPost })(Post);
