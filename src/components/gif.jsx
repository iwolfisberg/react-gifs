import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img className="gif" src={src} alt="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
