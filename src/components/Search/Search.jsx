import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './Search.scss';
import icon from '../../static/search.svg';

class Search extends Component {
  updateInputValue = (event) => {
    const { saveSearchStr } = this.props;
    saveSearchStr(event.target.value);
  }

  render() {
    const {
      activeMode, activeGenre, actualPage, activeView, searchStr,
    } = this.props;
    return (
      <div className={style.search__line}>
        <big className={style.title}>FILMS</big>
        <div className={style.search}>
          <form className={style.search_form}>
            <input
              type="text"
              placeholder="Search here..."
              value={searchStr}
              className={style.search_text}
              onChange={(event) => this.updateInputValue(event)}
            />
            <button
              type="button"
              id="push"
              className={style.search_button}
              disabled={searchStr.length === 0}
            >
              <Link
                to={`/${searchStr.length > 0
                  ? `search/${searchStr}/${actualPage}/${activeView}`
                  : `${actualPage}/${activeView}/${activeMode}${activeMode === 'Genres' ? `/${activeGenre}` : ''}`}`}
              >
                <svg className={style.svg}>
                  <use xlinkHref={icon} />
                </svg>
              </Link>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Search.defaultProps = {
  activeMode: '',
  activeGenre: '0',
  actualPage: 1,
  activeView: 'Block',
  searchStr: '',
  saveSearchStr: () => {},
};

Search.propTypes = {
  activeMode: PropTypes.string,
  activeGenre: PropTypes.string,
  actualPage: PropTypes.number,
  activeView: PropTypes.string,
  searchStr: PropTypes.string,
  saveSearchStr: PropTypes.func,
};

export default Search;
