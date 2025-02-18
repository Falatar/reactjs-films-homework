import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Header.scss';
import Search from '../Search';
import FilmTitle from '../FilmTitle';
import Info from '../Info';

class Header extends Component {
  componentDidMount() {
    const { LoadMostPopularFilm, LoadGenreList } = this.props;
    LoadGenreList();
    LoadMostPopularFilm();
  }

  render() {
    const { mostPopularFilm } = this.props;
    if (mostPopularFilm.title) {
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
            <FilmTitle
              name={mostPopularFilm.title}
              genrePtime={mostPopularFilm.genre_str}
              rating={mostPopularFilm.vote_average}
            />
            <Info
              overview={mostPopularFilm.overview}
              id={mostPopularFilm.id}
            />
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
};

Header.propTypes = {
  LoadMostPopularFilm: PropTypes.func,
  LoadGenreList: PropTypes.func,
  mostPopularFilm: PropTypes.objectOf(PropTypes.any),
};

export default Header;
