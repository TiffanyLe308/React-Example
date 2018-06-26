import React, { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import Post from '../components/post';

export default class Book extends Component {
  render() {
    return (
      <div className="book-list">
        <BookList />
        <BookDetail />
        <Post />
      </div>
    )
  }
}
