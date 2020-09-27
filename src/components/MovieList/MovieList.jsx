/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './MovieList.scss';
import FilmBlock from '../FilmBlock';
import FilmList from '../FilmList';

class MovieList extends Component {
  componentDidMount() {
    const { loadGenreList } = this.props;
    loadGenreList();
  }

  loadFoundation = async () => {
    const {
      getFilmList, switchMode, switchGenre, match, switchPage, updateActualView, saveSearchStr,
    } = this.props;
    saveSearchStr('');
    if (match.params && match.params.filter) switchMode(match.params.filter);
    else switchMode('Trending');
    if (match.params && match.params.genre) switchGenre(match.params.genre);
    else switchGenre(0);
    if (match.params && match.params.page) switchPage(parseInt(match.params.page, 10));
    if (match.params && match.params.mode) updateActualView(match.params.mode);
    await getFilmList();
  }

  loadSearchResults = async () => {
    const {
      match, switchPage, updateActualView, search, switchMode, saveSearchStr,
    } = this.props;
    switchPage(parseInt(match.params.page, 10));
    saveSearchStr(match.params.search_str);
    switchMode('');
    updateActualView(match.params.view);
    await search(match.params.search_str);
  }

  render() {
    const {
      match, filmList, searchResult,
    } = this.props;
    let mode = 'Block';
    if (match.url === '/' || (match.params && match.params.filter)) {
      this.loadFoundation();
      mode = match.params && match.params.mode ? match.params.mode : 'Block';
    } else if (match.params && match.params.search_str) {
      this.loadSearchResults();
      mode = match.params && match.params.view ? match.params.view : 'Block';
    }
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
          {filmList.map((item) => {
            if (mode === 'Block') {
              return (
                <FilmBlock
                  id={item.id}
                  name={item.title}
                  imgURL={item.backdrop_path}
                  rating={item.vote_average}
                  tagList={item.genre_str}
                  overview={item.overview}
                  key={item.id}
                />
              );
            }
            return (
              <FilmList
                id={item.id}
                name={item.title}
                imgURL={item.backdrop_path}
                rating={item.vote_average}
                tagList={item.genre_str}
                overview={item.overview}
                key={item.id}
              />
            );
          })}
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
  match: {},
  searchResult: true,
  getFilmList: () => 'can\'t find getFilmList function',
  switchMode: () => 'can\'t find switchMode function',
  switchGenre: () => 'can\'t find switchGenre function',
  switchPage: () => 'can\'t find switchPage function',
  updateActualView: () => 'can\'t find switchPage function',
  search: () => 'can\'t find search function',
  loadGenreList: () => 'can\'t find loadGenreList function',
  saveSearchStr: () => 'can\'t find saveSearchStr function',
};

MovieList.propTypes = {
  filmList: PropTypes.array,
  match: PropTypes.object,
  searchResult: PropTypes.bool,
  getFilmList: PropTypes.func,
  switchMode: PropTypes.func,
  switchGenre: PropTypes.func,
  switchPage: PropTypes.func,
  updateActualView: PropTypes.func,
  search: PropTypes.func,
  loadGenreList: PropTypes.func,
  saveSearchStr: PropTypes.func,
};

export default MovieList;
