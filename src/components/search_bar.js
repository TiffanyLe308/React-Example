import React, { Component } from 'react';


export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Type here...'};
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={this.onInputChange} />
        <p>Value of input: {this.state.term}</p>
      </div>
    );
  }
}
