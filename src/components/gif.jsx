import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img className="gif" src={src} alt="gif" />
    );
  }
}

export default Gif;
