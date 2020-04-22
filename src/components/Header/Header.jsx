import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Header.scss';
import Search from '../Search';
import Film from '../Film';
import Info from '../Info';

class Header extends Component {
  componentDidMount() {
    const { LoadMostPopularFilm, LoadGenreList } = this.props;
    LoadGenreList();
    LoadMostPopularFilm();
  }

  render() {
    const { mostPopularFilm, genList, genres } = this.props;
    if (mostPopularFilm.backdrop_path !== undefined && genList !== undefined) {
      return (
        <div
          className={style.header}
          id="space"
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${mostPopularFilm.backdrop_path})` }}
        >
          <div className={style.search__line}>
            <big className={style.title}>FILMS</big>
            <Search />
          </div>
          <div className={style.film__data}>
            <Film
              name={mostPopularFilm.title}
              genrePtime={genres}
              rating={mostPopularFilm.vote_average}
            />
            <Info />
          </div>
        </div>
      );
    }
    return (
      <div className={style.header}>
        <span className={style.loading}>loading presentation...</span>
      </div>
    );
  }
}

Header.defaultProps = {
  LoadMostPopularFilm: () => {},
  LoadGenreList: () => {},
  mostPopularFilm: {},
  genList: {},
  genres: {},
};

Header.propTypes = {
  LoadMostPopularFilm: PropTypes.func,
  LoadGenreList: PropTypes.func,
  mostPopularFilm: PropTypes.objectOf(PropTypes.any),
  genList: PropTypes.objectOf(PropTypes.any),
  genres: PropTypes.objectOf(PropTypes.any),
};

export default Header;
