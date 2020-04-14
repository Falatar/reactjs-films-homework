import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Header from './components/Header';
import MoviewList from './components/MoviewList';
import ModalWindow from './components/ModalWindow';

class App extends Component {
  genGenreString = (genres, filmGenres) => {
    let result = '';
    filmGenres.forEach((elem) => {
      const genre = genres.find((type) => {
        if (type.id === elem) return true;
        return false;
      });
      result = result.concat(genre.name, ' ');
    });
    return result.slice(0, -1);
  }

  render() {
    return (
      <div>
        <Header genGenreString={this.genGenreString} />
        <MoviewList genGenreString={this.genGenreString} />
        <ModalWindow />
      </div>
    );
  }
}

export default hot(App);
