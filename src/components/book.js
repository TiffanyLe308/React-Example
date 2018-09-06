import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import Posts from '../components/posts';

export default class Book extends Component {
  render() {
    return (
      <div className="book-list">
        <div>
          <p><Link className="btn btn-primary" to="/posts">Post list</Link><Link className="btn btn-success ml-2" to="/posts/new">Add a post</Link></p>
        </div>
        <BookList />
        <BookDetail />
      </div>
    )
  }
}
