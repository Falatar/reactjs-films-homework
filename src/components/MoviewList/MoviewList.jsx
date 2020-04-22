import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './MoviewList.scss';
import FilmData from '../FilmData';

class MoviewList extends Component {
  componentDidMount() {
    const { getFilmList } = this.props;
    getFilmList();
  }

  render() {
    const {
      base, genList, genGenreString,
    } = this.props;
    if (base[0] !== undefined && genList !== undefined) {
      return (
        <div className={style.list}>
          {base.map((item) => (
            <FilmData
              id={item.id}
              name={item.title}
              imgURL={item.backdrop_path}
              rating={item.vote_average / 2}
              tagList={genGenreString(genList, item.genre_ids)}
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

MoviewList.defaultProps = {
  genGenreString: () => {},
  base: [],
  genList: {},
  getFilmList: () => {},
};

MoviewList.propTypes = {
  genGenreString: PropTypes.func,
  base: PropTypes.objectOf(PropTypes.any),
  genList: PropTypes.objectOf(PropTypes.any),
  getFilmList: PropTypes.func,
};

export default MoviewList;
