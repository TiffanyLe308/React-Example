import React, { Component } from 'react';
import { connect } from 'react-redux';

// App's state totally different from component's state
class BookDetail extends Component {
  render() {
    if (!this.props.book) {
        return <h2>Select the book you want to read.</h2>;
    }

    return (
      <div>
        <h2>Details for: {this.props.book.title}</h2>
        <p>Pages: {this.props.book.pages}</p>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
