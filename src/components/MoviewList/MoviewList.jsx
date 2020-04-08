import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './MoviewList.scss';
import FilmData from '../FilmData';

class MoviewList extends Component {
  componentDidMount() {
    const { setFilm, loadList } = this.props;
    loadList();
    setFilm();
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
    const { base, genList } = this.props;
    if (base.results !== undefined && genList.genres !== undefined) {
      return (
        <div className={style.List}>
          {base.results.slice(0, 12).map((item) => (
            <FilmData
              id={item.id}
              name={item.title}
              imgURL={item.backdrop_path}
              rating={item.vote_average / 2}
              tagList={this.genGenreString(genList.genres, item.genre_ids)}
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
  base: {},
  genList: {},
  loadList: () => {},
  setFilm: () => {},
};

MoviewList.propTypes = {
  base: PropTypes.objectOf(PropTypes.any),
  genList: PropTypes.objectOf(PropTypes.any),
  loadList: PropTypes.func,
  setFilm: PropTypes.func,
};

export default MoviewList;
