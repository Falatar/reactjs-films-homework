import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './MoviewList.scss';
import FilmData from '../FilmData';

class MoviewList extends Component {
  componentDidMount() {
    const { getFilmList, loadGenreList } = this.props;
    loadGenreList();
    getFilmList();
  }

  render() {
    const { base, genList, genGenreString } = this.props;
    if (base[0] !== undefined && genList.genres !== undefined) {
      return (
        <div className={style.List}>
          {base.map((item) => (
            <FilmData
              id={item.id}
              name={item.title}
              imgURL={item.backdrop_path}
              rating={item.vote_average / 2}
              tagList={genGenreString(genList.genres, item.genre_ids)}
              overview={item.overview}
              key={item.id}
            />
          ))}
        </div>
      );
    }
    return (
      <div className={classNames(style.List, style.EmptyList)}>
        <span className={style.Loading}>Loading...</span>
      </div>
    );
  }
}

MoviewList.defaultProps = {
  genGenreString: () => {},
  base: {},
  genList: {},
  loadGenreList: () => {},
  getFilmList: () => {},
};

MoviewList.propTypes = {
  genGenreString: PropTypes.func,
  base: PropTypes.objectOf(PropTypes.any),
  genList: PropTypes.objectOf(PropTypes.any),
  loadGenreList: PropTypes.func,
  getFilmList: PropTypes.func,
};

export default MoviewList;
