import React, { Component } from 'react';
import { connect } from 'react-redux';

// import BookListItem from './book-list-item';

class Booklist extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="col-md-6 list-group">
        {this.renderList()}
      </ul>
    )
  }
};

function mapStateToProps(state) {
  // Whatever is return will show up as props inside of Booklist
  return {
      books: state.books
  };
}

export default connect(mapStateToProps)(Booklist);
