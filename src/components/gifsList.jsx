import React, { Component } from 'react';
import Gif from './gif';

class GifsList extends Component {
  render() {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={this.props.selectedGif} />);
  }
}

export default GifsList;
