import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Search.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  updateInputValue = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  enableScan = () => {
    const { value } = this.state;
    const { search } = this.props;
    if (value !== '') search(value);
  }

  render() {
    const { value } = this.state;
    return (
      <div className={style.search}>
        <form className={style.search_form}>
          <input
            type="text"
            placeholder="Search here..."
            value={value}
            className={style.search_text}
            onChange={(event) => this.updateInputValue(event)}
          />
          <button type="button" id="push" onClick={this.enableScan} className={style.search_button}>
            <svg className={style.icon__search} xlinkHref="#icon__search">
              <symbol id="icon__search" viewBox="-75 -9 120 120">
                <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
              </symbol>
              <use xlinkHref="#icon__search" />
            </svg>
          </button>
        </form>
      </div>
    );
  }
}

Search.defaultProps = {
  search: () => { },
};

Search.propTypes = {
  search: PropTypes.func,
};

export default Search;
