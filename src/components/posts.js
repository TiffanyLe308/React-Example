import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { Link } from 'react-router-dom';

import PostsNew from './postsnew';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPost;
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>{post.title}</li>
      );
    })
  }

  render() {
    return (
      <div>
        <h1>Posts Archive</h1>
        <p><Link className="btn btn-primary" to="/posts/new">Add a post</Link></p>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

export default connect(null, { fetchPost })(Posts);
