import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './TabPanel.scss';

class TabPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Trending',
      activeGenre: 0,
      showGenres: false,
    };
  }

  setTrending = () => {
    this.setState(() => ({
      activeTab: 'Trending',
    }));
    const { switchMode, switchGenre } = this.props;
    switchGenre(0);
    switchMode('Trending');
  }

  setTop = () => {
    this.setState(() => ({
      activeTab: 'Top',
    }));
    const { switchMode, switchGenre } = this.props;
    switchGenre(0);
    switchMode('Top');
  }

  setComing = () => {
    this.setState(() => ({
      activeTab: 'Coming',
    }));
    const { switchMode, switchGenre } = this.props;
    switchGenre(0);
    switchMode('Coming');
  }

  displayGenres = () => {
    this.setState((state) => ({
      showGenres: !state.showGenres,
    }));
  }

  setGenre = (id) => {
    this.setState((state) => ({
      activeTab: 'Genres',
      activeGenre: id,
      showGenres: !state.showGenres,
    }));
    const { switchMode, switchGenre } = this.props;
    switchGenre(id);
    switchMode('Genres');
  }

  render() {
    const { activeTab, activeGenre, showGenres } = this.state;
    const { genres } = this.props;
    const genreList = genres.map((item) => (
      <button
        type="button"
        className={
          activeGenre === item.id
            ? classNames(style.genre, style.active)
            : style.genre
        }
        onClick={() => this.setGenre(item.id)}
        disabled={activeGenre === item.id}
      >
        {item.name}
      </button>
    ));
    return (
      <div className={style.panel}>
        <div className={style.tabs}>
          <button
            type="button"
            className={activeTab === 'Trending' ? classNames(style.trending_tab, style.active) : style.trending_tab}
            onClick={this.setTrending}
            disabled={activeTab === 'Trending'}
          >
            Trending
          </button>
          <button
            type="button"
            className={activeTab === 'Top' ? classNames(style.top_tab, style.active) : style.top_tab}
            onClick={this.setTop}
            disabled={activeTab === 'Top'}
          >
            Top rated
          </button>
          <button
            type="button"
            className={activeTab === 'Coming' ? classNames(style.coming_tab, style.active) : style.coming_tab}
            onClick={this.setComing}
            disabled={activeTab === 'Coming'}
          >
            Coming soon
          </button>
          <div className={style.dropdown}>
            <button
              type="button"
              className={activeTab === 'Genres' ? classNames(style.genres_tab, style.active) : style.genres_tab}
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
          <button type="button" className={style.view__block}>view 1</button>
          <button type="button" className={style.view__list}>view 2</button>
        </div>
      </div>
    );
  }
}

TabPanel.defaultProps = {
  genres: [],
  switchMode: () => 'can\'t find switchMode function',
  switchGenre: () => 'can\'t find switchGenre function',
};

TabPanel.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  genres: PropTypes.array,
  switchMode: PropTypes.func,
  switchGenre: PropTypes.func,
};

export default TabPanel;
