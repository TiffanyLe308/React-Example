import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
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
  // Whatever is return will show up as props inside of BookList
  return {
      books: state.books
  };
}

// Anything returned from this function will end up as props in the container BookList
function mapDispatchToProps(dispatch) {
  // Whenerver selectBook is called, the result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
