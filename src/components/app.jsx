import React, { Component } from 'react';
import giphy from 'giphy-api';

import Search from './search';
import Gif from './gif';
import GifsList from './gifsList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGidId: 'CoDp6NnSmItoY'
    };
  }

  search = (query) => {
    giphy('pWFNA7rHMNsclKKILA2vJpWFmJeYa2sf').search({
      q: query,
      rating: 'g'
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  gifDisplayed = (id) => {
    this.setState({
      selectedGidId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <Search search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGidId} />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifsList gifs={this.state.gifs} selectedGif={this.gifDisplayed} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
