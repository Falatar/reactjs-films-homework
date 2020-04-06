import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Topper.scss';
import Search from '../Search';
import Film from '../Film';
import Info from '../Info';

class Topper extends Component {
  constructor(props) {
    super(props);
    const { loadLatest, loadList } = this.props;
    loadList();
    loadLatest();
  }

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
    const { latestFilm, genList } = this.props;
    if (latestFilm.results !== undefined && genList.genres !== undefined) {
      return (
        <div
          className={style.topper}
          id="space"
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${latestFilm.results[0].backdrop_path})` }}
        >
          <div className={style.searchLine}>
            <big className={style.Title}>FILMS</big>
            <Search />
          </div>
          <div className={style.filmData}>
            <Film
              name={latestFilm.results[0].title}
              genrePtime={this.genGenreString(genList.genres, latestFilm.results[0].genre_ids)}
              rating={latestFilm.results[0].vote_average / 2}
            />
            <Info />
          </div>
        </div>
      );
    }
    return (
      <div className={style.topper}>
        <span className={style.Loading}>loading presentation...</span>
      </div>
    );
  }
}

Topper.defaultProps = {
  loadLatest: () => {},
  loadList: () => {},
  latestFilm: {},
  genList: {},
};

Topper.propTypes = {
  loadLatest: PropTypes.func,
  loadList: PropTypes.func,
  latestFilm: PropTypes.objectOf(PropTypes.any),
  genList: PropTypes.objectOf(PropTypes.any),
};

export default Topper;
