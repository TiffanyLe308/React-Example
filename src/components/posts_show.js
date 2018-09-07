import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  render() {
    return (
      <div>
        <h1>Posts Show</h1>
      </div>
    )
  }
}

export default PostsShow;
