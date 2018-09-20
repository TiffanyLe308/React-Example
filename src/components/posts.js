import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PostsNew from './posts_new';
import { fetchPost } from '../actions/index';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    //console.log(this.props.posts);

    return (
      <div>
        <h1>Posts Archive</h1>
        <p><Link className="btn btn-primary" to="/posts/new">Add a post</Link><Link className="btn btn-danger ml-2" to="/">Cancel</Link></p>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPost })(Posts);
