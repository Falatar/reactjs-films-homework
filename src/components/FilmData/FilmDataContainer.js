import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import showTrailer, { updatePath } from './actions';
import FilmData, { FilmDataDetails } from './FilmData';

class FilmDataContainer extends Component {
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
      return FilmData(imgURL, id, name, tagList, rating, this.callModal, this.switchMode);
    }
    return FilmDataDetails(
      imgURL, name, tagList, rating, overview, this.callModal, this.switchMode,
    );
  }
}

FilmDataContainer.defaultProps = {
  id: 0,
  name: 'Can\'t find property "name"',
  imgURL: '',
  rating: 0,
  tagList: 'Can\'t find property "tagList"',
  overview: 'Can\'t find property "overview"',
  openModal: () => {},
  setTrailer: () => {},
};

FilmDataContainer.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  imgURL: PropTypes.string,
  rating: PropTypes.number,
  tagList: PropTypes.string,
  overview: PropTypes.string,
  openModal: PropTypes.func,
  setTrailer: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(showTrailer()),
  setTrailer: (path) => dispatch(updatePath(path)),
});

export default connect(
  null,
  mapDispatchToProps,
)(FilmDataContainer);
