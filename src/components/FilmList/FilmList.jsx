import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './FilmList.scss';
import FilmDescription from '../FilmDescription';
import play from '../../static/play.svg';

class FilmList extends Component {
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

  setDefaultImg = () => {
    this.setState({ poster: 'https://cdn.pixabay.com/photo/2016/11/30/12/16/question-mark-1872665_1280.jpg' });
  }

  setImg = (imgURL) => {
    if (!imgURL) this.setDefaultImg();
    else this.setState({ poster: `https://image.tmdb.org/t/p/w500${imgURL}` });
  }

  render() {
    const {
      id, name, tagList, rating, overview,
    } = this.props;
    const { poster } = this.state;
    return (
      <div className={style.film__list}>
        <div className={style.poster}>
          <img
            className={style.wall}
            src={poster}
            alt={id}
          />
        </div>
        <div className={style.description}>
          <FilmDescription
            name={name}
            tagList={tagList}
            rating={rating}
            mode
          />
          <p className={style.overview}>{overview}</p>
        </div>
        <div className={style.play__button}>
          <button type="button" className={style.play} onClick={this.callModal}>
            <svg className={style.svg}>
              <use xlinkHref={play} />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

FilmList.defaultProps = {
  id: 0,
  name: 'Can\'t find property "name"',
  imgURL: '',
  rating: 0,
  tagList: 'Can\'t find property "tagList"',
  overview: 'Can\'t find property "overview"',
  callTrailer: () => 'can\'t find callTrailer function',
  setTrailer: () => 'can\'t find setTrailer function',
};

FilmList.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  imgURL: PropTypes.string,
  rating: PropTypes.number,
  tagList: PropTypes.string,
  overview: PropTypes.string,
  callTrailer: PropTypes.func,
  setTrailer: PropTypes.func,
};

export default FilmList;
