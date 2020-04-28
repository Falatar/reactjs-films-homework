import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './MovieList.scss';
import FilmData from '../FilmData';

class MovieList extends Component {
  componentDidMount() {
    const { getFilmList } = this.props;
    getFilmList();
  }

  render() {
    const {
      filmList, genList,
    } = this.props;
    if (filmList.length && genList) {
      return (
        <div className={style.list}>
          {filmList.map((item) => (
            <FilmData
              id={item.id}
              name={item.title}
              imgURL={item.backdrop_path}
              rating={item.vote_average / 2}
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
        <span className={style.loading}>Loading...</span>
      </div>
    );
  }
}

MovieList.defaultProps = {
  filmList: [],
  genList: {},
  getFilmList: () => {},
};

MovieList.propTypes = {
  filmList: PropTypes.objectOf(PropTypes.any),
  genList: PropTypes.objectOf(PropTypes.any),
  getFilmList: PropTypes.func,
};

export default MovieList;
