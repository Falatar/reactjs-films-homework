import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import style from './TabPanel.scss';
import table from '../../static/table.svg';
import list from '../../static/list.svg';

class TabPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGenres: false,
    };
  }

  hideGenreList = () => {
    const { showGenres } = this.state;
    if (showGenres) this.displayGenres();
  }

  displayGenres = () => {
    this.setState((state) => ({
      showGenres: !state.showGenres,
    }));
  }

  setGenre = (id) => {
    const { switchGenre } = this.props;
    switchGenre(id);
    this.setState((state) => ({
      showGenres: !state.showGenres,
    }));
  }

  switchViewMode = () => {
    const { updateActualView, activeView } = this.props;
    const newMode = activeView === 'Block' ? 'List' : 'Block';
    updateActualView(newMode);
  }

  render() {
    const {
      showGenres,
    } = this.state;
    const {
      genres, activeMode, activeGenre, actualPage, activeView, searchStr,
    } = this.props;
    const genreList = genres.map((item) => (
      <button
        key={item.id}
        type="button"
        className={
          activeGenre === `${item.id}`
            ? classNames(style.genre, style.active)
            : style.genre
        }
        onClick={this.displayGenres}
        disabled={activeGenre === `${item.id}`}
      >
        <Link
          to={{
            pathname: `/1/${activeView}/Genres/${item.id}`,
            state: {
              mode: activeView,
              filter: 'Genres',
              genre: item.id,
            },
          }}
          className={style.link}
        >
          {item.name}
        </Link>
      </button>
    ));
    return (
      <div className={style.panel}>
        <div className={style.tabs}>
          <button
            type="button"
            className={activeMode === 'Trending' ? classNames(style.trending_tab, style.active) : style.trending_tab}
            onClick={this.hideGenreList}
            disabled={activeMode === 'Trending'}
          >
            <Link
              to={{
                pathname: `/${actualPage}/${activeView}/Trending`,
                state: {
                  mode: activeView,
                  filter: 'Trending',
                },
              }}
              className={style.link}
            >
              Trending
            </Link>
          </button>
          <button
            type="button"
            className={activeMode === 'Top' ? classNames(style.top_tab, style.active) : style.top_tab}
            onClick={this.hideGenreList}
            disabled={activeMode === 'Top'}
          >
            <Link
              to={{
                pathname: `/1/${activeView}/Top`,
                state: {
                  mode: activeView,
                  filter: 'Top',
                },
              }}
              className={style.link}
            >
              Top rated
            </Link>
          </button>
          <button
            type="button"
            className={activeMode === 'Coming' ? classNames(style.coming_tab, style.active) : style.coming_tab}
            onClick={this.hideGenreList}
            disabled={activeMode === 'Coming'}
          >
            <Link
              to={{
                pathname: `/1/${activeView}/Coming`,
                state: {
                  mode: activeView,
                  filter: 'Coming',
                },
              }}
              className={style.link}
            >
              Coming
            </Link>
          </button>
          <div className={style.dropdown}>
            <button
              type="button"
              className={activeMode === 'Genres' ? classNames(style.genres_tab, style.active) : style.genres_tab}
              onClick={this.displayGenres}
            >
              Genre
            </button>
            <div className={
              showGenres
                ? classNames(style.genre__list, style.show)
                : style.genre__list
            }
            >
              {genreList}
            </div>
          </div>
        </div>
        <div className={style.view}>
          <button
            type="button"
            className={
              activeView === 'Block'
                ? classNames(style.view__block, style.active)
                : style.view__block
            }
            onClick={this.switchViewMode}
            disabled={activeView === 'Block'}
          >
            <Link
              to={!searchStr.length
                ? `/${actualPage}/Block/${activeMode}${activeMode === 'Genres' ? `/${activeGenre}` : ''}`
                : `/search/${searchStr}/${actualPage}/Block`}
              className={style.link}
            >
              <svg className={style.svg_block}>
                <use xlinkHref={table} className={style.svg_block_use} />
              </svg>
            </Link>
          </button>
          <button
            type="button"
            className={
              activeView === 'List'
                ? classNames(style.view__list, style.active)
                : style.view__list
            }
            onClick={this.switchViewMode}
            disabled={activeView === 'List'}
          >
            <Link
              to={!searchStr.length
                ? `/${actualPage}/List/${activeMode}${activeMode === 'Genres' ? `/${activeGenre}` : ''}`
                : `/search/${searchStr}/${actualPage}/List`}
              className={style.link}
            >
              <svg className={style.svg_list}>
                <use xlinkHref={list} className={style.svg_block_use} />
              </svg>
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

TabPanel.defaultProps = {
  genres: [],
  activeMode: '',
  activeGenre: '0',
  switchGenre: () => {},
  updateActualView: () => {},
  actualPage: 1,
  activeView: 'Block',
  searchStr: '',
};

TabPanel.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  genres: PropTypes.array,
  activeMode: PropTypes.string,
  activeGenre: PropTypes.string,
  switchGenre: PropTypes.func,
  updateActualView: PropTypes.func,
  actualPage: PropTypes.number,
  activeView: PropTypes.string,
  searchStr: PropTypes.string,
};

export default TabPanel;
