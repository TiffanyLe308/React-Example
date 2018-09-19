import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  componentDidMount() {
    // Fetching post with specific id
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    return (
      <div>
        <h1>Posts Show</h1>
      </div>
    )
  }
}

export default connect(null, { fetchPost })(PostsShow);
