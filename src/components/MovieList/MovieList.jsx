import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './MovieList.scss';
import FilmBlock from '../FilmBlock';

class MovieList extends Component {
  componentDidMount() {
    const { getFilmList } = this.props;
    getFilmList();
  }

  render() {
    const {
      filmList,
      searchResult,
    } = this.props;
    if (!searchResult) {
      return (
        <div className={classNames(style.list, style.empty_list)}>
          <span className={style.notice}>There are 0 results for your request</span>
        </div>
      );
    }
    if (filmList.length) {
      return (
        <div className={style.list}>
          {filmList.map((item) => (
            <FilmBlock
              id={item.id}
              name={item.title}
              imgURL={item.backdrop_path}
              rating={item.vote_average}
              tagList={item.genre_str}
              overview={item.overview}
              key={item.id}
            />
          ))}
        </div>
      );
    }
    return (
      <div className={classNames(style.list, style.empty_list)}>
        <span className={style.notice}>Loading...</span>
      </div>
    );
  }
}

MovieList.defaultProps = {
  filmList: [],
  searchResult: true,
  getFilmList: () => {},
};

MovieList.propTypes = {
  filmList: PropTypes.objectOf(PropTypes.any),
  searchResult: PropTypes.bool,
  getFilmList: PropTypes.func,
};

export default MovieList;
