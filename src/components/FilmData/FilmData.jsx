import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './FilmData.scss';
import FilmDescription from '../FilmDescription';

class FilmData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsMode: false,
      poster: '',
    };
  }

  componentDidMount() {
    const { imgURL } = this.props;
    this.setImg(imgURL);
  }

  switchMode = () => {
    this.setState((state) => ({
      detailsMode: !state.detailsMode,
    }));
  }

  callModal = () => {
    const { callTrailer, setTrailer, id } = this.props;
    setTrailer(id);
    callTrailer();
  }

  checkImgSizes = () => {
    if (this.width + this.height === 0) {
      this.onerror();
    }
  }

  setDefaultImg = () => {
    this.setState({ poster: 'https://cdn.pixabay.com/photo/2016/11/30/12/16/question-mark-1872665_1280.jpg' });
  }

  setImg = (imgURL) => {
    this.setState({ poster: `https://image.tmdb.org/t/p/w500${imgURL}` });
  }

  render() {
    const {
      id, name, tagList, rating, overview,
    } = this.props;
    const { detailsMode, poster } = this.state;
    if (!detailsMode) {
      return (
        <div className={style.film__data}>
          <div className={style.control}>
            <img
              className={style.wall}
              src={poster}
              alt={id}
              onLoad={this.checkImgSizes}
              onError={this.setDefaultImg}
            />
            <div className={style.hidden}>
              <button type="button" className={style.play} onClick={this.callModal}>▶</button>
              <p className={style.watch__now}>Watch Now</p>
              <button type="button" className={style.info} onClick={this.switchMode}>View Info</button>
            </div>
          </div>
          <FilmDescription
            name={name}
            tagList={tagList}
            rating={rating}
            mode
          />
        </div>
      );
    }
    return (
      <div
        className={classNames(style.film__data, style.dark)}
        style={{ backgroundImage: `url(${poster})` }}
      >
        <button type="button" className={style.close} onClick={this.switchMode}>✕</button>
        <FilmDescription
          name={name}
          tagList={tagList}
          rating={rating}
          mode={false}
        />
        <p className={style.overview}>{overview}</p>
        <button type="button" className={style.details_play} onClick={this.callModal}>Watch Now</button>
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
  callTrailer: () => {},
  setTrailer: () => {},
};

FilmData.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  imgURL: PropTypes.string,
  rating: PropTypes.number,
  tagList: PropTypes.string,
  overview: PropTypes.string,
  callTrailer: PropTypes.func,
  setTrailer: PropTypes.func,
};

export default FilmData;
