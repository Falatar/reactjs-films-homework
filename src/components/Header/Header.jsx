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
    const { mostPopularFilm, genList, genGenreString } = this.props;
    if (mostPopularFilm.backdrop_path !== undefined && genList.genres !== undefined) {
      return (
        <div
          className={style.Header}
          id="space"
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${mostPopularFilm.backdrop_path})` }}
        >
          <div className={style.searchLine}>
            <big className={style.Title}>FILMS</big>
            <Search />
          </div>
          <div className={style.filmData}>
            <Film
              name={mostPopularFilm.title}
              genrePtime={genGenreString(genList.genres, mostPopularFilm.genre_ids)}
              rating={mostPopularFilm.vote_average / 2}
            />
            <Info />
          </div>
        </div>
      );
    }
    return (
      <div className={style.Header}>
        <span className={style.Loading}>loading presentation...</span>
      </div>
    );
  }
}

Header.defaultProps = {
  genGenreString: () => {},
  LoadMostPopularFilm: () => {},
  LoadGenreList: () => {},
  mostPopularFilm: {},
  genList: {},
};

Header.propTypes = {
  genGenreString: PropTypes.func,
  LoadMostPopularFilm: PropTypes.func,
  LoadGenreList: PropTypes.func,
  mostPopularFilm: PropTypes.objectOf(PropTypes.any),
  genList: PropTypes.objectOf(PropTypes.any),
};

export default Header;
