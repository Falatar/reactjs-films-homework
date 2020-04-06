import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './FilmData.scss';

class FilmData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsMode: false,
    };
    this.switchMode = this.switchMode.bind(this);
  }

  switchMode = () => {
    this.setState((state) => ({
      detailsMode: !state.detailsMode,
    }));
  }

  callModal = () => {
    const { openModal, setTrailer, id } = this.props;
    setTrailer(id);
    openModal();
  }

  render() {
    const {
      imgURL, id, name, tagList, rating, overview,
    } = this.props;
    const { detailsMode } = this.state;
    if (!detailsMode) {
      return (
        <div className={style.FilmData}>
          <div className={style.control}>
            <img className={style.Wall} src={`https://image.tmdb.org/t/p/w500${imgURL}`} alt={id} />
            <div className={style.hidden}>
              <button type="button" className={style.Play} onClick={this.callModal}>▶</button>
              <p className={style.WatchNow}>Watch Now</p>
              <button type="button" className={style.Info} onClick={this.switchMode}>View Info</button>
            </div>
          </div>
          <div className={style.FilmText}>
            <div className={style.Name}>
              <h3 className={style.NameText}>{name}</h3>
              <h2 className={style.TagsText}>{tagList}</h2>
            </div>
            <h1 className={style.RateText}>{rating.toFixed(1)}</h1>
          </div>
        </div>
      );
    }
    return (
      <div
        className={classNames(style.FilmData, style.Dark)}
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${imgURL})` }}
      >
        <button type="button" className={style.Close} onClick={this.switchMode}>✕</button>
        <div className={style.DetailsFilmText}>
          <div className={style.DetailsName}>
            <h3 className={style.DetailsNameText}>{name}</h3>
            <h2 className={style.DetailsTagsText}>{tagList}</h2>
          </div>
          <h1 className={style.DetailsRateText}>{rating.toFixed(1)}</h1>
        </div>
        <p className={style.Overview}>{overview}</p>
        <button type="button" className={style.DetailsPlay} onClick={this.callModal}>Watch Now</button>
      </div>
    );
  }
}

FilmData.defaultProps = {
  id: 0,
  name: 'Can\'t find property "name"',
  imgURL: '',
  rating: 0,
  tagList: 'Can\'t find property "tagList"',
  overview: 'Can\'t find property "overview"',
  openModal: () => {},
  setTrailer: () => {},
};

FilmData.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  imgURL: PropTypes.string,
  rating: PropTypes.number,
  tagList: PropTypes.string,
  overview: PropTypes.string,
  openModal: PropTypes.func,
  setTrailer: PropTypes.func,
};

export default FilmData;
