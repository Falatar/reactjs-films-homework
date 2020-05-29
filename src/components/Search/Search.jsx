import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Search.scss';
import icon from '../../static/search.svg';

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
            <svg className={style.svg}>
              <use xlinkHref={icon} />
            </svg>
          </button>
        </form>
      </div>
    );
  }
}

Search.defaultProps = {
  search: () => 'can\'t find search function',
};

Search.propTypes = {
  search: PropTypes.func,
};

export default Search;
