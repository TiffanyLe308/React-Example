import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPostId, deletePost } from '../actions/index';

class PostsShow extends Component {
  componentDidMount() {
    // if aleady have a post list, don't need to refetch again
    if(!this.props.post) {
      // Fetching post with specific id
      const { id } = this.props.match.params;
      this.props.fetchPostId(id);
    }
  }

  onDeletePost() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push("/posts");
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading ...</div>;
    }

    return (
      <div>
        <h1>{post.title}</h1>
        <p className="mt-3">
          <Link className="btn btn-primary" to="/posts">Back to posts list</Link>
          <button
            className="btn btn-danger ml-2"
            onClick={this.onDeletePost.bind(this)}
          >Delete post</button>
        </p>
        <h6>{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// in render() this.props === ownProps

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPostId, deletePost })(PostsShow);
