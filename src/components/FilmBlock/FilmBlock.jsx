import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilmBlockFrontSide from '../FilmBlockFrontSide';
import FilmBlockBackSide from '../FilmBlockBackSide';

class FilmBlock extends Component {
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
        <FilmBlockFrontSide
          id={id}
          name={name}
          tagList={tagList}
          poster={poster}
          rating={rating}
          callModal={this.callModal}
          switchMode={this.switchMode}
          checkImgSizes={this.checkImgSizes}
          setDefaultImg={this.setDefaultImg}
        />
      );
    }
    return (
      <FilmBlockBackSide
        name={name}
        tagList={tagList}
        poster={poster}
        rating={rating}
        overview={overview}
        callModal={this.callModal}
        switchMode={this.switchMode}
      />
    );
  }
}

FilmBlock.defaultProps = {
  id: 0,
  name: 'Can\'t find property "name"',
  imgURL: '',
  rating: 0,
  tagList: 'Can\'t find property "tagList"',
  overview: 'Can\'t find property "overview"',
  callTrailer: () => 'can\'t find callTrailer function',
  setTrailer: () => 'can\'t find setTrailer function',
};

FilmBlock.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  imgURL: PropTypes.string,
  rating: PropTypes.number,
  tagList: PropTypes.string,
  overview: PropTypes.string,
  callTrailer: PropTypes.func,
  setTrailer: PropTypes.func,
};

export default FilmBlock;
