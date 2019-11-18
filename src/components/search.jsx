import React, { Component } from 'react';

class Search extends Component {
  updateSearch = (event) => {
    this.props.search(event.target.value);
  }

  render() {
    return (
      <input className="form-search form-control" type="text" onChange={this.updateSearch} />
    );
  }
}

export default Search;
